import { View,StyleSheet,FlatList, Pressable} from'react-native';
import { Text, useTheme} from 'react-native-paper';
import CustomButton from './CustomButton';
import CustomCard from './CustomCard';
import ProfileSection from './ProfileSection';
import SearchBar from './SearchBar';
import { useTranslation } from 'react-i18next';
function HomeComponent({ navigation }) {
  const theme = useTheme();
  const { t } = useTranslation();


  return ( 
    <View style={styles.container(theme)}>
      <ProfileSection theme={theme} navigation={navigation}/>
      <SearchBar /> 
      <UpcomingEvents theme={theme} t={t}/>
    </View>
   );
}

const buttonList = [
  {
    id: 1,
    title: 'EventsFilter.Today',
  },
  {
    id: 2,
    title: 'EventsFilter.ThisWeek',
  },
  {
    id: 3,
    title: 'EventsFilter.NextWeek',
  },
  {
    id: 4,
    title: 'EventsFilter.ThisMonth',
  },
  {
    id: 5,
    title: 'EventsFilter.All',
  },
];

const events = [
  {
    id: 1,
    title: "Purrweb Daily",
    date: "2024-07-15", // Example: Today
    time: "10:00 AM",
    subtitle: "Daily stand-up meeting"
  },
  {
    id: 2,
    title: "Design Review",
    date: "2024-07-16", // Example: Tomorrow
    time: "2:00 PM - 3:00 PM",
    subtitle: "Review new design proposals"
  },
  {
    id: 3,
    title: "Sprint Planning",
    date: "2024-07-20", // Example: Later this week
    time: "11:00 AM - 12:30 PM",
    subtitle: "Plan tasks for the next sprint"
  },
  {
    id: 4,
    title: "Client Meeting",
    date: "2024-07-25", // Example: Later this month
    time: "4:00 PM",
    subtitle: "Discuss project updates with the client"
  },
  {
    id: 5,
    title: "Team Building Activity",
    date: "2024-07-30", // Example: Next week
    time: "5:00 PM - 6:30 PM",
    subtitle: "Fun activities to improve team cohesion"
  }
];


function UpcomingEvents({theme,t}) {
  return(
  <View>
    <View style={{marginVertical:10,marginHorizontal:15}}>
      <Text variant="headlineMedium" style={styles.title(theme)}>{t('upcomingEvents')}</Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}>
      <FlatList
        data={buttonList}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <CustomButton 
          title={t(item.title)}
          onPress={() => console.log(t(item.title))}
        />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
    <View style={{flexDirection:'row', justifyContent:'center',marginHorizontal:10,paddingVertical:5}}>
      <FlatList
        data={events}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomCard title={item.title} subtitle={item.subtitle} time={item.time} date={item.date} theme={theme} />

        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>

  )
}

const styles = StyleSheet.create({
  container: (theme) => ({
    flex:1,
    backgroundColor: theme.colors.background
  }),
  title:(theme) => ( {
    fontWeight: 'bold',
    color: theme.colors.onBackground,
    // color: 'red'
  }),
  // button: {
  //   marginHorizontal: 5,
  //   borderRadius:10,
  // },
  // buttonLabel: {
  //   fontSize: 13,
  //   fontWeight: 'bold',
  // },
});
export default HomeComponent;