import React from 'react';
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
import AppLoading from 'expo-app-loading';
import { LogBox } from "react-native";

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

  
  let [fontsLoaded, error]= useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black 
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;