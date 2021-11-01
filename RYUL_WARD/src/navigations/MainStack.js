import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Tier_system from '../screens/Tier_system';
import TabNavigation from './Tab';
import Algorithm from '../screens/Algorithm';
import Ranking from '../components/ranking';
import Search from '../screens/Search';
import Home_2 from '../screens/Home_2';
import Home_3 from '../screens/Home_3';
import Home_4 from '../screens/Home_4';

const Stack = createStackNavigator();

const MainStack = () => {

    return(

        <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleAlign: 'center',
                
                headerBackTitleVisible: false,
                headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
                //headerStyle: { height : 60},
                }}>
           
            <Stack.Screen name='Home' component={Home} options={{ title: 'W A R D', headerShown: false, }} screenOptions={{
                headerTitleAlign: 'center',
                
                headerBackTitleVisible: false,
                headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
                //headerStyle: { height : 60},
                
                }}
                
                />

            <Stack.Screen name='RANKING' component={Ranking}/>

            <Stack.Screen name='ALGORITHM' component={Algorithm} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>

            <Stack.Screen name='Search' component={Search} options={{ title: '', headerShown: false, }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>    

            <Stack.Screen name='HOME_2' component={Home_2} options={{ title: '', headerShown: false, }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>   

            <Stack.Screen name='HOME_3' component={Home_3} options={{ title: '', headerShown: false, }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>   

            <Stack.Screen name='HOME_4' component={Home_4} options={{ title: '', headerShown: false, }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/> 
            
        </Stack.Navigator>
    );
};

export default MainStack;