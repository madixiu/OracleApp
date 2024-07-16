import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const CustomButton = ({ title, onPress }) => {
  const theme = useTheme();

  return (
    <Pressable
      opacit
      style={({ pressed }) => [
        styles.button(theme),
        pressed && styles.buttonPressed
      ]}
      onPress={onPress}
    >
      <Text style={styles.text(theme)}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: (theme) => ({
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    elevation: 5, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 3.84, // For iOS
    marginHorizontal: 4,
    marginVertical: 5,
  }),
  buttonPressed: {
    // backgroundColor: '#3700B3',
    opacity: 0.7, // Adjust opacity when pressed
  },
  text: (theme) => ({
    color: theme.colors.onPrimary,
    fontSize:12,
    fontWeight: 'bold',
    textAlign: 'center',
  }),
});

export default CustomButton;
