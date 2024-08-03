import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomCalendar3() {
  const currentDate = moment()
  const [selectedDate, setSelectedDate] = React.useState(currentDate);
  const [monthDirection, setMonthDirection] = React.useState(0);
  const [selectedMonth, setSelectedMonth] = React.useState(currentDate.format('MMMM YYYY'));
  const [SelectedDay, setSelectedDay] = React.useState(null);



  // React.useEffect(() => {
  //   console.log(SelectedDay);
  // }, [SelectedDay]);
  
  const RenderCalendarHeader = () => {
  
    return (
        <View style={styles.calendarHeader}>
          <TouchableOpacity onPress={() => handleMonthChange(-1)}>
            <MaterialCommunityIcons name="arrow-left-drop-circle" color={'#000'} size={20} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{selectedMonth}</Text>
          <TouchableOpacity onPress={() => handleMonthChange(1)}>
            <MaterialCommunityIcons name="arrow-right-drop-circle" color={'#000'} size={20} />
          </TouchableOpacity>
        </View>
    );
  };

  const RenderDaysOfWeek = () => {
    let daysOfWeek = moment.weekdaysShort();
    daysOfWeek = [...daysOfWeek.slice(1), daysOfWeek[0]]; // Start from Monday
    return (
      <View style={styles.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.dayOfWeekText}>
            {day}
          </Text>
        ))}
    </View>
    )
  }

  
  const RenderWeeks = ({weeks}) => {
    return(
      <View style={{flexDirection:'column',backgroundColor: '#eee', width: Dimensions.get('window').width}}>
        {weeks.map((week, index) => (
          <View key={index} style={{flexDirection:'row',marginHorizontal:5,width: '100%',}}>
            {week.map((day, index) => (
              <View key={index} style={{flex:1,textAlign:'center',justifyContent:'center',alignItems:'center',aspectRatio:1}}>
                <View style={{borderRadius:19,height:'65%',width:'65%'}}>
                  <TouchableOpacity style={{flex:1,backgroundColor: selectedDateColor(day),borderRadius:19,aspectRatio:1,textAlign:'center',justifyContent: 'center',alignItems:'center'}}
                    activeOpacity={0.7}
                    onPress={() => {
                      setSelectedDay(day);
                    }}
                  >
                    <Text style={{color: currentDate.format('D MMMM YYYY') == day.format('D MMMM YYYY') ? 'red' : '#000'}}>{day.format('D')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    )
  }

  const weeksForCurrentMonth = () => {
    let weeks =  getWeeksForMonth(selectedDate.format('YYYY'),selectedDate.format('M'));
    return weeks;
  }
  const weeksForNextMonth = () => {
    const nextMonthDate = selectedDate.clone().add(1, 'months');
    let weeks = getWeeksForMonth(nextMonthDate.format('YYYY'), nextMonthDate.format('M'));
    return weeks
  }
  const weeksForPrevMonth = () => {
    const prevMonthDate = selectedDate.clone().add(-1, 'months');
    let weeks = getWeeksForMonth(prevMonthDate.format('YYYY'), prevMonthDate.format('M'));
    return weeks
  }

  const flatListRef = React.useRef(null);
  return ( 
    <View style={styles.container}> 
      <RenderCalendarHeader />
      <RenderDaysOfWeek />
      <RenderWeeks weeks={weeksForCurrentMonth()} />
    </View>
   );

  
    function selectedDateColor (day) {
      if (SelectedDay == null)
        return '#fff';
      else{
        if (day.format('D MMMM YYYY') === SelectedDay.format('D MMMM YYYY'))
          return 'yellow';
        else
          return '#fff';
      }
    }
    function handleMonthChange(direction) {
      const newDate = selectedDate.clone().add(direction, 'months');
      setSelectedDate(newDate);
      setSelectedMonth(newDate.format('MMMM YYYY'));

    };


    function getWeeksForMonth(year, month) {
      // Initialize the moment date for the given month and year
      const startOfMonth = moment([year, month - 1]); // month - 1 because moment months are 0-indexed
      const endOfMonth = moment(startOfMonth).endOf('month');
      
      // Find the first Monday on or before the start of the month
      let startOfWeek = moment(startOfMonth).startOf('week').add(1, 'days'); // .startOf('week') gives Sunday, add 1 day for Monday
      
      // If the month starts on a Sunday, adjust startOfWeek to the Monday of the previous week
      if (startOfMonth.day() === 0) {
          startOfWeek.subtract(1, 'weeks');
      }
  
      const weeks = [];
      let currentDate = startOfWeek;
  
      while (currentDate.isBefore(endOfMonth) || currentDate.isSame(endOfMonth)) {
          const week = [];
          for (let i = 0; i < 7; i++) {
              week.push(moment(currentDate)); // push as a moment object
              currentDate.add(1, 'days');
          }
          weeks.push(week);
      }
  
      // Add trailing days from the next month if the last week is incomplete
      if (weeks[weeks.length - 1].length < 7) {
          const lastWeek = weeks[weeks.length - 1];
          while (lastWeek.length < 7) {
              lastWeek.push(moment(currentDate)); // push as a moment object
              currentDate.add(1, 'days');
          }
      }
  
      return weeks;
  }



}








const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    // backgroundColor: 'red',

  },  
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  daysOfWeek: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal:5

  },
  dayOfWeekText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex:1,
    // flexBasis: '14.28%',
    textAlign: 'center',
  },
});