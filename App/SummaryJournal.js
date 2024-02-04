import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import JournalPage from './Components/JournalPage';
import { useJournals } from './JournalContext';

const SummaryJournal = () => {
  const {journalText, removeJournal, addJournal} = useJournals();
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await removeJournal();
        setText(temp);
        console.log(temp);
      } catch (error) {
        console.error('Error fetching summary:', error);
      }
    };

    fetchData();
  }, []);

  return (
    
      
      <JournalPage text = {text} />
      
      
    
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
