import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/Category';
import { home, category, market, etc } from '../screens/TabScreens';
import Tier_system from '../screens/Tier_system';
import TabNavigation from './Tab';
import Algorithm from '../screens/Algorithm';
import User_admin from '../screens/User_admin';
import User_admin_component_1 from '../screens/Uer_admin_component_1';
import User_admin_component_2 from '../screens/User_admin_component_2';

const Stack6 = createStackNavigator();

const User_adminStack = () => {
    
    return(

        <Stack6.Navigator initialRouteName='User_admin' screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}> 

            <Stack6.Screen name='User_admin' component={User_admin}  options={{ title: '계정 관리', }} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

            <Stack6.Screen name='User_admin_component_1' component={User_admin_component_1} options={{ title: '이용약관'}} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

            <Stack6.Screen name='User_admin_component_2' component={User_admin_component_2} options={{ title: '이용약관'}} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>


        </Stack6.Navigator>

    );


};

export default User_adminStack;