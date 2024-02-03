import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import GoalList from './Components/GoalList';

const Envision = () => {
  return (
    <View style={styles.container}>
         <GoalList></GoalList>

    </View>
       
 
  
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:"5%",
        height:"fit-content",
      },
  
});

export default Envision;

