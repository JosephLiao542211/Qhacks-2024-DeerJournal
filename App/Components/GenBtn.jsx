import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GenBtn = ({ pressed, text,bg}) => {
  return (
    <TouchableOpacity  onPress={pressed} style={[styles.container,{backgroundColor:bg}]}>
      <Text style={styles.h6}>{text}</Text>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
    container: {
      
      
      borderRadius: 50,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    h1: {
      fontFamily: "Dolpino",
      fontSize: 50,
      padding:"2%",
      color:"#",
    },
  
    h6: {
      fontFamily: "Dolpino",
      fontSize: 34,
      padding:"2%",
      color:"#FFF",
    },
  
  });
export default GenBtn;
