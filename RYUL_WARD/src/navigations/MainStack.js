import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Tier_system from '../screens/Tier_system';
import TabNavigation from './Tab';
import Algorithm from '../screens/Algorithm';
import Ranking from '../components/ranking';

const Stack = createStackNavigator();

const MainStack = () => {

    return(

        <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleAlign: 'center',
                
                headerBackTitleVisible: false,
                headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
                //headerStyle: { height : 60},
                }}>
           
            <Stack.Screen name='Home' component={Home} options={{ title: 'W A R D' }} screenOptions={{
                headerTitleAlign: 'center',
                
                headerBackTitleVisible: false,
                headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
                //headerStyle: { height : 60},
                }}/>

            <Stack.Screen name='RANKING' component={Ranking}/>

            <Stack.Screen name='ALGORITHM' component={Algorithm} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>
            
        </Stack.Navigator>
    );
};

export default MainStack;