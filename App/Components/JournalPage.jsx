import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const JournalPage = ({ text }) => {
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.p1}>{text}</Text>
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container:{
        
        padding: "5%",
        backgroundColor:"#FFCF96",
        marginHorizontal:"5%",
        height: "100%",
        borderRadius: 24,
        
        
    },

    p1:{

    }
  
});

export default JournalPage;
