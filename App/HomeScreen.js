import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Image, Pressable } from 'react-native';
import DateTimeSelector from './Components/DatetimeSelector';
import GalleryVB from './Components/Gallery';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading} >
        <Text> Your Streak </Text>
        <DateTimeSelector></DateTimeSelector>
      </View>

      <View style={styles.main}>
        {/* Main Section */}
        <Pressable style={styles.box1} onPress={() =>
            navigation.navigate('Journal')
          } >
          <View ></View>
        </Pressable>
        

        <View id="Visionboard" style={styles.box1}>
          <GalleryVB></GalleryVB>
        </View>

        <View style={styles.row}>
          <View style={styles.rowtwo}>
          <Pressable style={styles.box2} onPress={() =>
            navigation.navigate('Activity')
          }>
            <View></View>
          </Pressable>
          <Pressable style={styles.box3} onPress={() =>
            navigation.navigate('Envision')
          }>
            <View></View>
          </Pressable>
          </View>
          <Pressable style={styles.box4} onPress={() =>
            navigation.navigate('Past Logs')}>
            <View >
              <Text>
                Past Logs
              </Text>
            </View>
            </Pressable>
          </View>
        
        
       
        
      </View>

      
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:"5%"
  },
  heading: {
    margin:"5%",
    marginTop:"5%"
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

