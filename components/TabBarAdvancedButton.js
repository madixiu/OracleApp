import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
// import { TabBg } from './svg';

const FabClick = () => {
  return null;
};
export const TabBarAdvancedButton = ({theme}) => (
  <View
    style={styles.container}
    pointerEvents="box-none"
  >
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button(theme)}
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

  button: (theme) => ({
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, 
    shadowRadius: 5,
    borderWidth:2,
    // borderColor: '#fff',
    borderColor: theme.colors.primaryContainer,

    backgroundColor: theme.colors.error,
  }),
  buttonIcon: {
    fontSize: 16,
    color: '#F6F7EB'
  }
});
