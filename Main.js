import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View,I18nManager } from 'react-native';
// import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createBottomTabNavigator } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarAdvancedButton } from './components/TabBarAdvancedButton';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Calendar from './pages/Calendar';
import Social from './pages/Social';
import { useTheme } from 'react-native-paper';
const Tab = createBottomTabNavigator();

// Disable RTL layout
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default function Main() {
  const theme = useTheme()

  return (
      <SafeAreaView style={styles.container}>
        <BottomTabs theme={theme} />
      </SafeAreaView>
  );
}
const FabComponent = () => {
  return null;
};
function BottomTabs({theme}) {

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
        screenOptions={screenOptions}
        
      >
      <Tab.Screen name="Home" component={Home} icon="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
              <MaterialCommunityIcons name="home" color={focused ? theme.colors.primary : theme.colors.secondary} size={24} />
              <Text style={{color: focused ? theme.colors.primary : theme.colors.secondary}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Calendar" component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
              <MaterialCommunityIcons name="calendar" color={focused ? theme.colors.primary : theme.colors.secondary} size={24} />
              <Text style={{color: focused ? theme.colors.primary : theme.colors.secondary}}>Calendar</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Fab" component={FabComponent}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton theme={theme} {...props} />
          ),
        }}
      />
      <Tab.Screen name="Goals" component={Goals}
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
  tabBar: {
    // height: 94, // Adjust the height as needed
    // py:0,
    // paddingBottom:0,
    // paddingTop:0,
    // justifyContent: 'center',
  },
  tab: {
    justifyContent: 'center',
    alignItems:'center',
    // flex:1,
    // pt:0
  }
});
