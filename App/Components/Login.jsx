/* An example app that uses expo-auth-session to connect to Azure AD (or hopefully most providers)
Features: 
- secure cache with refresh on load
- securely stored refresh token using expo-secure-store
- uses zustand for global access to the token / logout 
Based on [this gist](https://gist.github.com/thedewpoint/181281f8cbec10378ecd4bb65c0ae131)
*/

import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";
import {
  makeRedirectUri,
  useAuthRequest,
  DiscoveryDocument,
  AccessTokenRequest,
  exchangeCodeAsync,
  fetchDiscoveryAsync,
  TokenResponseConfig,
  TokenResponse,
  // IF YOUR PROVIDER SUPPORTS A `revocationEndpoint`:
  // revokeAsync, RefreshTokenRequestConfig, TokenTypeHint,
  refreshAsync,
} from "expo-auth-session";
import jwtDecode from "jwt-decode";
import { create } from "zustand";

// https://gist.github.com/jdthorpe/aaa0d31a598f299a57e5c76535bf0690
// --------------------------------------------------
// CONFIGURATION CONSTANTS
// --------------------------------------------------
const endpoint = "dev-lv87eip48bt5k7ku.us.auth0.com";
const clientId = "JrTZcLsPtOFvg6cOBNe2gCK4K1umsENG";
const scheme = "exp";
const scopes = ["openid", "offline_access", "profile", "email"];

// --------------------------------------------------

const AUTH_STORAGE_KEY = "refreshToken";
const storeRefreshToken = async (token) =>
  setItemAsync(AUTH_STORAGE_KEY, token);
const deleteRefreshToken = async () => deleteItemAsync(AUTH_STORAGE_KEY);
const fetchRefreshToken = async () => getItemAsync(AUTH_STORAGE_KEY);

// --------------------------------------------------
// Global Store
// --------------------------------------------------

// interface User {
//   idToken: string;
//   decoded: any;
// }
// interface StoreConfig {
//   user: null | User;
//   discovery: DiscoveryDocument | null;
//   authError: null | string;
//   logout: () => void;
//   setAuthError: (authError: string | null) => void;
//   setTokenResponse: (responseToken: TokenResponse) => void;
//   maybeRefreshToken: () => Promise<void>;

// }

const useUserStore = create((set, get) => ({
  user: null,
  discovery: null,
  authError: null,
  setAuthError: (authError) => set({ authError }),

  logout: async () => {
    try {
      set({ user: null, authError: null });
      deleteRefreshToken();

      // // IF YOUR PROVIDER SUPPORTS A `revocationEndpoint` (which Azure AD does not):
      // const token = await fetchRefreshToken()
      // const discovery = get().discovery || await fetchDiscoveryAsync(endpoint)
      // await token ? revokeAsync({ token, clientId }, discovery) : undefined
    } catch (err) {
      set({
        authError: "LOGOUT: " + (err.message || "something went wrong"),
      });
    }
  },

  setTokenResponse: (responseToken) => {
    // cache the token for next time
    const tokenConfig = responseToken.getRequestConfig();
    const { idToken, refreshToken } = tokenConfig;

    refreshToken && storeRefreshToken(refreshToken);

    // extract the user info
    if (!idToken) return;
    const decoded = jwtDecode(idToken);
    set({ user: { idToken, decoded } });
  },

  maybeRefreshToken: async () => {
    const refreshToken = await fetchRefreshToken();
    if (!refreshToken) return; // nothing to do
      const discovery = get().discovery || (await fetchDiscoveryAsync(endpoint));
      console.log("discovery", discovery);
    get().setTokenResponse(
      await refreshAsync({ clientId, refreshToken }, discovery)
    );
  },
}));

fetchDiscoveryAsync(endpoint).then((discovery) =>
  useUserStore.setState({ discovery })
).catch((error) => console.error('Error fetching discovery document:', error));

// --------------------------------------------------
// --------------------------------------------------

WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }) {
  const {
    user,
    discovery,
    authError,
    setAuthError,
    setTokenResponse,
    maybeRefreshToken,
    logout,
  } = useUserStore();
  const [cacheTried, setCacheTried] = useState(false);
  const [codeUsed, setCodeUsed] = useState(false);
  const redirectUri = makeRedirectUri({ scheme });
  const [request, response, promptAsync] = useAuthRequest(
    { clientId, scopes, redirectUri },
    discovery
  );
  console.log("discovery", discovery);
  console.log("user", user);
  console.log("authError", authError);
  console.log("clientId", clientId);
  console.log("scopes", scopes);
    console.log("redirectUri", redirectUri);
  console.log("request", request);
  console.log("response", response);

  useEffect(() => {
    WebBrowser.warmUpAsync();
    setAuthError(null);
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  useEffect(() => {
    // try to fetch stored creds on load if not already logged (but don't try it
    // more than once)
    if (user || cacheTried) return;
    setCacheTried(true); //
    maybeRefreshToken();
  }, [cacheTried, maybeRefreshToken, user]);

  useEffect(() => {
    if (
      !discovery || // not ready...
      codeUsed // Access tokens are only good for a single use
    )
      return;

    if (response?.type === "error") {
      setAuthError(
        "promptAsync: " + (response.params.error || "something went wrong")
      );
      return;
    }

    if (!discovery || response?.type !== "success") return;
    const code = response.params.code;
    if (!code) return;

    const getToken = async () => {
      let stage = "ACCESS TOKEN";
      try {
        setCodeUsed(true);
        const accessToken = new AccessTokenRequest({
          code,
          clientId,
          redirectUri,
          scopes: ["openid", "offline_access", "profile", "email"],
          extraParams: {
            code_verifier: request?.codeVerifier ? request.codeVerifier : "",
          },
        });
        stage = "EXCHANGE TOKEN";
        console.log("accessToken", accessToken, discovery);
        setTokenResponse(await exchangeCodeAsync(accessToken, discovery));
      } catch (e) {
        setAuthError(stage + ": " + (e.message || "something went wrong"));
      }
    };
    getToken();
  }, [response, discovery, codeUsed]);
    console.log("request", request);
    console.log("user", user);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Button
            disabled={!request || user}
            title="Log in"
            onPress={() => {
              setCodeUsed(false);
              promptAsync();
            }}
          />
        </View>

        <Button disabled={!user} title="Log out" onPress={logout} />
        <Button
          disabled={!authError}
          title="Clear"
          onPress={() => setAuthError(null)}
        />
      </View>

      <Text style={[styles.text]}>
        Cache tried: {cacheTried ? "yes" : "no"}
      </Text>
      <Text style={[styles.text]}>
        Code exists: {!!response?.params?.code ? "yes" : "no"}
      </Text>
      <Text style={[styles.text]}>Code Used: {codeUsed ? "yes" : "no"}</Text>
      <Text style={styles.text}>{JSON.stringify(response)}</Text>

      {authError ? (
        <>
          <Text style={[styles.heading]}>Auth Error:</Text>
          <Text style={[styles.text, styles.error]}>{authError}</Text>
        </>
      ) : null}
      <Text style={[styles.heading]}>Redirect Uri:</Text>
      <Text style={[styles.text]}>{redirectUri}</Text>
      <Text style={[styles.heading]}>Token Data:</Text>
      {user ? (
        <Text style={[styles.text]}>{JSON.stringify(user.decoded)}</Text>
      ) : null}
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    outerWidth: "100%",
    padding: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  heading: {
    padding: 5,
    fontSize: 24,
  },
  text: {
    padding: 5,
    fontSize: 14,
  },
  error: {
    color: "red",
  },
  box2: {
    width: "90%",
    height: 100,
    backgroundColor: "blue", // Example color
    borderRadius: 20,
    marginBottom: 20,
  },
});
