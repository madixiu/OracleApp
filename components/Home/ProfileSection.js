import { View, Image,Text, StyleSheet } from "react-native";
import profilePicture from './../../assets/home/profilePicture.jpg'
import { IconButton, Badge } from 'react-native-paper';
import { TouchableOpacity } from "react-native-gesture-handler";
import { t } from "i18next";
export default function ProfileSection({theme,navigation}) {
  return ( 
    <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginTop:20,marginHorizontal:10}}>
      <TouchableOpacity style={styles.profilePictureView} onPress={() => navigation.navigate('ProfileComponent')}>
        <Image style={styles.profilePicture(theme)} source={profilePicture} />
        <View style={{marginStart:5}}>
          <Text style={styles.greeting(theme)}>{greeting()}</Text>
          <Text style={styles.name(theme)}>Allisa</Text>
        </View>
      </TouchableOpacity>
      <View>
        <IconButton 
          icon="bell" 
          size={24} 
          onPress={() => navigation.navigate('NotificationComponent')}
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


function greeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
      return t("Greetings.Morning");
  } else if (hour >= 12 && hour < 17) {
      return t("Greetings.Afternoon");
  } else if (hour >= 17 && hour < 21) {
      return t("Greetings.Evening");
  } else {
      return t("Greetings.Night");
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
