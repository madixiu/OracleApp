import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { t } from 'i18next';
export default function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <Searchbar
        elevation={1}
        roundness={1}
        
        style={styles.searchBar}
        inputStyle={styles.input}
        placeholder={t("SearchPlaceholder")}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 2,
  },
  searchBar: {
    // paddingHorizontal: 0, // Adjust horizontal padding here
    width: '90%',
    height: 40, // Adjust the height to make it smaller
    borderRadius: 10, // Adjust the roundness
    paddingVertical:0
  },
  input: {
    justifyContent: 'center',
    minHeight: 40, // Adjust the height to make it smaller
    // backgroundColor: 'red',

    // paddingLeft: 5, // Adjust input padding here
    // flex: 1,
  },
});
