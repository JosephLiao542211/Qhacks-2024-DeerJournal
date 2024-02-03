import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Left button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.leftButton}>Back</Text>
      </TouchableOpacity>
      
      {/* Title */}
      <Text style={styles.title}>{title}</Text>
      
      {/* Right button - Add more header elements if needed */}
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Text style={styles.rightButton}>Options</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80, // Specify your custom header height
    backgroundColor: '#f4511e', // Customize background color
    paddingHorizontal: 16, // Add horizontal padding
  },
  title: {
    fontSize: 20, // Customize title font size
    fontWeight: 'bold', // Customize title font weight
    color: '#fff', // Customize title color
  },
  leftButton: {
    fontSize: 16, // Customize left button font size
    color: '#fff', // Customize left button color
  },
  rightButton: {
    fontSize: 16, // Customize right button font size
    color: '#fff', // Customize right button color
  },
});

export default CustomHeader;
