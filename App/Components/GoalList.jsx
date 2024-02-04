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
  Pressable,
} from 'react-native';

const initialData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Start Typing....',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Start Typing....',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Start Typing....',
  },
];

const Item = ({ title, onDelete }) => (
  <View style={styles.item}>
    <TextInput 
      style={styles.p1} 
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
  const [data, setData] = useState(initialData);

  const addItem = () => {
    const newItem = {
      id: Math.random().toString(),
      title: `Start Typing....`,
    };
    setData([...data, newItem]);
  };

  const deleteItem = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Monthly Goals</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {data.map((item) => (
          <Item key={item.id} title={item.title} onDelete={() => deleteItem(item.id)} />
        ))}
        {/* <Button title="Add Item" onPress={addItem}/> */}
        <GenBtn text={"Add Goals"} bg={"#D9D9D9"} pressed={addItem} ></GenBtn>
      </ScrollView>
      
      <GenBtn text={"Generate Vision"} bg={"#65D977"}></GenBtn>
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
    backgroundColor: '#86A7FC',
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
