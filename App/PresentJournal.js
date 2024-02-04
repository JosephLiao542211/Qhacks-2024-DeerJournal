import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, TextInput,TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import Svg, { Path } from "react-native-svg";
import * as Speech from "expo-speech";
import { Audio } from "expo-av";
import { getFirstQuestion, getFollowUp, getNext } from "./fetchBackend";
import GenBtn from "./Components/GenBtn";

const PresentJournal = ({navigation}) => {
  // async function getQuestion(prevQuestions, prevAnswers) {
  //   if (prevQuestions.length == 0) {
  //     const firstQuestion = getFirstQuestion();
  //     setQuestion(firstQuestion);
  //   } else {
  //     const followUpQuestion = getFollowUpQuestion(prevQuestions, prevAnswers);
  //     setQuestion(followUpQuestion);
  //   }
  // }
  const [prevQuestions, setPrevQuestions] = useState([]);
  const [prevAnswers, setPrevAnswers] = useState([]);
  const [chatlog, setChatlog] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerResponse, setAnswerResponse] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [hasAnswered, setHasAnswered] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const question = await getFirstQuestion();
        setQuestion(question);
      } catch (error) {
        console.error('Error fetching first question:', error);
      }
    };

    fetchData();
  }, []);

  

  async function startRecording() {
    try {
      if (permissionResponse.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {Keyboard.dismiss();}}>
    <View style={styles.main}>
      {/* Main Section */}


      <ScrollView style={styles.box1}>
        <View>
          <Text style={styles.p1}>{question}</Text>
        </View>
      </ScrollView>

      
      <View style={styles.box2}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={4}
          value={answer}
          onChangeText={(text) => {
            setAnswer(text);
          }}
        />     
      </View>
      {(hasAnswered && answerResponse) ?
        <ScrollView style={styles.box1}>
          <Text style={styles.p1}>{answerResponse}</Text>   
        </ScrollView> : null}

      {/* <Pressable
        style={styles.box3}
        onPress={() => {
          recording ? stopRecording() : startRecording();
        }}
      >
        <View>
          {recording ? (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="50em"
              height="50em"
              viewBox="0 0 24 24"
            >
              <Path
                fill="white"
                d="M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m6-2.5A1.5 1.5 0 0 1 9.5 8h5A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 14.5z"
              />
            </Svg>
          ) : (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="50em"
              height="50em"
              viewBox="0 0 24 24"
            >
              <Path
                fill="white"
                d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-16C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"
              />
            </Svg>
          )}
        </View>
      </Pressable> */}
      {hasAnswered ? (
        <GenBtn
          text={"Next"}
          bg={"#65D977"}
          pressed={async () => {
            // const followUp = getFollowUp();
            // nextQuestion = followUp.question;
            // setAnswerResponse(followUp.answerResponse);
            var tempq = {role: "assistant",
            content: question};
            var response = await getNext(questionNumber,chatlog,false);
            setQuestion(response);
            setPrevQuestions([...prevQuestions,tempq])
            setChatlog([...chatlog,tempq])
            setAnswer("");
            setAnswerResponse("")
            if (questionNumber === 5) {
              response = await summarize(chatlog);
              console.log(response);
              navigation.navigate("Summary",{response});
            }
            setHasAnswered(false);
          }}
        >
          <View>
            <Text>Next</Text>
          </View>
        </GenBtn>
      ) : (
        <GenBtn
          text={"Next"}
          bg={"#65D977"}
          pressed={async () => {
            var tempq = {role: "assistant",
            content: question};
            var tempa = {role: "user",
            content: answer};
            setPrevQuestions([...prevQuestions,tempq]);
            setPrevAnswers([...prevAnswers,tempa]);
            setHasAnswered(true);
            var response = await getNext(questionNumber+1,[...chatlog,tempq,tempa],true); 
            setChatlog([...chatlog,tempq,tempa]);
            setAnswerResponse(response);
            setQuestionNumber(questionNumber + 1);
          }}
        >
          
        </GenBtn>
      )}

      <View style={styles.row}>
        <View style={styles.rowtwo}></View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
  },
  heading: {
    margin: "5%",
    marginTop: "5%",
  },
  main: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
  },
  p1: {

    fontFamily: "Dolpino",
    fontSize: 18,
    color:"#000",
  },
  box1: {
    padding:"5%",
    width: "100%",
    backgroundColor: "#FEC27B", // Example color
    borderRadius: 20,
    marginBottom: 20,
  },
  box2: {
    width: "100%",
    height: 300,
    backgroundColor: "#D9D9D9", 
    padding:"5%",
    borderRadius:20,
    marginBottom: 20,
    position: "relative",
  },
  textInput: {
    fontFamily: "Dolpino",
    fontSize: 18,
    color: "#000",
    textAlignVertical: "top", // Align text to the top
    textAlign: "left", // Align text to the right
    height: "100%",
  },


  box3: {
    width: "90%",
    height: 100,
    backgroundColor: "green", // Example color
    borderRadius: 20,
    marginBottom: 20,
  },
  box4: {
    width: "50%",
    height: 100,
    backgroundColor: "#FEC27B", // Example color
    borderRadius: 20,
  },
  box5: {
    width: "90%",
    height: 75,
    backgroundColor: "gray", // Example color
    borderRadius: 20,
    marginBottom: 20,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },

  rowtwo: {
    flex: 1,
    flexDirection: "colum",
  },
});

export default PresentJournal;
