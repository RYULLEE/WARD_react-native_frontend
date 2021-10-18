import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/Category';
import { home, category, market, etc } from '../screens/TabScreens';
import Tier_system from '../screens/Tier_system';
import TabNavigation from './Tab';
import Algorithm from '../screens/Algorithm';
import Question from '../screens/Question';
import Question_component_1 from '../screens/Question_component_1';


const Stack5 = createStackNavigator();

const QuestionStack = () => {
    
    return(

        <Stack5.Navigator initialRouteName='Question' screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}> 

            <Stack5.Screen name='Question' component={Question}  options={{ title: '111', headerShown: false, }} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

            <Stack5.Screen name='Question_component_1' component={Question_component_1} options={{ title: '222',headerShown: false }} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

    


        </Stack5.Navigator>

    );


};

export default QuestionStack;