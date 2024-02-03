import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GenBtn = ({ pressed, text,bg}) => {
  return (
    <TouchableOpacity  onPress={pressed} style={[styles.container,{backgroundColor:bg}]}>
      <Text style={styles.text}>{text}</Text>
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
    text: {
      color: '#ffffff',
      fontSize: 16,
    },
  });
export default GenBtn;
