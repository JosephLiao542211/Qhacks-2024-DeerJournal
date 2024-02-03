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
        
        <Pressable style={styles.box1} onPress={() =>
            navigation.navigate('Journal')
          } >
            <View style={styles.imgcontainer} >

              <Image
              style={styles.tinyLogo}
              source={require('./assets/Saly-26.png')}/>
              <Text style={styles.h2}> Daily {"\n"} Journal </Text>
            </View>
        </Pressable>
        

        <View id="Visionboard" style={styles.box1}>
          <GalleryVB></GalleryVB>
        </View>

        <View style={styles.row}>
          <View style={styles.rowtwo}>
          <Pressable style={styles.box2} onPress={() =>
            navigation.navigate('Envision')
          }>
            <View style={styles.imgcontainergoals}>
                <Image
                style={styles.rocket}
                source={require('./assets/Saly-43.png')}
                />
              <Text style={styles.h2}> Goals  </Text>
            </View>

          </Pressable>
          <Pressable style={styles.box3} onPress={() =>
            navigation.navigate('Activity')
          }>
              <View style={styles.imgcontainergoals}>
                <Image
                style={styles.flag}
                source={require('./assets/17.png')}

                />
              <Text style={styles.h2}> Activity  </Text>
            </View>
          </Pressable>
          </View>
          <Pressable style={styles.box4} onPress={() =>
            navigation.navigate('Past Logs')}>
            <View style={styles.imgcontainergoals}>
                <Image
                style={styles.clock}
                source={require('./assets/14.png')}

                />
              <Text style={styles.h2}> Past {"\n"} Logs  </Text>
            </View>
            </Pressable>
          </View>
        
        
       
        
      </View>

      
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  h2:{
    fontSize:34,
  },
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
    height: 300,
    backgroundColor: '#FF8080', // Example color
    borderRadius: 20,
    marginBottom: 20,
    
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 7,
    },

  box2: {
    width: '90%',
    height: 150,
    backgroundColor: '#FEC27B', // Example color
    borderRadius: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 7,

  
  },
  box3: {
    width: '90%',
    height: 150,
    backgroundColor: '#86A7FC', // Example color
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 4,
  },
  box4: {
    width: '50%',
    height: 322,
    backgroundColor: '#FFE382', // Example color
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 4,
  },

  row: {
    flex:1,
    flexDirection:"row"
    
  },

  rowtwo: {
    flex:1,
    flexDirection:"colum",
    
    
  },

  imgcontainer:{
    flex: 1,
    alignItems: 'flex-start', // Align items to the left
    justifyContent: 'flex-end', // Align items to the bottom 
    padding: "10%", // Example padding
  },
  imgcontainergoals:{
    flex: 1,
    alignItems: 'flex-start', // Align items to the left
    justifyContent: 'flex-end', // Align items to the bottom 
    padding: "10%", // Example padding
  },

  rocket:{
    // position: 'relative', // Use relative positioning
    top: 40,
    right:20,
    
  },
  flag:{
    // position: 'relative', // Use relative positioning
    top: 14,
 
    
  },
  clock:{
    // position: 'relative', // Use relative positioning
    top: 5,
    transform: [{ scale: 1.3 }],
    
    
  }





});

export default HomeScreen;

