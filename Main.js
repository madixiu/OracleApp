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
const Tab = createBottomTabNavigator();

// Disable RTL layout
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
export default function Main() {
  return (
      <SafeAreaView style={styles.container}>
        <BottomTabs />
      </SafeAreaView>
  );
}

const FabComponent = () => {
  return null;
};
// const FabClick = () => {
//   return null;
// };
const screenOptions = {
  tabBarShowLabel: false,
  headerShown :true,
  tabBarStyle: {
    height: 60,
    // elevation:10
  },

};
function BottomTabs() {
  return (
    <Tab.Navigator 
        screenOptions={screenOptions}
        
      >
      <Tab.Screen name="Home" component={Home} icon="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
              <MaterialCommunityIcons name="home" color={focused ? '#16247d' : '#888'} size={24} />
              <Text style={{color: focused ? '#16247d' : '#888'}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Calendar" component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
              <MaterialCommunityIcons name="calendar" color={focused ? '#16247d' : '#888'} size={24} />
              <Text style={{color: focused ? '#16247d' : '#888'}}>Calendar</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Fab" component={FabComponent}
        options={{
          // tabBarStyle: {
          //   backgroundColor: '#fff',
          //   position: 'absolute',
          //   bottom: '50px',
          //   right: '50%',
          // },
          tabBarButton: (props) => (
            <TabBarAdvancedButton bgColor={'#fff'} {...props} />
          ),
          // tabBarButton: () => (
          // <TouchableOpacity id='fab' onPress={() => FabClick()} style={{backgroundColor: 'red',width:50,height:50,borderRadius:25,alignItems:'center',justifyContent:'center',position:'relative',top:'-25px',bottom:'25px'}}>
          //   <MaterialCommunityIcons name="plus" color="#fff" size={24} />
          // </TouchableOpacity>
          // ),
       
        }}
      />
      <Tab.Screen name="Goals" component={Goals}
        options={{
          headerShown :false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
              <MaterialCommunityIcons name="book" color={focused ? '#16247d' : '#888'} size={24} />
              <Text style={{color: focused ? '#16247d' : '#888'}}>Goals</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Social" component={Social}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tab]}>
                <MaterialCommunityIcons name="account-group" color={focused ? '#16247d' : '#888'} size={24} style={{mb:1}}/>
                <Text style={{color: focused ? '#16247d' : '#888'}}>Social</Text>
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
