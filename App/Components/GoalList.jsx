import React, { useState } from 'react';
import GenBtn from './GenBtn';


import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

const initialData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

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
    <GenBtn text={"x"} bg={"0"} pressed={onDelete}></GenBtn>
  </View>
);

const GoalList = () => {
  const [data, setData] = useState(initialData);

  const addItem = () => {
    const newItem = {
      id: Math.random().toString(),
      title: `New Item ${data.length + 1}`,
    };
    setData([...data, newItem]);
  };

  const deleteItem = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>Monthly Goals</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {data.map((item) => (
          <Item key={item.id} title={item.title} onDelete={() => deleteItem(item.id)} />
        ))}
        {/* <Button title="Add Item" onPress={addItem}/> */}
        <GenBtn text={"Add Item"} bg={"#D9D9D9"} pressed={addItem} ></GenBtn>
      </ScrollView>
      
      <GenBtn text={"Generate"} bg={"green"}></GenBtn>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h2:{
    fontSize:34,
  },
  p1:{
    fontSize:18,
  },

  container: {
    flex: 1,
    margin: "5%",
  
  },
  scrollViewContent: {
    paddingBottom: 20, // Adjust padding to include the button
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    width: '100%',
    marginVertical: 8,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    flex: 1,
  },
  btn:{
    borderRadius:434,
    marginBottom:30,
  }
});

export default GoalList;
