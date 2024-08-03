import { StyleSheet,View, Text, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";

const renderItem = (item) => {
  return (
    <TouchableOpacity
      // style={}
      onPress={() => Alert.alert(item.name)}
    >
      <Text>{item.name}</Text>
      <Text>{item.data}</Text>
    </TouchableOpacity>
  );
};
export default SampleAgenda2 = () => {
  const items = {
    '2024-07-17' : [{name: 'Meeting1',data: 'lorem ipsum dolor sit amet'}],
    '2024-07-18' : [{name: 'Meeting2',data: 'lorem ipsum dolor sit amet'}],
    '2024-07-19' : [{name: 'Meeting3',data: 'lorem ipsum dolor sit amet'}],
  }



  return (
    <View style={styles.container}>
      <Agenda
        // style={{width:'100%',flex:1}}
        items={items}
        renderItem={renderItem}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor: 'red',
  }
});