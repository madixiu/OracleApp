import { View,Text,StyleSheet } from'react-native';
function Goals() {
  return ( 
    <View style={styles.container}>
      <Text>this is Goals</Text>
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
export default Goals;