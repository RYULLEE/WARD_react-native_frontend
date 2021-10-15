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
import SelectDropdown from 'react-native-select-dropdown';
//import page_1 from '../components/tier_component';
import { useNavigation } from '@react-navigation/native';

const Al_options = ["5일", "15일", "30일"];

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
 
});

const icon=() => {

  return (
    <Image  style={{
      height:14, width: 14,}}
      source={require('../image/arrow_under.png')}
    />
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
        
        </ScrollView>
    </SafeAreaView>
  );
};

export default Algorithm;