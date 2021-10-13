import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Tier_system from '../screens/Tier_system';
import TabNavigation from './Tab';
import Algorithm from '../screens/Algorithm';

const Stack = createStackNavigator();

const MainStack = () => {

    return(

        <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleAlign: 'center',
                headerTitle: 'W A R D',
                headerBackTitleVisible: false,
                headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
                //headerStyle: { height : 60},
                }}>
           
            <Stack.Screen name='Home' component={Home}/>

            <Stack.Screen name='ALGORITHM' component={Algorithm} options={{ title: 'T I E R    S Y S T E M' }} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'Tier System',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>
            
        </Stack.Navigator>
    );
};

export default MainStack;