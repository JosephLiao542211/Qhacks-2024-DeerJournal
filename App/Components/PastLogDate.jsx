import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Keyboard } from 'react-native';

const DatePicker = () => {
  const [date, setDate] = useState(getCurrentDate());

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      // To dismiss the keyboard when tapping outside the input
      Keyboard.dismiss();
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  function getCurrentDate() {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
    return `${month}-${day}-${year}`;
  }

  function handleDateChange(value) {
    setDate(value);
  }

  function handleIncrement() {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');
    const year = newDate.getFullYear().toString();
    const newDateString = `${month}-${day}-${year}`;
    setDate(newDateString);
  }

  function handleDecrement() {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');
    const year = newDate.getFullYear().toString();
    const newDateString = `${month}-${day}-${year}`;
    setDate(newDateString);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={handleDateChange}
        keyboardType="numeric"
        maxLength={10}
      />
      <TouchableOpacity onPress={handleDecrement}>
        <Text style={styles.navigationText}>◄</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleIncrement}>
        <Text style={styles.navigationText}>►</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    width: 120,
  },
  navigationText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

export default DatePicker;
