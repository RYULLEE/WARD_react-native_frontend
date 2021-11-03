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
import { TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

const horizontalAnimation = {
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        
        cardStyle: {
        
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

const MainStack = () => {

    return(

        <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleAlign: 'center',
                headerShown: false,
                headerBackTitleVisible: false,
                headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
                //headerStyle: { height : 60},
                }}>
           
            <Stack.Screen name='Home' component={Home} options={horizontalAnimation}  screenOptions={{
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
                //headerStyle: { height : 60},
                
                }}
                
                />

            <Stack.Screen name='RANKING' component={Ranking}/>

            <Stack.Screen name='ALGORITHM' component={Algorithm} options={{ title: '',headerShown: true, }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>

            <Stack.Screen name='Search' component={Search} options={{ title: '', headerShown: false, }} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/>    

            <Stack.Screen name='HOME_2' component={Home_2} options={horizontalAnimation}  screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerShown: false,
            //headerStyle: { height : 60},
            }}/>   

            <Stack.Screen name='HOME_3' component={Home_3} options={horizontalAnimation} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            ...TransitionPresets.SlideFromRightIOS,
            //headerStyle: { height : 60},
            }}/>   

            <Stack.Screen name='HOME_4' component={Home_4} options={horizontalAnimation} screenOptions={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            
            //headerStyle: { height : 60},
            }}/> 
            
        </Stack.Navigator>
    );
};

export default MainStack;