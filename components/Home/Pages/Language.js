import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useTheme } from 'react-native-paper';
import i18n from '../../../misc/i18n';

function Language() {
  const currentLanguage = i18n.language;
  const [language, setLanguage] = useState(currentLanguage);
  const theme = useTheme();

  const switchLang = (value) => {
    setLanguage(value); 
    i18n.changeLanguage(value)
  }

  return (
    <View style={styles.container(theme)}>
      <View style={styles.listContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => switchLang('en')} style={styles.listItem(theme)}>
          <Text style={styles.listText(theme)}>English</Text>
          {language === 'en' && 
          <FontAwesome5 name="check" size={12} color={theme.colors.primary} />
          }
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => switchLang('fr')} style={styles.listItem(theme)}>
          <Text style={styles.listText(theme)}>Français</Text>
          {language === 'fr' && 
          <FontAwesome5 name="check" size={12} color={theme.colors.primary} />
          }
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: (theme) => ({
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  }),
  
  listContainer: {
    marginTop:10,
    width: '95%',
  },
  listItem:(theme) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 10,
    backgroundColor: theme.colors.onPrimary,
    marginVertical: 3,
    borderRadius: 5,
    elevation:2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 }, // Increase the shadow offset
    shadowOpacity: 0.3, // Increase the shadow opacity
    shadowRadius: 5, // Increase the shadow radius
  }),
  listText: (theme) =>({
    fontSize: 15,
    color: theme.colors.primary,
  }),


});

export default Language;
