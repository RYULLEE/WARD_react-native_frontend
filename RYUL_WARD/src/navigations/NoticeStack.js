import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/Category';
import { home, category, market, etc } from '../screens/TabScreens';
import Tier_system from '../screens/Tier_system';
import TabNavigation from './Tab';
import Algorithm from '../screens/Algorithm';
import Notice from '../screens/Notice';
import Notice_component_1 from '../screens/Notice_component_1';


const Stack4 = createStackNavigator();

const NoticeStack = () => {
    
    return(

        <Stack4.Navigator initialRouteName='Notice' screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}> 

            <Stack4.Screen name='Notice' component={Notice}  options={{ title: '111', headerShown: false, }} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

            <Stack4.Screen name='Notice_1' component={Notice_component_1} options={{ title: '공지사항',headerShown: false }} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

    


        </Stack4.Navigator>

    );


};

export default NoticeStack;