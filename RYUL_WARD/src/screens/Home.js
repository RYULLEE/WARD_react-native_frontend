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
import Swiper from 'react-native-swiper';
import Home_1 from './Home_1';
import Home_2 from './Home_2';
import Home_3 from './Home_3';
import Home_4 from './Home_4';

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
    backgroundColor : '#3A4057',
    width : wp('100%'),
    height : wp('100%')/375*518,
  },
  row_top_container : {
    flexDirection : 'row',
    width : wp('100%')-26,
    marginLeft : 36,
    marginTop : wp('100%')/375*59,
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
    marginLeft : 36,
    marginTop : 16,
    //backgroundColor : 'yellow',
    width : wp('100%')/375*28,
    height : wp('100%')/375*28,
  },

  explain_container : {
    position : 'absolute',
    marginTop : wp('100%')/375*137,
    marginLeft : wp('100%')/375*166,
    width : wp('100%')/375*174,
    //backgroundColor : 'yellow',
    alignItems : 'flex-end'
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
    marginVertical : 5,
    lineHeight: 30,
    includeFontPadding: false,
  },
  wrapper: {
    height : wp('100%')/375*518,
  },
  slide1: {
    width : wp('100%'),
    height : wp('100%')/375*518,
  },
  top10rowcontatiner: {
    flexDirection: 'row',
    marginLeft:36,
    marginTop:16,
  },

});



const Home = ({ navigation,route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTintColor: 'black',
      
      headerRight: ({ tintColor }) => (
        
        <Ionicons
          name="search"
          size={25}
          style={{ marginRight: 20 }}
          color='gray'
          onPress= {() => navigation.navigate('Search')}
        />
      ),
    });
  }, []);


  return (
      
        <ScrollView style={{backgroundColor:'#ffffff',}}>
        
        
        <View style={styles.background}>
          <View style={styles.row_top_container}>
            <TouchableOpacity>
              <Ionicons name="options-outline" size={wp('100%')/375*28} color="white" />
            </TouchableOpacity>
            <Text style={styles.row_top_text}>종목 티어 시스템</Text>
          </View>

<<<<<<< HEAD
          <TouchableOpacity onPress= {() => navigation.navigate('HOME_2')}>
            <MaterialCommunityIcons name="clock-time-four-outline" size={wp('100%')/375*28} color="gray" style={styles.top_icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => navigation.navigate('HOME_3')}>
            <MaterialCommunityIcons name="file-find" size={wp('100%')/375*28} color="gray" style={styles.top_icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => navigation.navigate('HOME_4')}>
            <Ionicons name="analytics-outline" size={wp('100%')/375*28} color="gray" style={styles.top_icon}/>
          </TouchableOpacity>
=======
      <Text style={styles.subtitle}>WARD Youtube</Text>

      <View style={styles.youtube_rowcontainer}>
        <TouchableOpacity>
        <Image  style={{
          height:wp('100%')/373*93, width: wp('100%')/373*167, borderRadius: 10, }}
          source={require('../image/ward_youtube_1.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image  style={{
          height:wp('100%')/373*93, width: wp('100%')/373*167, borderRadius: 10, }}
          source={require('../image/ward_youtube_2.png')}
        />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Upload Yours</Text>
      
      <View style={styles.upload_container} >

        <TouchableOpacity>
          <Image  style={{
            height:wp('100%')/2/187*112, width: wp('100%')/2, marginBottom: 40}}
            source={require('../image/upload_yours_1.png')}
          />
        </TouchableOpacity>
>>>>>>> ca51e3875ac0bd3da00344347ffbf1b54caa1627

          <Image  style={{
<<<<<<< HEAD
            height:wp('100%')/375*102, width: wp('100%')/375*188, marginTop : 125, marginLeft : 36,}}
            source={require('../image/home_tab_1.png')}
=======
            height:wp('100%')/2/187*112, width: wp('100%')/2, marginBottom: 40}}
            source={require('../image/upload_yours_2.png')}
>>>>>>> ca51e3875ac0bd3da00344347ffbf1b54caa1627
          />

<<<<<<< HEAD
          <View style={styles.explain_container}>
            <Text style={styles.explain_text}>와드는</Text>
            <Text style={styles.explain_text}>지금 당장</Text>
            <Text style={styles.explain_text}>투자하기 좋은</Text>
              <View style={{flexDirection : 'row', alignItems : 'center'}}>
                <Text style={styles.explain_text2}>종목군</Text> 
                <Text style={styles.explain_text}> 을 추천합니다.</Text>
              </View>
          </View>

        </View>

        

=======
      
>>>>>>> ca51e3875ac0bd3da00344347ffbf1b54caa1627
      </ScrollView> 
      
        
      
    );
        
  };
  
  export default Home;
