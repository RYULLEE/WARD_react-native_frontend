import React,{Component, useState, useEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { DB } from '../utils/firebase';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {images} from '../utils/images'

const styles = StyleSheet.create({
  screen_container : {
    height: hp('100%')-120,
    justifyContent : 'space-between',
    //backgroundColor : 'red'
  },
  image: {
    width: wp('100%'),
    height: wp('100%')*1632/750,
  },
  notice_container:{
    alignItems:'flex-start',
    marginLeft: 16,
    marginRight: 16,    
  },
  title_text : {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize : 14,
    //lineHeight: 30,
    includeFontPadding: false,
    //marginVertical:16,
  },
  info_text : {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize : 12,
    //lineHeight: 30,
    includeFontPadding: false,
    //marginVertical:16,
    color: 'white',
    
  },
  info_container_0 : {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('100%')-32,
    height: 60,
    marginHorizontal: 16,
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1
  },
  info_container_1 : {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: wp('80%')-16,
  },
  info_container_2 : {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 24,
    backgroundColor: '#74CD9E',
    borderRadius: 5,
  },
  gray_box : {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    margin: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  gray_box_context : {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('80%')-16,
  },
  gray_text : {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize : 14,
    //lineHeight: 30,
    includeFontPadding: false,
    textAlign: 'center',
    //marginVertical:16,
  },
});

const recruit_info = ({ navigation, route:{params} }) => {

    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
        <View style={styles.info_container_0}>
          <View style={styles.info_container_1}>
            <Text style={styles.title_text}>프로덕트 디자이너(UI/UX)</Text>
          </View>
          <View style={styles.info_container_2}>
            <Text style={styles.info_text}>모집중</Text>
          </View>
        </View>
        <View style={styles.info_container_0}>
          <View style={styles.info_container_1}>
            <Text style={styles.title_text}>데이터 사이언티스트</Text>
          </View>
          <View style={styles.info_container_2}>
            <Text style={styles.info_text}>모집중</Text>
          </View>
        </View>
        <View style={styles.info_container_0}>
          <View style={styles.info_container_1}>
            <Text style={styles.title_text}>React Native 프론트엔드 개발자</Text>
          </View>
          <View style={styles.info_container_2}>
            <Text style={styles.info_text}>모집중</Text>
          </View>
        </View>
        <View style={styles.gray_box}>
          <View style={styles.gray_box_context}>
          <Text style={styles.gray_text} >채용 관련 문의 및 이력서 제출은 plasma@sasa.hs.kr로 부탁드립니다.</Text>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export default recruit_info;