import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import EtcStack from './EtcStack';

const Stack4 = createStackNavigator();

const AuthStack = () => {
  
  return (
    <Stack4.Navigator initialRouteName='Login_Signup'  screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
        headerBackTitleVisible: false,
        headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
        //headerStyle: { height : 60},
        }}>
    <Stack4.Screen name='Login' component={Login} />
    <Stack4.Screen name='Signup' component={Signup} />
    </Stack4.Navigator>
  );
};

export default AuthStack;