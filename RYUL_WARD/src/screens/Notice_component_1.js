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


const Notice_component_1 = ({ navigation }) => {

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>
            
            <Text style={styles.title_text}>내용은 아직 준비가 안되어있어요!</Text>
         
            

            
        </ScrollView>
    );
};

export default Notice_component_1;