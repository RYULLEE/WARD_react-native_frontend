import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/Category';
import { home, category, market, etc } from '../screens/TabScreens';
import Tier_system from '../screens/Tier_system';
import TabNavigation from './Tab';
import Algorithm from '../screens/Algorithm';
import Portfolio from '../screens/Portfolio';
import Timer from '../screens/Timer';
import Category_Timing from '../screens/Category_Timing';
import Category_Portfolio from '../screens/Category_Portfolio';
import Category_Etc from '../screens/Category_Etc';
import Similar from '../screens/Similar';
import Thema from '../screens/Thema';
import Effect from '../screens/Effect';

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

            <Stack2.Screen name='Category_Timing' component={Category_Timing} options={{ title: 'T I M E R' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

            <Stack2.Screen name='Category_Portfolio' component={Category_Portfolio} options={{ title: 'P O R T F O L I O' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

            <Stack2.Screen name='Category_Etc' component={Category_Etc} options={{ title: 'A N A L Y S I S' }} screenOptions={{
            headerTitleAlign: 'center',
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

            <Stack2.Screen name='TIMER' component={Timer} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>

            <Stack2.Screen name='SIMILAR' component={Similar} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>
            
            <Stack2.Screen name='THEMA' component={Thema} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>

            <Stack2.Screen name='EFFECT' component={Effect} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>

        </Stack2.Navigator>

    );


};

export default CategoryStack;