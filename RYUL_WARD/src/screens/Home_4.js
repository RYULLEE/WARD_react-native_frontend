import React,{Component, useLayoutEffect} from 'react';
import { Button,StatusBar, useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import {images} from '../utils/images'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { DB } from '../utils/firebase';

const width = Dimensions.get('window').width;

const Container = styled.View`

  align-items: center;
  
`;

const Etc_Button_Container = styled.View`

  align-items: center;
  width: ${({width})=> width-32}px;
  
`;

const styles = StyleSheet.create({
  
  background : {
    backgroundColor : '#4A5B4F',
    width : wp('100%'),
    height : wp('100%')/375*518,
  },
  row_top_container : {
    flexDirection : 'row',
    width : wp('100%')-26,
    marginLeft : 36,
    marginTop : 16,
    alignItems : 'center',
    //backgroundColor : 'red',
    //justifyContent : 'center',
  },

  row_top_text : {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize : 24,
    marginLeft : 12,
    
    lineHeight: 30,
    includeFontPadding: false,
    color : 'white',
  },

  top_icon : {
    
    //backgroundColor : 'yellow',
    width : wp('100%')/375*28,
    height : wp('100%')/375*28,
  },

  explain_container : {
    position : 'absolute',
    marginTop : wp('100%')/375*268,
    marginLeft : wp('100%')/375*84,
    //width : wp('100%')/375*174,
    //backgroundColor : 'yellow',
    //alignItems : 'flex-end'
  },

  explain_text : {
    fontFamily: 'NotoSansKR_300Light',
    fontSize : 18,
    color : 'white',
    marginVertical : 5,
    lineHeight: 30,
    includeFontPadding: false,
  },

  explain_text2 : {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize : 24,
    color : 'white',
    marginVertical : 7,
    lineHeight: 30,
    includeFontPadding: false,
  },

  text_container : {
      marginTop : wp('100%')/375*69,
      marginLeft : wp('100%')/375*159,
      //marginRight : wp('100%')/375*36,
      alignItems : 'flex-end',
      position : 'absolute',
      //backgroundColor : 'yellow'
  }

});




const Home_4 = ({ navigation,route }) => {

 


  return (
      
        <ScrollView style={{backgroundColor:'#ffffff',}}>
        
        <View style={styles.background}>
          
            <TouchableOpacity onPress= {() => navigation.navigate('Home')}>
              <Ionicons name="options-outline" size={wp('100%')/375*28} color="gray" style={{marginLeft : 36,
    marginTop : wp('100%')/375*59,}} />
            </TouchableOpacity>
           
         

          
          <TouchableOpacity onPress= {() => navigation.navigate('HOME_2')}>
            <MaterialCommunityIcons name="clock-time-four-outline" size={wp('100%')/375*28} color="gray" style={{marginLeft : 36,
    marginTop : 16,}} />
          </TouchableOpacity>
          

          
          <TouchableOpacity onPress= {() => navigation.navigate('HOME_3')}>
            <MaterialCommunityIcons name="file-find" size={wp('100%')/375*28} color="gray" style={{marginLeft : 36,
    marginTop : 16,}} />
          </TouchableOpacity>
          

          <View style={styles.row_top_container}>
          <TouchableOpacity >
            <Ionicons name="analytics-outline" size={wp('100%')/375*28} color="white" style={styles.top_icon}/>
          </TouchableOpacity>
          <Text style={styles.row_top_text}>기타 분석</Text>
          </View>

          

          <View style={styles.explain_container}>
          <Image  style={{
            height:wp('100%')/375*180, width: wp('100%')/375*223}}
            source={require('../image/home_tab_4.png')}
          />
          
          </View>

          <View style={styles.text_container}>
          <Text style={styles.explain_text}>다양한 분석 알고리즘으로</Text>
          
          <View style={{flexDirection : 'row', alignItems : 'center', }}>
          <Text style={styles.explain_text}>당신만의</Text> 
          <Text style={styles.explain_text2}> 전략</Text>
          <Text style={styles.explain_text}> 을</Text> 
          </View>
          <Text style={styles.explain_text}>구축하세요.</Text>
        </View>

        </View>



      </ScrollView> 
      
        
      
    );
        
  };
  
  export default Home_4;
