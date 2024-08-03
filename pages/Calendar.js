import { View,Text,StyleSheet } from'react-native';
import { useTheme } from 'react-native-paper';
import SampleExpandableCalendar from '../components/Calendar/SampleExpandableCalendar';
function Calendar() {
  const theme = useTheme();

  return ( 
    <View style={styles.container(theme)}>
      <SampleExpandableCalendar />
    </View>
   );
  }
  
  const styles = StyleSheet.create({
    container: (theme) => ({
      flex:1,
      backgroundColor: theme.colors.background,
      marginBottom:80
    })
  });
export default Calendar;