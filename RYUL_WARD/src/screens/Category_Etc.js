import React,{Component, useState, useEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { DB } from '../utils/firebase';

const styles = StyleSheet.create({
    
      notice_container:{
        alignItems:'flex-start',
        marginLeft: 16,
        marginRight: 16,
        borderBottomColor: '#E9E9E9',
        borderBottomWidth : 1,
        
      },
      
});


const Notice_component_1 = ({navigation}) => {
    //console.log(params.id);
    

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>
          <Text> 유사도, 테마주 등등 </Text>
          </ScrollView>
    );
};

export default Notice_component_1;