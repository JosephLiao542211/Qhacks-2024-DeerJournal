import AsyncStorage from "@react-native-async-storage/async-storage";
import { getImageUrl } from "./fetchBackend";

export async function storeImageFromUrl(goal, imageUrl) {
  const key = goal;
  try {
    const jsonImages = await AsyncStorage.getItem("@images");
    let images = jsonImages != null ? JSON.parse(jsonImages) : {};
    images[key] = imageUrl;
    const newJsonImages = JSON.stringify(images);
    await AsyncStorage.setItem("@images", newJsonImages);
  } catch (e) {
    console.error(e);
  }
}

export async function getImage(goal) {
  const imageUrl = await getImageUrl(goal);
  if (imageUrl == null) {
    return null;
  }
  storeImageFromUrl(goal, imageUrl);
  return imageUrl;
}

export async function getImageUrlFromStorage(goal) {
  const key = goal;
  try {
    const jsonImages = await AsyncStorage.getItem("@images");
    let images = jsonImages != null ? JSON.parse(jsonImages) : {};
    return images[key];
  } catch (e) {
    console.error(e);
  }
}

export async function getAllImagesGoalUrlPairsFromStorage() {
  try {
    const jsonImages = await AsyncStorage.getItem("@images");
    let images = jsonImages != null ? JSON.parse(jsonImages) : {};
    return images;
  } catch (e) {
    console.error(e);
  }
}

export async function removeImageFromStorage(goal) {
  try {
    const jsonImages = await AsyncStorage.getItem("@images");
    let images = jsonImages != null ? JSON.parse(jsonImages) : {};
    delete images[goal];
    const newJsonImages = JSON.stringify(images);
    await AsyncStorage.setItem("@images", newJsonImages);
  } catch (e) {
    console.error(e);
  }
}