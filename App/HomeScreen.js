import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import DateTimeSelector from './Components/DatetimeSelector';
import GalleryVB from './Components/Gallery';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading}>
        <Text> Your Streak </Text>
        <DateTimeSelector></DateTimeSelector>
      </View>

      <View style={styles.main}>
        {/* Main Section */}
        <View style={styles.box1}></View>
        <View id=" Visionboard" style={styles.box1}>
          <GalleryVB></GalleryVB>
        </View>
        <View style={styles.row}>
          <View style={styles.rowtwo}>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          </View>

          <View style={styles.box4}></View>
        </View>
        
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Journal')
          }
        />
        <Button
          title="Envision"
          color={"red"}
          onPress={() =>
            navigation.navigate('Envision')
          }
        />
        <Button
          title="PastLogs"
          color={"red"}
          onPress={() =>
            navigation.navigate('Envision')
          }
        />
        
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

