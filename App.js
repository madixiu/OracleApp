import React from 'react';
import { NavigationContainer ,DefaultTheme as NavigationDefaultTheme, } from '@react-navigation/native';
import { PaperProvider, MD3LightTheme, adaptNavigationTheme, } from 'react-native-paper';
import Main from './Main';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LightColors } from './misc/ColorThemes';
import i18n from './misc/i18n';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  // reactNavigationDark: NavigationDarkTheme,
});

// const CombinedDefaultTheme = {
//   ...MD3LightTheme,
//   ...LightTheme,
//   ...themeColors,
//   colors: {
//     ...MD3LightTheme.colors,
//     ...LightTheme.colors,
//     ...themeColors.colors,
//   },
// };
// const CombinedDarkTheme = {
//   ...MD3DarkTheme,
//   ...DarkTheme,
//   colors: {
//     ...MD3DarkTheme.colors,
//     ...DarkTheme.colors,
//   },
// };
export default function App() {
  const [themeColors,SetThemeColors]=React.useState(
   { "colors": {
      "primary": "rgb(120, 69, 172)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(240, 219, 255)",
      "onPrimaryContainer": "rgb(44, 0, 81)",
      "secondary": "rgb(102, 90, 111)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(237, 221, 246)",
      "onSecondaryContainer": "rgb(33, 24, 42)",
      "tertiary": "rgb(128, 81, 88)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(255, 217, 221)",
      "onTertiaryContainer": "rgb(50, 16, 23)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(255, 251, 255)",
      "onBackground": "rgb(29, 27, 30)",
      "surface": "rgb(255, 251, 255)",
      "onSurface": "rgb(29, 27, 30)",
      "surfaceVariant": "rgb(233, 223, 235)",
      "onSurfaceVariant": "rgb(74, 69, 78)",
      "outline": "rgb(124, 117, 126)",
      "outlineVariant": "rgb(204, 196, 206)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(50, 47, 51)",
      "inverseOnSurface": "rgb(245, 239, 244)",
      "inversePrimary": "rgb(220, 184, 255)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(248, 242, 251)",
        "level2": "rgb(244, 236, 248)",
        "level3": "rgb(240, 231, 246)",
        "level4": "rgb(239, 229, 245)",
        "level5": "rgb(236, 226, 243)"
      },
      "surfaceDisabled": "rgba(29, 27, 30, 0.12)",
      "onSurfaceDisabled": "rgba(29, 27, 30, 0.38)",
      "backdrop": "rgba(51, 47, 55, 0.4)"
    }}
  );
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('themeColor');
      if (value !== null) {

        SetThemeColors({ colors: LightColors[value].colors });
        // value previously stored
      }
    } catch (e) {
      console.log(e);
      
      // error reading value
    }
  };

  const updateTheme = () => {
    getData();
  }

  React.useEffect(() => {
    getData();
  }, []);

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    ...themeColors,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
      ...themeColors.colors,
    },
  };

  return (
      <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <Main updateTheme={updateTheme}/>
        </NavigationContainer>
      </PaperProvider>
  );
}
