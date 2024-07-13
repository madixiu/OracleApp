import { View,Text,StyleSheet } from'react-native';
function Home() {
  return ( 
    <View style={styles.container}>
      <Text>this is home</Text>
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
export default Home;