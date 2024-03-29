import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import PresentJournal from './PresentJournal';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Envision from './Envision';
import PastLogs from './PastLogs';
import Activity from './Activity';
import Parents from './Parents';
import SummaryJournal from './SummaryJournal';
import { useCallback, useEffect } from 'react';
import { GoalsProvider } from "./goalsContext";
import VisionBoard from "./Components/VisionBoard";
// import Login from './Components/Login';

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Dolpino: require("./assets/fonts/Dolpino.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <GoalsProvider>
    <View style={appstyle.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome', headerShown: false}}
          />
          <Stack.Screen name="Journal" component={PresentJournal} />
          <Stack.Screen name="Summary" component={SummaryJournal} />
          <Stack.Screen name="Envision" component={Envision} />
          <Stack.Screen name="Past Logs" component={PastLogs} />
          <Stack.Screen name="Activity" component={Activity} />
          <Stack.Screen name="Parents" component={Parents} />
          <Stack.Screen name="Vision Board" component={VisionBoard} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </GoalsProvider>
  );
};

const appstyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
