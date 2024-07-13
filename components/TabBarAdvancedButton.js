import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
// import { TabBg } from './svg';

const FabClick = () => {
  return null;
};
export const TabBarAdvancedButton = ({
  bgColor,
}) => (
  <View
    style={styles.container}
    pointerEvents="box-none"
  >
    <TouchableOpacity
      style={styles.button}
      onPress={() => FabClick()}
    >
      <Icon
        name="plus"
        style={styles.buttonIcon}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },

  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: '#E94F37',
  },
  buttonIcon: {
    fontSize: 16,
    color: '#F6F7EB'
  }
});
