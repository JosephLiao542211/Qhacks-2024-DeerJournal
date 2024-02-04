import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAllImagesGoalUrlPairsFromStorage,
  removeImageFromStorage,
  getImage,
} from "./Goals";

const GoalsContext = createContext(undefined);

const GoalsProvider = ({ children }) => {
  const [goalImageUrlPairs, setGoalImageUrlPairs] = useState([]);

  useEffect(() => {
    const fetchGoalImageUrlPairs = async () => {
      const pairsFromStorage = await getAllImagesGoalUrlPairsFromStorage();
      setGoalImageUrlPairs(pairsFromStorage);
    };
  
    fetchGoalImageUrlPairs();
  }, []);
  
  async function removeGoal(goal) {
    await removeImageFromStorage(goal);
    setGoalImageUrlPairs(prevPairs => {
      const newPairs = { ...prevPairs };
      delete newPairs[goal];
      return newPairs;
    });
  }
  
  async function addGoal(goal) {
    const newImageUri = await getImage(goal);
    if (!newImageUri) {
      return false;
    }
    setGoalImageUrlPairs(prevPairs => ({
      ...prevPairs,
      [goal]: newImageUri,
    }));
    return true
  }
  
  async function editGoal(oldGoal, newGoal) {
    await removeGoal(oldGoal);
    await addGoal(newGoal);
  }

  return (
    <GoalsContext.Provider
      value={{ goalImageUrlPairs, removeGoal, addGoal, editGoal }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

function useGoals() {
  const context = useContext(GoalsContext);
  if (context === undefined) {
    throw new Error("useGoals must be used within a GoalsProvider");
  }
  return context;
}

export { GoalsProvider, useGoals };
