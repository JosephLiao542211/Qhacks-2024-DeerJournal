import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimeSelector = ({ onChange }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      onChange(selectedDate); // Passing selected date to parent component
    }
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <View>
      <TouchableOpacity onPress={togglePicker}>
        <Text style={styles.dateText}>{date.toLocaleString()}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={false}
          display="spinner"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 18,
    justifyContent:"center",
    alignContent:"center",
    marginTop: 20,
    padding: 10,
    width:"80%",
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
});

export default DateTimeSelector;
