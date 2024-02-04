import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import DateTimeSelector from "./Components/DatetimeSelector";
import ImageGallery from "./Components/Gallery";
import { useGoals } from "./goalsContext";

const HomeScreen = ({ navigation }) => {
  const { goalImageUrlPairs } = useGoals();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading}>

      <View style={styles.layout}>
      <View style={styles.jasp1}>
        <Text style={styles.h1}>Howdy,{"\n"}Olivia!</Text>
      </View>
      <View style={styles.jasp}>
        <View style={[styles.frame, { alignSelf: "flex-end" }]}>
          <View style={styles.outer}>
            <Image
              style={styles.inner}
              resizeMode="contain"
              source={require("./assets/IMG_3600.jpg")}
            />
          </View>
        </View>
      </View>
    </View>
      
        
        <Text style={styles.h3}> Your Streak: 178 days! </Text>
        <DateTimeSelector></DateTimeSelector>
      </View>

      <View style={styles.main}>
        <Pressable
          style={styles.box1}
          onPress={() => navigation.navigate("Journal")}
        >
          <View style={styles.imgcontainer}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/Saly-26.png")}
            />
            <Text style={styles.h2}> Daily {"\n"} Journal </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Vision Board")}>
          <View id="Visionboard" style={styles.box1}>
            <ImageGallery imageUrls={Object.values(goalImageUrlPairs)} />
          </View>
        </Pressable>

        <View style={styles.row}>
          <View style={styles.rowtwo}>
            <Pressable
              style={styles.box2}
              onPress={() => navigation.navigate("Envision")}
            >
              <View style={styles.imgcontainergoals}>
                <Image
                  style={styles.rocket}
                  source={require("./assets/Saly-43.png")}
                />
                <Text style={styles.h2}> Goals </Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.box3}
              onPress={() => navigation.navigate("Activity")}
            >
              <View style={styles.imgcontainergoals}>
                <Image
                  style={styles.flag}
                  source={require("./assets/17.png")}
                />
                <Text style={styles.h2}> Activity </Text>
              </View>
            </Pressable>
          </View>
          <Pressable
            style={styles.box4}
            onPress={() => navigation.navigate("Past Logs")}
          >
            <View style={styles.imgcontainergoals}>
              <Image style={styles.clock} source={require("./assets/14.png")} />
              <Text style={styles.h2}> Past {"\n"} Logs </Text>
            </View>
          </Pressable>

          

        </View>
        <Pressable
            style={styles.box5}
            onPress={() => navigation.navigate("Parents")}
          >
            <View style={styles.imgcontainergoals}>
              
              <Text style={styles.h2a}> Parent Mode </Text>
            </View>
          </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  h1: {
    fontFamily: "Dolpino",
    fontSize: 50,
    padding:"2%",
    color:"#000",
  },

  h2: {
    fontFamily: "Dolpino",
    fontSize: 34,
    padding:"2%",
    color:"#FFF",
  },

  h2a: {
    fontFamily: "Dolpino",
    fontSize: 34,
    // padding:"2%",
    color:"#FFF",
  },

  h3: {
    fontFamily: "Dolpino",
    fontSize: 18,
    padding:"2%",
    color:"#7097FA",
  },
  container: {
    flex: 1,
    padding: "5%",
  },
  dolpino: {
    
  },
  heading: {
    margin: "5%",
    marginTop: "5%",
  },
  main: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
  },
  box1: {
    width: "100%",
    height: 300,
    backgroundColor: "#FF8080", // Example color
    borderRadius: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 7,
  },

  box2: {
    width: "90%",
    height: 150,
    backgroundColor: "#FEC27B", // Example color
    borderRadius: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 7,
  },
  box3: {
    width: "90%",
    height: 150,
    backgroundColor: "#86A7FC", // Example color
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 4,
  },
  box4: {
    width: "50%",
    height: 322,
    backgroundColor: "#FFE382", // Example color
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 4,
  },

  row: {
    flex: 1,
    flexDirection: "row",
  },

  rowtwo: {
    flex: 1,
    flexDirection: "colum",
  },

  imgcontainer: {
    flex: 1,
    alignItems: "flex-start", // Align items to the left
    justifyContent: "flex-end", // Align items to the bottom
    padding: "10%", // Example padding
  },
  imgcontainergoals: {
    flex: 1,
    alignItems: "flex-start", // Align items to the left
    justifyContent: "flex-end", // Align items to the bottom
    padding: "10%", // Example padding
  },

  rocket: {
    // position: 'relative', // Use relative positioning
    top: 40,
    right: 20,
  },
  flag: {
    // position: 'relative', // Use relative positioning
    top: 14,
  },
  clock: {
    // position: 'relative', // Use relative positioning
    top: 5,
    transform: [{ scale: 1.3 }],
  },

  box5: {
    width: "100%",
    height: 100,
    backgroundColor: "#65D977", // Example color
    borderRadius: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 7,
  },
  pfpc:{
    flex:1,
    width:100,
    height:100,
    borderRadius:100,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"blue"

  },
  image: {
    width: '80%', // Adjust this width as needed
    height: '80%', // Adjust this height as needed
  },
  frame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  outer: {
    width: 100, // Adjust this according to your preference
    height: 100, // Adjust this according to your preference
    borderRadius: 100, // half of width and height to make it circular
    overflow: 'hidden', // to make sure image stays within the circular frame
    borderColor: 'white', // Add a border color if needed
    borderWidth: 2, // Add border width if needed
  },
  inner: {
    flex: 1,
    width: null,
    height: null,
  },

  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  jasp: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
  }
});

export default HomeScreen;
