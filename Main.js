import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View,I18nManager,TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarAdvancedButton } from './components/TabBarAdvancedButton';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Calendar from './pages/Calendar';
import Social from './pages/Social';
import Placeholder from './pages/Placeholder';
import { useTheme } from 'react-native-paper';
const Tab = createBottomTabNavigator();
// Disable RTL layout
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default function Main({updateTheme}) {
  const theme = useTheme()
  const [isTabBarExpanded, setIsTabBarExpanded] = React.useState(false);
  const handleOutsidePress = () => {
    if (isTabBarExpanded) {
      setIsTabBarExpanded(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPressOut={handleOutsidePress}>
      <SafeAreaView style={styles.container}>
        <BottomTabs theme={theme} isTabBarExpanded={isTabBarExpanded} setIsTabBarExpanded={setIsTabBarExpanded} updateTheme={updateTheme}/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

function BottomTabs({theme ,isTabBarExpanded, setIsTabBarExpanded,updateTheme}) {
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown :true,
    headerStyle : {
      backgroundColor: theme.colors.primaryContainer,
      height:56
      //iOS: Typically, the height for the header (navigation bar) is 44 pixels, plus an additional 20 pixels for the status bar on older devices or 44 pixels for the status bar on iPhone X and later models.
      //Android: The standard height for the header (app bar) is usually 56 pixels.
          },
    tabBarStyle: {
      height: 50,
      backgroundColor: theme.colors.primaryContainer,
      elevation:5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 }, // Increase the shadow offset
      shadowOpacity: 0.3, // Increase the shadow opacity
      shadowRadius: 5, // Increase the shadow radius
      borderRadius: 8,
      position: 'absolute',
      left:5,
      right:5,
      bottom:5,
      // borderWidth:1
      borderTopWidth: 0, // Remove the top border
    },
  
  };
  return (
    <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={screenOptions}
      >
      <Tab.Screen name="Home" 
      // component={Home}
      isteners={({navigation, route}) => ({
          tabPress: (e) => {
            e.preventDefault();
            if (navigation.isFocused()) {
             if(isTabBarExpanded)
              setIsTabBarExpanded(false);
            } else {
              navigation.navigate('Home', {
                screen: 'HomeComponent',
                // params: {
                //   screen: 'Home',
                // },
              });
            
            }
          } 
        })}
        options={{
          headerShown :false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
              <MaterialCommunityIcons name="home" color={focused ? theme.colors.primary : theme.colors.secondary} size={24} />
              <Text style={{color: focused ? theme.colors.primary : theme.colors.secondary}}>Home</Text>
            </View>
          ),
        }}
      >
         {(props) => <Home {...props} updateTheme={updateTheme} />}      

      </Tab.Screen>
      <Tab.Screen name="Calendar" component={Calendar}
        listeners={(isFocused) => ({
          tabPress: () => {
            if (isFocused) {
            if(isTabBarExpanded)
              setIsTabBarExpanded(false);
            }
          }
        })}
        options={{
          headerShown :false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
              <MaterialCommunityIcons name="calendar" color={focused ? theme.colors.primary : theme.colors.secondary} size={24} />
              <Text style={{color: focused ? theme.colors.primary : theme.colors.secondary}}>Calendar</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Placeholder" component={Placeholder}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton theme={theme} {...props} isExpanded={isTabBarExpanded} setIsExpanded={setIsTabBarExpanded} />
          ),
        }}
      />
      <Tab.Screen name="Goals" component={Goals}
        listeners={(isFocused) => ({
          tabPress: () => {
            if (isFocused) {
              if(isTabBarExpanded)
              setIsTabBarExpanded(false);
            }
          }
        })}
        options={{
          headerShown :false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
              <MaterialCommunityIcons name="book" color={focused ? theme.colors.primary : theme.colors.secondary} size={24} />
              <Text style={{color: focused ? theme.colors.primary : theme.colors.secondary}}>Goals</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Social" component={Social}
        listeners={(isFocused) => ({
          tabPress: () => {
            if (isFocused) {
              if(isTabBarExpanded)
              setIsTabBarExpanded(false);
            }
          }
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
                <MaterialCommunityIcons name="account-group" color={focused ? theme.colors.primary : theme.colors.secondary} size={24} style={{mb:1}}/>
                <Text style={{color: focused ? theme.colors.primary : theme.colors.secondary}}>Social</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    justifyContent: 'center',
    alignItems:'center',
  }
});
