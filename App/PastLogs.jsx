import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import JournalPage from './Components/JournalPage';
import DateTimeSelector from './Components/DatetimeSelector';

const PastLogs = ({datetime}) => {
  return (
    <View>
      <View style={styles.heading}>

      <Text style={styles.h3}>
        Set a date:
      </Text>

         <DateTimeSelector></DateTimeSelector>
        

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
        color:"#000",
      },
  
});

export default PastLogs;

