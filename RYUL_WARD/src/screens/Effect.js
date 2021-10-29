import React,{Component, useLayoutEffect, useState, useEffect} from 'react';
import { Button,useWindowDimensions,  Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler'
import SelectDropdown from 'react-native-select-dropdown';
import RNPickerDialog from 'rn-modal-picker';
import { useNavigation } from '@react-navigation/core';
import Search_bar_effect from '../components/Search_bar_effect';

const styles = StyleSheet.create({
  
    subtitle: {
      fontFamily: 'NotoSansKR_500Medium',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 18,
      marginLeft: 16,
      marginTop: 25,
    },
    container_1 : {
        marginHorizontal : 16,
        marginTop : 40,
        width : wp('100%')-32,
        height : wp('100%')/375*24,
        backgroundColor : '#E9E9E9',
        alignItems : 'center',
        justifyContent : 'center',
    },
    text_1 : {
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 12,
        
    },
    container_2 : {
        marginHorizontal : 16,
        marginTop : 40,
        width : wp('100%')-32,
        height : wp('100%')/375*40,
        borderBottomWidth : 1,
        borderBottomColor : '#E9E9E9',
        alignItems : 'center',
        justifyContent : 'center',
    },
    text_2 : {
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 14,
        
    }
    

})


const Effect = ({navigation}) => {

    return (
        <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff'}}>
            <Text style={styles.subtitle}>주가 영향 요인 분석</Text>

            <Search_bar_effect/>

            <View style={styles.container_1}>
                <Text>영향 요인</Text>
            </View>

            <Text>여기는 flatlist로 만들어야해 이률</Text>
        </ScrollView>
        </SafeAreaView>
    );
}

export default Effect;