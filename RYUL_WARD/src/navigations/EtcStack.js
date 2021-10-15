import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Etc from '../screens/Etc';
import Login from '../screens/Login';
import AuthStack from './AuthStack';
//import TabNavigation from './Tab';

const Stack3 = createStackNavigator();

const EtcStack = () => {
    return (
        <Stack3.Navigator initialRouteName='Etc' screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}>
        <Stack3.Screen name='Etc' component={Etc} options={{ title: 'W A R D' }} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>
        <Stack3.Screen name='Login' component={AuthStack} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'login',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>
        
    </Stack3.Navigator>
    );
  };
  

export default EtcStack;