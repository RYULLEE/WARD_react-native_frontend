import React,{Component} from 'react';
import { AppRegistry, processColor, Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
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
import SelectDropdown from 'react-native-select-dropdown';
//import page_1 from '../components/tier_component';
import { useNavigation } from '@react-navigation/native';
import Plotly from 'react-native-plotly';
//import update from 'immutability-helper';
//import {RadarChart} from 'react-native-charts-wrapper';
import RadarChartScreen from '../components/RadarChartScreen';

const Al_options = ["5일", "15일", "30일"];

const data = [ 
  {
  type: 'scatterpolar', 
  r: [80, 90, 75,80], 
  theta: ['적즁률','수익률','정밀도','적즁률'], 
  fill: 'toself', 
  name: 'WARD',
  line: {
    color: '#E99314',
  },
  },
  {
    type: 'scatterpolar', 
    r: [30, 40, 50,30], 
    theta: ['적즁률','수익률','정밀도','적즁률'], 
    fill: 'toself', 
    name: '시장 평균', 
    line: {
      color: 'gray',
    },
    }
];

const layout = { 
  height:wp('100%')/375*250,
  l: 0, r: 0, b: 0, t: 0, pad: 0,
  margin:{
    l: 0,
      r: 0,
      t: 40,
      d: 0,
  },
  polar: {
    radialaxis: { 
      visible: true, 
      range: [0, 100],
      showticklabels: false,  
      showline: false,
      ticklen: 0,
    },
    angularaxis: { 
      rotation: 210, 
      ticklen: 0,
      tickfont: { 
        color: '#000000',
        size: 13,
        fontFamily: 'NotoSansKR_500Medium',
      },
    },

  },
  showlegend: false,
  autosize: true,
  staticPlot: true,
  xaxis: {
    uirevision: 'time',
 },
 yaxis: {
    uirevision: 'time',
 },
  
};


const styles = StyleSheet.create({

  subtitle: {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 18,
    marginLeft: 16,
    marginTop: 40,
  },
  top_rowcontatiner: {
    flexDirection: 'row',
    //justifyContent:'space-between',
    width:wp('100%')-32,
    marginLeft:16,
    marginRight:16,
    marginTop:16,
    
  },
  top_container : {
    height: (wp('100%')/375*77),
    justifyContent:'space-between',
    marginLeft: 25,
    //backgroundColor:'yellow',
    marginTop:-5,
  },
  top_row_smallcontainer : {
    flexDirection: 'row',
    alignItems:'flex-start',
    
    
  },
  select_box:{
    width:wp('100%')/375*65,
    //marginLeft:10,
    backgroundColor:'#ffffff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:5,
    height: 20,
  },
  
  select_box_text:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 14,
    marginLeft:0,
  },
  select_box_text_under:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 15,
  },
  top_text_1:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    
    fontSize: 20,
    //backgroundColor:'red',
    
  },
  top_text_2:{
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 12,
    //backgroundColor:'green',
  },
  top_text_3:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 14,
    marginRight: 10,
    borderRadius:5,
    height: 20,
    //borderWidth: 1,
    borderColor: 'gray'
  },
  chart_container : {
    height:wp('100%')/375*180,
    //width: 200,
    backgroundColor:'red',
    //alignItems:'center',
    //justifyContent:'center',
    marginTop: -10,
  },
  scroll_container:{
    height:wp('100%')/375*180+40,
    
  },
  hide_box1 : {
    height: 21,
    width: wp('100%'),
    backgroundColor: '#ffffff',
    position: 'absolute',
    //opacity:0.5,
  },
  hide_box2 : {
    height: wp('100%')/375*180-21,
    width: wp('100%'),
    marginTop:21,
    backgroundColor: 'blue',
    position: 'absolute',
    opacity:0,
  },
  row_explain_container : {
    flexDirection:'row',
    marginLeft: 16,
    marginTop: 15,
    alignItems:'center',
  },
  explain_text1:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 12,
    color: '#E99314',
    marginLeft: 5,
    marginRight: 19,
  },
  explain_text2:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 12,
    color: '#999999',
    marginLeft: 5,
  },
  row_tier_container:{
    flexDirection: 'row',
    marginLeft:16,
    marginTop: 23,
    alignItems:'center',
    marginRight:28,
    justifyContent: 'space-between'
  },
  tier_component_container : {
    justifyContent:'center',
    alignItems: 'center',
  },
  tier_component_text : {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 12,
    marginTop: 8,
  },
 
});

const icon=() => {

  return (
    <Image  style={{
      height:14, width: 14,}}
      source={require('../image/arrow_under.png')}
    />
  );
};

const Radar_chart = () => {

    return(
      <View style={styles.chart_container} >
          
      <Plotly  data={data} layout={layout} debug enableFullPlotly />
      <View style={styles.hide_box1}/>
      <View style={styles.hide_box2}/>
    </View>
    );
};

const Algorithm = ({ navigation }) => {

  return(
    
    <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>

        <View style={styles.top_rowcontatiner}>
          <Image
            style={{height:wp('100%')/375*77 , width: wp('100%')/375*77, borderRadius : 10,}}
            source={require('../image/top_1.png')}
          />
          <View style={styles.top_container}>
            <View >
            <Text style={styles.top_text_1}>WARD Tier System</Text>
            <Text style={styles.top_text_2}>ALL|ALL|딥러닝</Text>
            </View>

            <View style={styles.top_row_smallcontainer}>
              <Text style={styles.top_text_3}>투자 기간 설정</Text>
              <SelectDropdown
                data={Al_options}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                defaultButtonText={'5일'}
                buttonStyle={styles.select_box}
                buttonTextStyle={styles.select_box_text}
                rowTextStyle={styles.select_box_text_under}
                renderDropdownIcon={icon}
                
              />
            </View>
          </View>

        </View>
        <Text style={styles.subtitle}>알고리즘 스코어</Text>
        <View style={styles.row_explain_container}>
        <Image
            style={{height:wp('100%')/375*11 , width: wp('100%')/375*11,}}
            source={require('../image/score_box_1.png')}
          />
        <Text style={styles.explain_text1}>WARD Tier System</Text>
        <Image
            style={{height:wp('100%')/375*11 , width: wp('100%')/375*11,}}
            source={require('../image/score_box_2.png')}
          />
        <Text style={styles.explain_text2}>시장 평균</Text>
        </View>

        <View style={styles.scroll_container}>
        <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
            tabBarTextStyle={styles.tabBarTextStyle}
          >
            <Radar_chart tabLabel={'최근 1개월'}/>
              
            <Radar_chart tabLabel={'최근 3개월'}/>

            <Radar_chart tabLabel={'최근 6개월'}/>

            <Radar_chart tabLabel={'최근 12개월'}/>
        </ScrollableTabView>
        </View>
               
        <Text style={styles.subtitle}>종목 티어 표</Text>
        <View style={styles.row_tier_container}>
          <Image
            style={{height:wp('100%')/375*29 , width: wp('100%')/375*23,}}
            source={require('../image/tier_label_1.png')}
          />
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_1_1.png')}
            />
            <Text style={styles.tier_component_text}>현대차</Text>
          </View>
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_1_2.png')}
            />
            <Text style={styles.tier_component_text}>카카오</Text>
          </View>
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_1_3.png')}
            />
            <Text style={styles.tier_component_text}>기아</Text>
          </View>
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_1_4.png')}
            />
            <Text style={styles.tier_component_text}>셀트리온</Text>
          </View>
        </View>

        <View style={styles.row_tier_container}>
          <Image
            style={{height:wp('100%')/375*29 , width: wp('100%')/375*23,}}
            source={require('../image/tier_label_2.png')}
          />
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_2_1.png')}
            />
            <Text style={styles.tier_component_text}>현대차</Text>
          </View>
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_2_2.png')}
            />
            <Text style={styles.tier_component_text}>카카오</Text>
          </View>
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_2_3.png')}
            />
            <Text style={styles.tier_component_text}>기아</Text>
          </View>
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_2_4.png')}
            />
            <Text style={styles.tier_component_text}>셀트리온</Text>
          </View>
        </View>

        <View style={styles.row_tier_container}>
          <Image
            style={{height:wp('100%')/375*29 , width: wp('100%')/375*23,}}
            source={require('../image/tier_label_3.png')}
          />
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_3_1.png')}
            />
            <Text style={styles.tier_component_text}>현대차</Text>
          </View>
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_3_2.png')}
            />
            <Text style={styles.tier_component_text}>카카오</Text>
          </View>
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_3_3.png')}
            />
            <Text style={styles.tier_component_text}>기아</Text>
          </View>
          <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,}}
              source={require('../image/tier_component_3_4.png')}
            />
            <Text style={styles.tier_component_text}>셀트리온</Text>
          </View>
        </View>

        
        </ScrollView>
    </SafeAreaView>
  );
};

export default Algorithm;