import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import JournalPage from './Components/JournalPage';
import { useRoute } from '@react-navigation/native';

const SummaryJournal = () => {
  const route = useRoute();
  return (
    
      
      <JournalPage text = {route.params?.response} />
      
      
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    // Margin at bottom
  },
  buttonContainer: {
    marginBottom: 90, // Margin at bottom
    alignItems: 'center',
  },
});

export default SummaryJournal;
