import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

const DATA = [
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

const Item = ({title}) => (
  <View style={styles.item}>
    <TextInput style={styles.title} multiline={true} blurOnSubmit={true} >{title} </TextInput>
  </View>
);

const GoalList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Monthly Goals
      </Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export default GoalList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:20,
    marginBottom: "20%", 
    marginTop: StatusBar.currentHeight || 0,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 35,
    width:"100%",
    marginVertical: 8,
    // marginHorizontal: 0,
    borderRadius: 30,
  },
  title: {
    fontSize: 32,
  },
});