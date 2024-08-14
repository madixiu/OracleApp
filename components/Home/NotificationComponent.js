import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper/src/core/theming';
const notifications = [
  {
    id: '1',
    title: 'Habit Streak Reached!',
    message: 'Congratulations! You’ve completed your habit of "Morning Jog" for 10 days straight.',
    time: '2 hours ago',
  },
  {
    id: '2',
    title: 'Reminder: Weekly Review',
    message: 'Don’t forget to review your weekly goals and habits.',
    time: '5 hours ago',
  },
  {
    id: '3',
    title: 'New Feature Available',
    message: 'We’ve added a new feature to track your habits more effectively. Check it out!',
    time: '1 day ago',
  },
  {
    id: '4',
    title: 'Message from System Admin',
    message: 'Please verify your email to continue enjoying all features of the app.',
    time: '3 days ago',
  },
];

const NotificationItem = ({ title, message, time, theme }) => (
  <TouchableOpacity style={styles.notificationContainer(theme)}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.message}>{message}</Text>
    <Text style={styles.time(theme)}>{time}</Text>
  </TouchableOpacity>
);

const NotificationComponent = () => {
  const theme = useTheme();
  return (
    <View style={styles.container(theme)}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            message={item.message}
            time={item.time}
            theme={theme}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:(theme) => ({
    flex: 1,
    padding: 20,
    // backgroundColor: '#000',
    backgroundColor: theme.colors.background,
  }),
  notificationContainer:(theme)=> ({
    backgroundColor: theme.colors.secondaryContainer,
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    elevation: 1,
  }),
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    marginTop: 5,
  },
  time:(theme)=> ({
    fontSize: 12,
    // color: '#888',
    color: theme.colors.outline,
    marginTop: 10,
  }),
});

export default NotificationComponent;
