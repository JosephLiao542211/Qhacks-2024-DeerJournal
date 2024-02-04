import React from "react";
import { View, Image, FlatList, StyleSheet, Dimensions, Text } from "react-native";
import { useGoals } from "../goalsContext";

const VisionBoard = () => {
  const { goalImageUrlPairs } = useGoals();
  const imageUrls = Object.values(goalImageUrlPairs);
  const images = imageUrls ? [...imageUrls] : [];

  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Your Vision Board </Text>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    fontFamily: "Dolpino",
    fontSize: 50,
    padding:"2%",
    color:"#000",
  },
  contentContainer: {
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 320,
    borderRadius: 20,
    margin: "5%",
    resizeMode: "cover",
  },
});

export default VisionBoard;
