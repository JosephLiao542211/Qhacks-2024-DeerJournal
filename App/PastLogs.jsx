import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import JournalPage from './Components/JournalPage';
import DateTimeSelector from './Components/DatetimeSelector';
import DateSelector from './Components/Date';
import TranscriptionComponent from './Components/Transcription';

const PastLogs = ({datetime}) => {
  return (
    <View>
      <View style={styles.heading}>

      <Text style={styles.h3}>
        Choose a date:
      </Text>

         <DateSelector></DateSelector>
         

      </View>
      
        <View style={styles.heading}>
            <Text> {datetime} </Text>
        </View>
          <JournalPage text="asdasasd2123dasd" > </JournalPage>
    </View>
  );
};

const styles = StyleSheet.create({
    heading: {
        marginHorizontal:"5%",
        marginTop:"5%"
      },
      h3: {
        fontFamily: "Dolpino",
        fontSize: 18,
        color:"#000000",
        
      },
  
});

export default PastLogs;

