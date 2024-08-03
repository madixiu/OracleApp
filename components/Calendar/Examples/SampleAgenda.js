import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';

const SampleAgenda = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    const newItems = {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          newItems[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            newItems[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }

      setItems((prevItems) => ({ ...prevItems, ...newItems }));
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is an empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  return (
    <Agenda
      items={items}
      loadItemsForMonth={loadItems}
      selected={'2023-07-16'}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
      rowHasChanged={rowHasChanged}
      showClosingKnob={true}
      scrollsToTop={true}
      theme={{
        agendaDayTextColor: '#000',
        agendaDayNumColor: '#000',
        agendaTodayColor: '#000',
        agendaKnobColor: '#000',
        agendaSelectedColor: '#000',
        agendaTodayTextColor: '#000',
        agendaDayTextSize: 16,
        agendaDayNumSize: 16,
        agendaTodayTextSize: 16,
        agendaKnobHeight: 16,
        agendaKnobWidth: 16,
        agendaTodayKnobColor: '#000',
        agendaTodayKnobTextColor: '#000',
        agendaTodayKnobTextSize: 16,
        agendaTodayKnobButtonColor: '#000',
        agendaTodayKnobButtonTextColor: '#000',
        agendaTodayKnobButtonTextSize: 16,
        agendaTodayKnobButtonWidth: 16,
        agendaTodayKnobButtonHeight: 16,
        agendaTodayKnobButtonTextStyle: {
          fontWeight: 'bold'
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default SampleAgenda;
