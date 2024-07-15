import { View,Text,StyleSheet, Pressable ,TouchableOpacity} from'react-native';
import { Button, useTheme} from 'react-native-paper';

function Home() {
  const theme = useTheme();

  return ( 
    <View style={styles.container(theme)}>
      <Text>this is home</Text>
      <Button onPress={()=> console.log("button pressed")}>OK</Button>
    </View>
   );
}



const styles = StyleSheet.create({
  container: (theme) => ({
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: theme.colors.background
  })
});
export default Home;