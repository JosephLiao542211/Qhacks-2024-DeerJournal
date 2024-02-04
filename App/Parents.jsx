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
import GalleryVB from "./Components/Gallery";
import { Calendar } from "react-native-calendars"
// const Parents = ({ navigation }) => {
//     return (
//       <ScrollView style={styles.container}>
//         <View style={styles.heading}>
//           <Text style={styles.h1}>Parental Overview</Text>
//         </View>
//         <View style={styles.main}>
//             <Calendar>
                
//             </Calendar>  
//         </View>
//       </ScrollView>
//     );
// };
const Parents = () => {
    const [markedDates, setMarkedDates] = useState(getInitialMarkedDates());
  
    function getInitialMarkedDates() {
      const initialMarkedDates = {};
      const today = new Date();
      const numberOfDaysToShow = 30;
  
      for (let i = 0; i < numberOfDaysToShow; i++) {
        const currentDate = new Date();
        currentDate.setDate(today.getDate() - 4 + i);
        const dateString = currentDate.toISOString().split('T')[0];
  
        const emojis = getEmojisForDate(i);
  
        initialMarkedDates[dateString] = {
          selected: true,
          marked: true,
          selectedColor: 'blue',
          customStyles: {
            container: {
              backgroundColor: 'transparent',
              flex: 1,
            },
            text: {
              fontSize: 14,
              color: 'black',
            },
          },
          text: emojis.join(' '), // Display emojis as text
        };
      }
  
      return initialMarkedDates;
    }
  
    function getEmojisForDate(date) {
      // Customize this function to return emojis based on the date or any other criteria
      const emojis = ['🌟', '📅', '🎉'];
      return emojis;
    }
  
    return (
      <View style={styles.container}>
        <Calendar
          markedDates={markedDates}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
  
    h1: {
      fontFamily: "Dolpino",
      fontSize: 50,
      padding:"2%",
      color:"#",
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
  });

export default Parents;