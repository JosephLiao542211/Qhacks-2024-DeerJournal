import React, { useState } from "react";
import { StyleSheet, Button, View, Text, TouchableWithoutFeedback } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    setShowPicker(false); // Hide the picker when a date/time is selected
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDateTimePicker = () => {
    setShowPicker(true); // Show the picker when the button is clicked
  };

  const hideDateTimePicker = () => {
    setShowPicker(false); // Hide the picker when cancel is clicked or clicked away from the modal
  };

  const onOKPress = () => {
    // You can add additional logic here if needed
    hideDateTimePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={showDateTimePicker}>
        <View>
          <Text style={styles.dateText}>{date.toLocaleString()}</Text>
        </View>
      </TouchableWithoutFeedback>
      {showPicker && (
        
          <DateTimePicker
            value={date}
            mode={"time"}
            is24Hour={true}
            onChange={onChange}
          />
      
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  dateText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
