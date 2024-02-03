import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import JournalPage from './Components/JournalPage';
import DateTimeSelector from './Components/DatetimeSelector';

const PastLogs = ({datetime}) => {
  return (
    <View>
        <DateTimeSelector></DateTimeSelector>
        <View style={styles.heading}>
            <Text> {datetime} </Text>
        </View>
       
        <JournalPage text="asdasasd2123dasd" >
            
        </JournalPage>
    </View>
  );
};

const styles = StyleSheet.create({
    heading: {
        margin:"5%",
        marginTop:"5%"
      },
  
});

export default PastLogs;

