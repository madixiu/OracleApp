import React from 'react';
import { StyleSheet, TouchableOpacity, View,Animated } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export const TabBarAdvancedButton = ({ theme , isExpanded, setIsExpanded }) => {
  // const [isExpanded, setIsExpanded] = React.useState(false);
  const [showButtons, setShowButtons] = React.useState(false);


  //* Animated values for the additional FABs and icon rotation
  const animationValue1 = React.useRef(new Animated.Value(0)).current;
  const animationValue2 = React.useRef(new Animated.Value(0)).current;
  const rotationValue = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  React.useEffect(() => {
    if (isExpanded) {
      setShowButtons(true);
      Animated.parallel([
        Animated.timing(animationValue1, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(animationValue2, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(rotationValue, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animationValue1, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(animationValue2, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(rotationValue, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowButtons(false);
      });
    }
  }, [isExpanded]);
 

  //***************  BUTTON CLICK HANDLE SECTION  ***************** */
  const handleFabClick = () => {
    setIsExpanded(!isExpanded);
  };
  
  const additionalFabClick1 = () => {
    console.log('Additional FAB 1 clicked');
    setIsExpanded(false);
    navigation.navigate('Placeholder'); // Navigate to Placeholder screen 
  };
  
  const additionalFabClick2 = () => {
    console.log('Additional FAB 2 clicked');
    setIsExpanded(false);
    navigation.navigate('Placeholder'); // Navigate to Placeholder screen 
  };
  //***************  ******************  ***************** */

  //***************  ANIMATION SECTION  ***************** */
  // Interpolations for animated positions
  const translateY1 = animationValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -70], // Adjust this value to position the button properly
  });
  const translateY2 = animationValue2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -130], // Adjust this value to position the button properly
  });
  const rotation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });
  //***************  ******************  ***************** */

return (
      <View
        style={styles.container}
        id='fabContainer'
      >
        {showButtons && (
          <>
            <Animated.View style={[styles.additionalButton, { transform: [{ translateY: translateY1 }] }]}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.additionalButtonContent(theme)}
                onPress={() => additionalFabClick1()}
              >
                <Icon name="microphone-alt" style={styles.buttonIcon} />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.additionalButton, { transform: [{ translateY: translateY2 }] }]}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.additionalButtonContent(theme)}
                onPress={() => additionalFabClick2()}
              >
                <Icon name="pencil-alt" style={styles.buttonIcon} />
              </TouchableOpacity>
            </Animated.View>
          </>
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button(theme)}
          onPress={() => handleFabClick()}
        >
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <Icon
              name="plus"
              style={styles.buttonIcon}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
  );
}

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
  },

  additionalButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 25,
    bottom:22.5
  },
  additionalButtonContent: (theme) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: theme.colors.primary,
  }),
});
