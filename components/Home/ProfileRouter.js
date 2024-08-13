import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileComponent from './ProfileComponent';

import Theme from './Pages/Theme';
import Language from './Pages/Language';
const Stack = createStackNavigator();
function ProfileRouter() {
  return (  
    <Stack.Navigator initialRouteName='ProfileComponent' 
    detachInactiveScreens={true}    
    >
      <Stack.Screen name="ProfileComponent" component={ProfileComponent} 
        options={{
          headerShown:true,
        }}
      />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Theme" component={Theme} />
    </Stack.Navigator>
  );
}

export default ProfileRouter;