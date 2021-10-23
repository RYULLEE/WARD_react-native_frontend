import React, {useState} from 'react';
import { StatusBar, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
//import MainStack from './navigations/MainStack';
import TabNavigation from './navigations/Tab';
import styled from 'styled-components/native';
import { 
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black 
} from '@expo-google-fonts/noto-sans-kr'
import {useFonts} from 'expo-font';
import { LogBox } from "react-native";
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { images } from './utils/images';
import { UserProvider } from './contexts';
import { YellowBox } from "react-native"
YellowBox.ignoreWarnings([""]);

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

console.disableYellowBox = true;
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreLogs([
  "Warning: Calling `getNode()` on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release., ReactNativeFiberHostComponent",
]);


const Container = styled.View`
  flex:1;
  background-color: #a6a6a6;
  justify-content: center;
  align-items: center;
`;

const App = () => {

  const [includeFontPadding, setIncludeFontPadding] = useState(false);
  const [textVerticalAlignIdx, setTextVerticalAlignIdx] = useState(0);
  let [fontsLoaded, error]= useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
    
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <UserProvider>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
    </UserProvider>
    
  );
};

export default App;