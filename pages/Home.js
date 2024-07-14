import { View,Text,StyleSheet } from'react-native';
import { useTheme } from 'react-native-paper';

function Home() {
  const theme = useTheme();

  return ( 
    <View style={styles.container(theme)}>
      <Text>this is home</Text>
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