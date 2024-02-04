import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DateSelector from './Components/Date';
import JournalPage from './Components/JournalPage';

const PastLogs = ({ datetime }) => {
  const [selectedDate, setSelectedDate] = useState(datetime || new Date());

  const incrementDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const decrementDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const getRandomText = () => {
    // Random text array
    const randomTexts = [
      "Today was a great day! The weather was beautiful, and I spent the morning walking in the park. In the afternoon, I met up with some friends for lunch and had a wonderful time catching up. In the evening, I watched my favorite movie and enjoyed a cozy night in.",
"Feeling awesome today! I woke up full of energy and ready to take on the day. After a healthy breakfast, I went for a refreshing run in the neighborhood. The rest of the day went smoothly, and I accomplished everything on my to-do list.",
"It's a wonderful day! The sun is shining brightly, and there's a gentle breeze in the air. I started my day with some yoga and meditation, feeling grateful for the present moment. Later, I went for a bike ride and explored some new paths in the countryside.",
"Had a productive day! I tackled several projects at work and made significant progress. In the afternoon, I attended a productive meeting with my team and contributed some innovative ideas. Overall, I feel accomplished and satisfied with what I've achieved today.",
"This is Filler text! It's often used as a placeholder or temporary content in a document or application. While it doesn't convey any meaningful information, it serves the purpose of demonstrating how the layout or design would look with actual text. Despite its lack of meaning, filler text can still be formatted or styled to match the intended appearance of the final content."

      // Add more random texts as needed
    ];

    // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayOfWeek = selectedDate.getDay();

    // Use modulus to cycle through the random texts array based on the day of the week
    const index = dayOfWeek % randomTexts.length;

    return randomTexts[index];
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.h3}>
          Choose a date:
        </Text>
      </View>
      <View style={styles.dateContainer}>
        <Button title="-" onPress={decrementDay} />
        
        <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>

        <Button title="+" onPress={incrementDay} />
        
      </View>
      <JournalPage text={getRandomText()} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: "5%",
    marginTop: "5%"
  },
  container: {
    flex: 1,
    margin: "5%",
  },
  h3: {
    fontFamily: "Dolpino",
    fontSize: 18,
    color: "#000000",
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  dateText: {
    fontSize: 18,
  },
});

export default PastLogs;
