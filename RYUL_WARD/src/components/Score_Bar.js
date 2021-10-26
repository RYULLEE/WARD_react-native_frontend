import React,{Component, useLayoutEffect} from 'react';
import { Button,useWindowDimensions,  Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from './ranking';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler'
import SelectDropdown from 'react-native-select-dropdown';
import RNPickerDialog from 'rn-modal-picker';


////두호야 이 값 방아와야대 유사도 점수
////두호야 이 값 방아와야대 유사도 점수
////두호야 이 값 방아와야대 유사도 점수
////두호야 이 값 방아와야대 유사도 점수
////두호야 이 값 방아와야대 유사도 점수
////두호야 이 값 방아와야대 유사도 점수
let score=80;


const styles = StyleSheet.create({

    Whole_container : {
        marginLeft : 16,
        marginRight : 16,
        width : wp('100%')-32,
        height : (wp('100%')-32)/343*60,
        //backgroundColor : 'yellow',
        marginBottom : 25,
    },
    
    back_bar : {

        width : wp('100%')-32,
        height : (wp('100%')-32)/343*6,
        backgroundColor : '#DBDBDB',
        borderRadius: 4,
        justifyContent : 'center',

    },
    score_image_container : {
        marginBottom : 12,
        alignItems: 'center',
        //backgroundColor : 'green',
        width : wp('100%')/375*33,
        marginLeft : -wp('100%')/375*6.5+(wp('100%')-32-wp('100%')/375*20)/100*score,
    },

    score_text : {
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 15,
        //lineHeight: 30,
        includeFontPadding: false,
        position : 'absolute',
        color: 'white',
    },

    score_ball : {
        height:wp('100%')/375*20, 
        width:wp('100%')/375*20, 
        position : 'absolute', 
        borderRadius : 50,
        borderColor : '#4663AC', 
        borderWidth : 2,
        marginLeft : (wp('100%')-32-wp('100%')/375*20)/100*score,
    },

    color_bar : {
        width : (wp('100%')-32)/100*score,
        height : (wp('100%')-32)/343*6,
        backgroundColor : '#4663AC',
        borderRadius: 4,
        justifyContent : 'center',
        position : 'absolute',
    }


})

const Score_Bar = () => {

    return(
        <View style={styles.Whole_container}>

            <View style={styles.score_image_container}>
                <Image  style={{
                    height:wp('100%')/375*31, width:wp('100%')/375*33,}}
                    source={require('../image/score_box.png')}
                />
            <Text style={styles.score_text}>{score}</Text>
            </View>

            <View style={styles.back_bar}>
                <Image  style={styles.score_ball}
                    source={require('../image/score_ball.png')}
                />
                <View style={styles.color_bar}/>
            </View>

        </View>

    );
};

export default Score_Bar;