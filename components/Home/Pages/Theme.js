import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet,Text,Button } from 'react-native';

const Theme = () => {
  // State to hold the index of the selected box
  const [selectedBox, setSelectedBox] = useState(0);

  // Array of colors for the boxes
  const colors = [{name:'Dark Lavender',color:'#7845AC'},
  // {name:'Portland Orange',color:'#FF5A36'},
  {name:'Sea Green',color:'#2E8B57'},{name:'Sapphire',color:'#2138AB'},{name:'Persian Rose',color:'#FE28A2'}];

  // Function to handle box selection
  const handleBoxSelect = (index) => {
    setSelectedBox(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.palleteContainer} >
        {colors.map((color, index) => (
          <View style={{flex:1,alignItems:'center'}} key={index}>
          <TouchableOpacity
            // key={index}
            style={[
              styles.box,
              { backgroundColor: color.color },
              selectedBox === index && styles.selectedBox,
            ]}
            onPress={() => handleBoxSelect(index)}
          />
          <Text style={{fontSize:12,fontWeight:700,color: color.color,marginTop:5}}>{color.name}</Text>
          </View>
        ))}
      </View>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity activeOpacity={0.6} style={[styles.applyButton,{backgroundColor: colors[selectedBox].color}]}>
          <Text style={{fontSize:16,color:'white',fontWeight:700}}>Apply</Text>
        </TouchableOpacity>
      
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    // justifyContent:'space-around',
    alignItems:'center'
    // ,backgroundColor:'red'
  },
  palleteContainer: {
    flex: 1,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    // backgroundColor:'red'
    // margin: 10,
  },
  box: {
    width: '80%',
    aspectRatio:1,
    borderWidth: 5,
    borderColor: 'transparent',
    borderRadius: 15,
    elevation: 5, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.5, // For iOS
    shadowRadius: 3.84, // For iOS
  },
  selectedBox: {
    borderColor: 'white', // Black border for selected box
  },
  applyButton: {
    marginTop:16,
    // backgroundColor:'red',
    borderColor: '#eee',
    borderWidth: 2,
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:18,
    elevation: 1, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 1 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 3.84, // For iOS
  }
});

export default Theme;
