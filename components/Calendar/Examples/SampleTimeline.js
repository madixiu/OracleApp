import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Timeline } from 'react-native-calendars';

const SampleTimeline = () => {
  const events = [
    {
      start: '2023-07-16 08:00:00',
      end: '2023-07-16 10:00:00',
      title: 'Meeting with team',
      summary: 'Discuss project progress',
    },
    {
      start: '2023-07-16 11:00:00',
      end: '2023-07-16 12:00:00',
      title: 'Doctor Appointment',
      summary: 'Annual check-up',
    },
    {
      start: '2023-07-16 13:00:00',
      end: '2023-07-16 14:00:00',
      title: 'Lunch with client',
      summary: 'Discuss business opportunities',
    },
    {
      start: '2023-07-16 15:00:00',
      end: '2023-07-16 16:00:00',
      title: 'Gym',
      summary: 'Workout session',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Schedule for 2023-07-16</Text>
      <Timeline
        events={events}
        start="08:00"
        end="18:00"
        eventTapped={(event) => alert(`${event.title}\n${event.summary}`)}
        style={styles.timeline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timeline: {
    flex: 1,
  },
});

export default SampleTimeline;
