import { View, Image,Text, StyleSheet } from "react-native";
import profilePicture from './../../assets/home/profilePicture.jpg'
import { IconButton, Badge } from 'react-native-paper';
export default function ProfileSection({theme}) {
  return ( 
    <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginTop:20,marginHorizontal:10}}>
      <View style={styles.profilePictureView}>
        <Image style={styles.profilePicture(theme)} source={profilePicture} />
        <View style={{marginStart:5}}>
          <Text style={styles.greeting(theme)}>{`Good ${getTimeOfDay()},`}</Text>
          <Text style={styles.name(theme)}>Allisa</Text>
        </View>
      </View>
      <View>
        <IconButton 
          icon="bell" 
          size={24} 
          onPress={() => console.log('Pressed')} 
          iconColor={theme.colors.primary}
        />
        <Badge 
          style={{ position: 'absolute', top: 5, right: 5 }} 
          size={20} 
          selectionColor={'blue'}
        >
          2
        </Badge>
      </View>
    </View>
   );
}


function getTimeOfDay() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
      return "morning";
  } else if (hour >= 12 && hour < 17) {
      return "afternoon";
  } else if (hour >= 17 && hour < 21) {
      return "evening";
  } else {
      return "night";
  }
}


const styles = StyleSheet.create({
  profilePictureView: {
    alignItems: 'center', // Center the image within the View
    justifyContent: 'center', // Center the image within the View
    flexDirection:'row',
  },
  profilePicture:(theme)=> ({
    width: 42,
    height: 42,
    borderRadius: 21, // To make it circular, should be half of width/height
    borderWidth: 1, // Width of the border
    borderColor: theme.colors.primary, // Color of the border
  }),
  name:(theme)=> ({
  fontWeight:'bold',
  fontSize:12
  }),
  greeting:(theme)=> ({
    fontSize:12
  }),
});
