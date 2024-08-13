import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from '../components/Home/HomeComponent';
// import ProfileComponent from '../components/Home/ProfileComponent';
import ProfileRouter from '../components/Home/ProfileRouter';
import NotificationComponent from '../components/Home/NotificationComponent';
import ProfileComponent from '../components/Home/ProfileComponent';
import Language from '../components/Home/Pages/Language';
import Theme from '../components/Home/Pages/Theme';
const Stack = createStackNavigator();

function Home() {
  return ( 
    <Stack.Navigator 
      initialRouteName='HomeComponent'
      detachInactiveScreens={true}
      screenOptions={{
        
        // headerShown:false, 
        // headerTitleAlign:'center'
        // headerTitle: (props) => <LogoTitle {...props} />,
        // headerShadowVisible:false,
        // headerShown:false,
        // headerRight: () => (props) => <LogoTitle {...props} />,
          
      //  headerLeft: () => (
      //     <Text>Button</Text>
      // ),
      }}>

      <Stack.Screen name="HomeComponent" component={HomeComponent} 
        options={{
          headerShown:false,
        }}
      // options={{
      //   headerTitle: (props) => <LogoTitle {...props} />,
      //   headerLeft: () => (
      //     <Image
      //     source={require("../assets/logo.png")}
      //     style={{ width: 32,height: 32,marginLeft:8}}
      //     />
      //   ),
   
      // }}
      
      />
      <Stack.Screen name="ProfileComponent" component={ProfileComponent}
        options={{
          headerTitle: "Settings",
        }}
      />
      <Stack.Screen name="Theme" component={Theme}
        options={{
          headerTitle: "Themes",
        }}
      />
      <Stack.Screen name="Language" component={Language}
        options={{
          headerTitle: "Language",
        }}
      />
      <Stack.Screen name="NotificationComponent" component={NotificationComponent}
        options={{
          headerTitle: "Notifications",
        }}
      />
    </Stack.Navigator>

   );
}

export default Home;