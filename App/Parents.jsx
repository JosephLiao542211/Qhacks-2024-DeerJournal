import React from "react";
import { View, ScrollView, StyleSheet, Dimensions, Text, Button } from 'react-native';
import { LineChart, BarChart, ContributionGraph } from "react-native-chart-kit";


function Parents() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={[styles.h1,{alignSelf:"flex-start",paddingTop:"8%"}]}>Check in {"\n"} on Olivia</Text>
        <Text style={[styles.h1,{fontSize:18, paddingTop:"8%"}]}>Average length of Journals</Text>
      <View style={styles.box1}>
        
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
              data: [
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000
              ]
            }]
          }}
          width={Dimensions.get("window").width}
          height={250}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={ {
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#86A7FC",
            backgroundGradientTo: "#7097FA",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 0,
              padding:"5%"
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }
          }
        />
      </View>
      <Text style={[styles.h1,{fontSize:18, paddingTop:"8%"}]}>Total Days Journaled</Text>
      
      <View style={styles.box1}>
        <BarChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
              data: [
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50
              ]
            }]
          }}
          width={Dimensions.get("window").width}
          height={250}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={
            {
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#FDB662",
                backgroundGradientTo: "#FFCF96",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 0,
                  padding:"5%"
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }
              
          }
        />
      </View>
      <Text style={[styles.h1,{fontSize:18, paddingTop:"8%"}]}>Interaction Heatmap</Text>
      <View style={styles.box2}>
        <ContributionGraph
          values={[
            { "date": "2017-01-07", "count": 6 },
            { "date": "2017-01-08", "count": 8 },
            { "date": "2017-01-09", "count": 3 },
            { "date": "2017-02-01", "count": 5 },
            { "date": "2017-02-02", "count": 9 },
            { "date": "2017-02-03", "count": 7 },
            { "date": "2017-02-04", "count": 3 },
            { "date": "2017-02-05", "count": 6 },
            { "date": "2017-02-06", "count": 10 },
            { "date": "2017-02-07", "count": 4 },
            { "date": "2017-03-02", "count": 6 },
            { "date": "2017-03-03", "count": 8 },
            { "date": "2017-03-04", "count": 5 },
            { "date": "2017-04-03", "count": 7 },
            { "date": "2017-04-04", "count": 8 },
            { "date": "2017-04-05", "count": 4 },
            { "date": "2017-04-06", "count": 6 },
            { "date": "2017-04-07", "count": 9 }
          ]}
          endDate={new Date("2017-04-01")}
          numDays={105}
          
          width={"100%"}
          height={220}
          chartConfig={ {
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#FF8080",
            backgroundGradientTo: "#FF4D4D",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(90, 255, 119, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 0,
              padding:"5%"
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }
          }
        />
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    h1: {
        fontFamily: "Dolpino",
        fontSize: 50,
        padding:"2%",
        color:"#000",
      },
    
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    justifyContent: "space-around",
    paddingVertical: "0%",
    width: "100%",
    backgroundColor: "#FFFFFF",
    
  },

  box2: {
    justifyContent: "space-around",
    paddingBottom: "5%",
    width: "100%",
    backgroundColor: "#FFFFFF",
    
  },
 
});

export default Parents;
