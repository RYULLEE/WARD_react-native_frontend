import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Tier_system from '../screens/Tier_system';
import TabNavigation from './Tab';

const Stack = createStackNavigator();

const MainStack = () => {

    return(

        <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleAlign: 'center',
                headerTitle: 'W A R D',
                headerBackTitleVisible: false,
                headerTitleStyle : { fontSize : 20,},
                //headerStyle: { height : 60},
                }}>
           
            <Stack.Screen name='Home' component={Home}/>
            
            <Stack.Screen name='Tier_system' component={Tier_system}/>
            
        </Stack.Navigator>
    );
};

export default MainStack;