import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text> Your Streak </Text>
      </View>
      <View style={styles.main}>
        {/* Main Section */}
        <View style={styles.box1}></View>
        <View style={styles.row}>
          <View style={styles.rowtwo}>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          </View>

          <View style={styles.box4}></View>
        </View>
      </View>

      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Journal')
      }
    />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    margin:"5%",
    marginTop:"20%"
  },
  main: {
    flex: 1,
    flexDirection: 'colum',
    padding: 15,
  },
  box1: {
    width: '100%',
    height: 200,
    backgroundColor: 'red', // Example color
    borderRadius: 20,
    marginBottom: 20,
  },
  box2: {
    width: '90%',
    height: 100,
    backgroundColor: 'blue', // Example color
    borderRadius: 20,
    marginBottom: 20,
  },
  box3: {
    width: '90%',
    height: 100,
    backgroundColor: 'green', // Example color
    borderRadius: 20,
    marginBottom: 20,
  },
  box4: {
    width: '50%',
    height: 220,
    backgroundColor: 'yellow', // Example color
    borderRadius: 20,
  },

  row: {
    flex:1,
    flexDirection:"row"
    
  },

  rowtwo: {
    flex:1,
    flexDirection:"colum",
    
    
  },




});

export default HomeScreen;

