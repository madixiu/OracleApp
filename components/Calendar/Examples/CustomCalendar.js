import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, Dimensions, PanResponder } from 'react-native';
import moment from 'moment';

const { width } = Dimensions.get('window');

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [showFullMonth, setShowFullMonth] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(moment());
  const animatedValue = useState(new Animated.Value(0))[0];
  const [monthAnimation] = useState(new Animated.Value(0));
  const [monthDirection, setMonthDirection] = useState(0);
  const [visibleDates, setVisibleDates] = useState(() => {
    const today = moment();
    return {
      start: today.clone().startOf('week'),
      end: today.clone().endOf('week'),
    };
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: showFullMonth ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [showFullMonth]);

  useEffect(() => {
    Animated.timing(monthAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [currentMonth]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return Math.abs(gestureState.dx) > 20;
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 50) {
        handleMonthChange(-1);
      } else if (gestureState.dx < -50) {
        handleMonthChange(1);
      }
    },
  });

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleMonthChange(-1)}>
          <Text style={styles.headerText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{currentMonth.format('MMMM YYYY')}</Text>
        <TouchableOpacity onPress={() => handleMonthChange(1)}>
          <Text style={styles.headerText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleMonthChange = (direction) => {
    setMonthDirection(direction);
    Animated.timing(monthAnimation, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      const newDate = moment(currentMonth).add(direction, 'months');
      setCurrentMonth(newDate);
      monthAnimation.setValue(1);
    });
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = moment.weekdaysShort();
    const shiftedDaysOfWeek = [...daysOfWeek.slice(1), daysOfWeek[0]]; // Start from Monday
    return (
      <View style={styles.daysOfWeek}>
        {shiftedDaysOfWeek.map((day, index) => (
          <Text key={index} style={styles.dayOfWeekText}>
            {day}
          </Text>
        ))}
      </View>
    );
  };

  const renderDays = (month) => {
    const startDate = showFullMonth ? month.clone().startOf('month').startOf('week') : visibleDates.start;
    const endDate = showFullMonth ? month.clone().endOf('month').endOf('week') : visibleDates.end;
    const date = startDate.clone().subtract(1, 'day');
    const days = [];

    while (date.isBefore(endDate, 'day')) {
      const formattedDate = date.add(1, 'day').format('YYYY-MM-DD');
      const isSameMonth = date.isSame(month, 'month');
      const isSelected = date.isSame(selectedDate, 'day');
      const dayStyle = isSelected ? styles.selectedDay : styles.day;
      const textStyle = isSelected ? styles.selectedDayText : styles.dayText;

      days.push(
        <TouchableOpacity
          key={formattedDate}
          style={[dayStyle, !isSameMonth && styles.nonCurrentMonthDay]}
          onPress={() => handleDateSelect(date)}
        >
          <Text style={textStyle}>{date.date()}</Text>
        </TouchableOpacity>
      );
    }

    return days;
  };

  const renderAnimatedDays = () => {
    const currentDays = renderDays(currentMonth);
    const nextDays = renderDays(moment(currentMonth).add(monthDirection, 'month'));

    return (
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [
            {
              translateX: monthAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [monthDirection === 1 ? width : -width, 0],
              }),
            },
          ],
        }}
      >
        <View style={styles.daysContainer}>{monthDirection === 1 ? nextDays : currentDays}</View>
        <View style={styles.daysContainer}>{monthDirection === 1 ? currentDays : nextDays}</View>
      </Animated.View>
    );
  };

  const toggleShowFullMonth = () => {
    setShowFullMonth(!showFullMonth);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.clone());
  };

  const calendarHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 200], // Adjust these values as needed
  });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {renderHeader()}
      {renderDaysOfWeek()}
      <Animated.View style={{ height: calendarHeight, overflow: 'hidden' }}>
        {renderAnimatedDays()}
      </Animated.View>
      <TouchableOpacity style={styles.expandButton} onPress={toggleShowFullMonth}>
        <Text style={styles.expandButtonText}>{showFullMonth ? '-' : '+'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayOfWeekText: {
    fontSize: 16,
    fontWeight: 'bold',
    flexBasis: '14.28%',
    textAlign: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  day: {
    flexBasis: '14.28%',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  selectedDay: {
    flexBasis: '14.28%',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  nonCurrentMonthDay: {
    opacity: 0.5,
  },
  dayText: {
    fontSize: 16,
  },
  selectedDayText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  expandButton: {
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  expandButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Calendar;
