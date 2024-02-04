import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const JournalPage = ({ text }) => {
  return (
    <View>
        <ScrollView style={styles.container} >
          <Text style={styles.p1}>{text}</Text>
        </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container:{
        
        padding: "5%",
        backgroundColor:"#FFCF96",
        
        marginTop:"10%",
        height: "100%",
        borderRadius: 24,
        
        
    },

    p1:{
      fontFamily: "Dolpino",
      fontSize: 18,
      color: "#000000",

    }
  
});

export default JournalPage;
