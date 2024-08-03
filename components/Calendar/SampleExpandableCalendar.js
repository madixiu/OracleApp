import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ExpandableCalendar, CalendarProvider,AgendaList  } from 'react-native-calendars';
import { useTheme } from 'react-native-paper';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// Sample agenda items
const agendaItems = [
  { title: '2024-07-22', data: [{ name: 'Meeting with Alex', height: 80 }] },
  { title: '2024-07-22', data: [{ name: 'Dentist Appointment', height: 60 }] },
  { title: '2024-07-22', data: [{ name: 'Lunch with Sarah', height: 70 }] },
  { title: '2024-07-25', data: [{ name: 'Project Deadline', height: 50 }] },
];

// Sample AgendaItem component


const SampleExpandableCalendar = () => {
  const theme = useTheme();
  const currentDate = new Date()
  
  const AgendaItem = ({ item, theme }) => (
    <View style={[styles.itemContainer]}>
      <TouchableOpacity style={styles.eventContainer(theme)}>
        <Text style={styles.eventText(theme)}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = React.useCallback(({item}) => {
    const theme = useTheme();
    return <AgendaItem item={item} theme={theme}/>;
  }, []);
  return (
    <CalendarProvider date={currentDate} showTodayButton
      theme={{
        todayButtonTextColor:theme.colors.primary,
        todayButtonPosition:'right',
        todayButtonFontWeight:700,
      }}
    >
      <ExpandableCalendar
        // pastScrollRange={12}
        // futureScrollRange={12}
        renderArrow={(direction) => <FontAwesome5 name={direction === 'right' ? "chevron-right"  : "chevron-left" }size={18} color={theme.colors.primary} />}
        theme={{
          textDayFontWeight:700,
          textDayHeaderFontWeight:700,
          // textMonthFontWeight:800,
          calendarBackground:theme.colors.surface,
          monthTextColor:theme.colors.onSurface,
          todayTextColor:theme.colors.primary,
          selectedDayBackgroundColor:theme.colors.primary,
          // todayButtonTextColor:'red',
          arrowColor: theme.colors.primary,
          textDayStyle:{
            color:'black'
          },
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: '#666'                
            },
             dayTextAtIndex1: {
              color: '#666'                
            },
             dayTextAtIndex2: {
              color: '#666'                
            },
             dayTextAtIndex3: {
              color: '#666'                
            },
             dayTextAtIndex4: {
              color: '#666'                
            },
             dayTextAtIndex5: {
              color: '#666'                
            },
            dayTextAtIndex6: {
               color: '#666' 
            }
          }
        }}
        staticHeader
        initialPosition='closed'
        horizontal={true}
        hideKnob={false}
        disablePan={false}
        allowShadow={true}
      
        closeOnDayPress={false}
      />
      {/* <CustomAgenda /> */}
      <AgendaList
        sections={agendaItems}
        renderItem={renderItem}
        // scrollToNextEvent
        sectionStyle={styles.section(theme)}
        // dayFormat={'yyyy-MM-d'}
      />
  </CalendarProvider>
  );
};

const styles = StyleSheet.create({
  section:(theme) => ({
    backgroundColor: theme.colors.backgroundColor,
    color: theme.colors.onBackground,
    textTransform: 'capitalize',
    // marginBottom:510
    
  }),
  eventContainer: (theme) => ({
    paddingVertical:20,
    marginHorizontal:20,
    marginVertical:7,
    backgroundColor: theme.colors.primaryContainer,
    borderRadius:10,
    elevation: 3, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 1 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 1.84, // For iOS
  }),

  eventText: (theme) => ({
    paddingHorizontal:15,
    color: theme.colors.onPrimaryContainer
  })
});
export default SampleExpandableCalendar;

