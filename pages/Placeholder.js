// Placeholder.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Placeholder = () => {
  return (
    <View style={styles.container}>
      <Text>Placeholder Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0, 0, 0, 0)',
  },
});

export default Placeholder;
