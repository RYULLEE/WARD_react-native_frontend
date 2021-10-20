import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/Category';
import { home, category, market, etc } from '../screens/TabScreens';
import Tier_system from '../screens/Tier_system';
import TabNavigation from './Tab';
import Algorithm from '../screens/Algorithm';
import Portfolio from '../screens/Portfolio';


const Stack2 = createStackNavigator();

const CategoryStack = () => {
    
    return(

        <Stack2.Navigator initialRouteName='CATEGORY' screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}> 

            <Stack2.Screen name='CATEGORY' component={Category} options={{ title: 'W A R D' }} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

            <Stack2.Screen name='TIER SYSTEM' component={Tier_system} options={{ title: 'T I E R    S Y S T E M' }} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'Tier System',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>
            
            <Stack2.Screen name='ALGORITHM' component={Algorithm} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>

            <Stack2.Screen name='PORTFOLIO' component={Portfolio} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>
            


        </Stack2.Navigator>

    );


};

export default CategoryStack;