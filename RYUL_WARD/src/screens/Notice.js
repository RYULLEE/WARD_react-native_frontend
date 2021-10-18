import React,{Component} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
//import TabViewExample from '../navigations/home_slide_tab';
//import ScrollableTabView,{ ScrollableTabBar }  from 'react-native-scrollable-tab-view';
//import { render } from 'react-router-dom';
//import Tabs from '../navigations/home_slide_tab';
//import { TabView, SceneMap } from 'react-native-tab-view';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';


const styles = StyleSheet.create({
    
      notice_container:{
        alignItems:'flex-start',
        marginLeft: 16,
        marginRight: 16,
        borderBottomColor: '#E9E9E9',
        borderBottomWidth : 1,
        
      },
      title_text : {
      
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 14,
        //lineHeight: 30,
        includeFontPadding: false,
        marginTop:11,

      },
      sub_text : {
        fontFamily: 'NotoSansKR_400Regular',
        fontSize : 12,
        //lineHeight: 30,
        includeFontPadding: false,
        marginBottom: 11,
        color:'gray',
        marginTop: 5,

      },
});


const Notice = ({ navigation }) => {

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>
            <TouchableOpacity onPress= {() => navigation.navigate('Notice_1')}>
            <View style={styles.notice_container}>
                <Text style={styles.title_text}>[필독] 알고리즘 수수료 규정 변경 안내</Text>
                <Text style={styles.sub_text}>2021.10.14 17:23</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.notice_container}>
                <Text style={styles.title_text}>개인 정보 열람 및 수정에 대한 안내 </Text>
                <Text style={styles.sub_text}>2021.10.14 17:23</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.notice_container}>
                <Text style={styles.title_text}>대표 탄핵 투표 주주 의결권 행사에 관한 안내</Text>
                <Text style={styles.sub_text}>2021.10.14 17:23</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.notice_container}>
                <Text style={styles.title_text}>4분기 재무제표 업데이트 일정 및 알고리즘 업로드 일정</Text>
                <Text style={styles.sub_text}>2021.10.14 17:23</Text>
            </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Notice;