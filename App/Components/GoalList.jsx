import React, { useState, useEffect, useRef } from "react";
import GenBtn from "./GenBtn";
import { useGoals } from "../goalsContext";

import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
  Pressable
} from "react-native";

const Item = ({ title, onDelete }) => (
  <View style={styles.item}>
    <TextInput
      style={styles.title}
      multiline={true}
      blurOnSubmit={true}
      // Set a max height for the text input
    >
      {title}
    </TextInput>
    <Pressable  onPress={onDelete}>
      <View style={{height:20, width:20}}>
        <Text> x </Text>

      </View>
      
    </Pressable>
    
  </View>
);

const GoalList = () => {
  const { goalImageUrlPairs, removeGoal, addGoal, editGoal } = useGoals();

  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    if (isInputFocused) {
      inputRef.current.focus();
    }
  }, [isInputFocused]);

  const [loadingGoal, setLoadingGoal] = useState(null);

  useEffect(() => {
    setLoadingGoal(null);
  }, [goalImageUrlPairs]);

  const [newGoal, setNewGoal] = useState(null);
  const inputRef = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Monthly Goals</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* {data.map((item) => (
          <Item key={item.id} title={item.title} onDelete={() => deleteItem(item.id)} />
        ))} */}
        {Object.keys(goalImageUrlPairs).map((item, index) => (
          <Item key={item} title={item} onDelete={() => removeGoal(item)} />
        ))}
        {loadingGoal ? <Item title={loadingGoal} /> : null}

        {/* <Button title="Add Item" onPress={addItem}/> */}
        {isInputFocused ? (
          <TextInput
            ref={inputRef}
            onChangeText={(text) => {
              setNewGoal(text);
            }}
            onBlur={() => {
              addGoal(newGoal);
              setLoadingGoal(newGoal);
              console.log("updated", goalImageUrlPairs);
              setIsInputFocused(false);
            }}
            // Other props...
          />
        ) : (
          <GenBtn
            text={"Add Item"}
            bg={"#D9D9D9"}
            pressed={() => {
              setIsInputFocused(true);
            }}
          />
        )}
      </ScrollView>

      <GenBtn text={"Generate"} bg={"green"}></GenBtn>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 34,
  },
  p1: {
    fontSize: 18,
  },

  container: {
    flex: 1,
    margin: "5%",
  },
  scrollViewContent: {
    paddingBottom: 20, // Adjust padding to include the button
  },
  item: {
    backgroundColor: '#86A7FC',
    padding: 15,
    width: "100%",
    marginVertical: 8,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    flex: 1,
  },
  btn:{
    borderRadius:434,
    marginBottom:30,
  },
  h1: {
    fontFamily: "Dolpino",
    fontSize: 50,
    padding:"2%",
    color:"#000",
  },

  h2: {
    fontFamily: "Dolpino",
    fontSize: 34,
    padding:"2%",
    color:"#FFF",
  },

  h2a: {
    fontFamily: "Dolpino",
    fontSize: 34,
    // padding:"2%",
    color:"#FFF",
  },

  h3: {
    fontFamily: "Dolpino",
    fontSize: 18,
    padding:"2%",
    color:"#7097FA",
  },
});

export default GoalList;
