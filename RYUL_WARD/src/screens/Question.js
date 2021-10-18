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
    
      question_container:{
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
        marginTop:21,
        marginBottom:21,

      },
     
});


const Question = ({ navigation }) => {

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>
            <TouchableOpacity onPress= {() => navigation.navigate('Question_component_1')}>
            <View style={styles.question_container}>
                <Text style={styles.title_text}>Q. WARD 서비스랑 무엇인가요?</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.question_container}>
                <Text style={styles.title_text}>Q. 알고리즘 업로드 수수료는 어떻게 되나요?</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.question_container}>
                <Text style={styles.title_text}>Q. 적중률, 수익률, 정밀도는 어떻게 계산 되나요?</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.question_container}>
                <Text style={styles.title_text}>Q. 알고리즘 심사 기간은 어느정도 소요되나요?</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.question_container}>
                <Text style={styles.title_text}>Q. 실시간 분 단위 분석은 제공하지 않나요?</Text>
            </View>
            </TouchableOpacity>

            
        </ScrollView>
    );
};

export default Question;