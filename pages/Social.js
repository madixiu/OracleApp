import { View,Text,StyleSheet } from'react-native';
import { useTheme } from 'react-native-paper';

function Social() {
  const theme = useTheme();

  return ( 
    <View style={styles.container(theme)}>
      <Text>this is Social</Text>
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
export default Social;