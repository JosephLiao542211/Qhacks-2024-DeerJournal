import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import GoalList from './Components/GoalList';
import GenBtn from './Components/GenBtn';

const Envision = () => {
  return (
    <View style={styles.container}>
      
        <GoalList />
      
      <View style={styles.buttonContainer}>
        <GenBtn text={"Generate"} />
      </View>
    </View>
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

export default Envision;
