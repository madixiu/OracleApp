import { View,Text,StyleSheet } from'react-native';
function Calendar() {
  return ( 
    <View style={styles.container}>
      <Text>this is Calendar</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
});
export default Calendar;