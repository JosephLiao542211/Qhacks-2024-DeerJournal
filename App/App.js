import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import PresentJournal from './PresentJournal';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Envision from './Envision';
import PastLogs from './PastLogs';
import Activity from './Activity';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Journal" component={PresentJournal} />
        <Stack.Screen name="Envision" component={Envision} />
        <Stack.Screen name="Past Logs" component={PastLogs} />
        <Stack.Screen name="Activity" component={Activity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const appstyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;


