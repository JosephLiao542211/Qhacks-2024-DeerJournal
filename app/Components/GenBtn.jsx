import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GenBtn = ({ pressed, text}) => {
  return (
    <Button title={text} style={styles.btn} onPress={pressed}>
    </Button>
    
  );
};

const styles = StyleSheet.create({
    btn:{
        padding:10,
        backgroundColor:"green",
    }

  
});

export default GenBtn;
