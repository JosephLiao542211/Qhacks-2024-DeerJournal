import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const JournalPage = ({ text }) => {
  return (
    <View>
        <View style={styles.container}>
        <Text>{text}</Text>
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container:{
        
        padding: "5%",
        backgroundColor:"red",
        margin:"30%",
        height: "100%",
        borderRadius: 24,
        
    }
  
});

export default JournalPage;
