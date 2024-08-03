import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomCalendar3() {
  const currentDate = moment();
  const [selectedDate, setSelectedDate] = React.useState(currentDate);
  const [selectedMonth, setSelectedMonth] = React.useState(currentDate.format('MMMM YYYY'));
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [isWeekView, setIsWeekView] = React.useState(false); // New state for week view toggle

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
    );
  };

  const RenderWeeks = ({ weeks }) => {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: Dimensions.get('window').width }}
      >
        {weeks.map((week, index) => (
          <View key={index} style={{ flexDirection: 'row', marginHorizontal: 5, width: '100%' }}>
            {week.map((day, index) => (
              <View key={index} style={{ flex: 1, textAlign: 'center', justifyContent: 'center', alignItems: 'center', aspectRatio: 1 }}>
                <View style={{ borderRadius: 19, height: '65%', width: '65%' }}>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      backgroundColor: selectedDateColor(day),
                      borderRadius: 19,
                      aspectRatio: 1,
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                    activeOpacity={0.7}
                    onPress={() => {
                      setSelectedDay(day);
                    }}
                  >
                    <Text style={{ color: currentDate.format('D MMMM YYYY') === day.format('D MMMM YYYY') ? 'red' : '#000' }}>
                      {day.format('D')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    );
  };

  const weeksForCurrentMonth = () => {
    return getWeeksForMonth(selectedDate.format('YYYY'), selectedDate.format('M'));
  };

  const getWeekContainingToday = (weeks) => {
    return weeks.find((week) =>
      week.some((day) => day.isSame(currentDate, 'day'))
    );
  };

  const weeksForCurrentView = () => {
    const weeks = weeksForCurrentMonth();
    return isWeekView ? [getWeekContainingToday(weeks)] : weeks;
  };

  const handleToggleView = () => {
    setIsWeekView(!isWeekView);
  };

  const handleMonthChange = (direction) => {
    const newDate = selectedDate.clone().add(direction, 'months');
    setSelectedDate(newDate);
    setSelectedMonth(newDate.format('MMMM YYYY'));
  };

  const selectedDateColor = (day) => {
    if (selectedDay == null) {
      return '#fff';
    } else {
      return day.isSame(selectedDay, 'day') ? 'yellow' : '#fff';
    }
  };

  const getWeeksForMonth = (year, month) => {
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
  };

  return (
    <View style={styles.container}>
      <RenderCalendarHeader />
      <RenderDaysOfWeek />
      <RenderWeeks weeks={weeksForCurrentView()} />
      <TouchableOpacity onPress={handleToggleView} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {isWeekView ? 'Switch to Month View' : 'Switch to Week View'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff', // Changed to white
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  dayOfWeekText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  toggleButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignSelf: 'center',
  },
  toggleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
