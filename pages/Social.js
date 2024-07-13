import { View,Text,StyleSheet } from'react-native';
function Social() {
  return ( 
    <View style={styles.container}>
      <Text>this is Social</Text>
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
export default Social;