import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import JournalPage from './Components/JournalPage';
import { useRoute } from '@react-navigation/native';
import { getTts } from './fetchBackend';
import { playSound } from './PresentJournal'
import GenBtn from './Components/GenBtn';

const SummaryJournal = ({navigation}) => {
  const route = useRoute();
  const text = route.params?.response;
  getTts(text).then(() => {
    playSound();
  });
  return (

    
      <View style={styles.container}>
        <Text style={styles.h1} >Almost Done!</Text>
        <GenBtn pressed={() => navigation.navigate("Home")} text={"Log it!"} bg={"#65D977"} ></GenBtn>
        <JournalPage text = {route.params?.response} />
      </View>
      
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:"5%",
    
  },
  scrollContainer: {
    // Margin at bottom
  },
  buttonContainer: {
    marginBottom: 90, // Margin at bottom
    alignItems: 'center',
  },

  h1:{
    fontFamily: "Dolpino",
    fontSize: 50,
    padding:"2%",
    color:"#000",
  }
});

export default SummaryJournal;
