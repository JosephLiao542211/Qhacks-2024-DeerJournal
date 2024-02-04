import React, { useState, useRef, useEffect } from "react";
import { View, Image, ScrollView, StyleSheet, Dimensions, FlatList } from "react-native";
import * as FileSystem from "expo-file-system";
import { useGoals } from "../goalsContext";
import GenBtn from "./GenBtn";

const VisionBoard = ({navigation}) => {
  const { goalImageUrlPairs } = useGoals();
  const imageUrls = Object.values(goalImageUrlPairs);
  const images = imageUrls ? [...imageUrls] : [];
  console.log("imageUrls", images);



  return (
    <View>

    
    <FlatList 
      style={styles.container}
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
      )}
    />
    <GenBtn pressed={() => navigation.navigate("Home")} text={"Return Home"} bg={"#86A7FC"} ></GenBtn>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 200,
    borderRadius:20,
    margin: "5%",
    // right: 30,
    resizeMode: "cover",
  },
  pagination: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#888",
    margin: 5,
  },
  paginationDotActive: {
    backgroundColor: "#fff",
  },
});

export default VisionBoard;
