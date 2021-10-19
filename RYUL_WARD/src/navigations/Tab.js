import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { home, category, market, etc } from '../screens/TabScreens';
import Home from '../screens/Home';
import Tier_system from '../screens/Tier_system';
import MainStack from './MainStack';
import CategoryStack from './CategoryStack';
import EtcStack from './EtcStack'
import { UserContext } from '../contexts';
import TabBarComponent from '../components/TabBarComponent';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthStack from './AuthStack';

const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  };

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    //const {user} = useContext(UserContext);
    return(
        <Tab.Navigator initialRouteName='홈' 
        
        screenOptions={{tabBarStyle:{backgroundColor: '#F0F0F0' }, position: 'absolute',tabBarActiveTintColor: '#000000', headerShown:false,tabBarinactiveTintColor: '#858383'}}>
            <Tab.Screen name='홈' component={MainStack}  options={{keyboardHidesTabBar: true, tabBarIcon: props => TabIcon({...props, name:'home'}),}}/>
            <Tab.Screen name='카테고리' component={CategoryStack} options={{tabBarIcon: props => TabIcon({...props, name:'format-list-bulleted'}),}}/>
            <Tab.Screen name='다운로드 마켓' component={market} options={{tabBarIcon: props => TabIcon({...props, name:'cart'}),}}/>
            <Tab.Screen name='더보기' component={EtcStack} options={{tabBarIcon: props => TabIcon({...props, name:'dots-horizontal'}),}}
            //user?.uid && user?.email ? EtcStack : AuthStack
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;