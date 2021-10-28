import React,{Component, useState, useEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { DB } from '../utils/firebase';

const styles = StyleSheet.create({
    
      row_container : {
        marginLeft : 16,
        marginRight : 16,
        width : wp('100%')-32,
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginTop : 16,
        flex : 1,
      },
      title_text : {
        fontFamily: 'NotoSansKR_700Bold',
        includeFontPadding: false,
        color : 'white',
        fontSize: 18,
        marginLeft: 19,
        marginTop: 19,
        position : 'absolute',
      },

      row_under_container : {
        marginTop : 16,
        marginLeft : 16,
        marginRight : 16,
        width : wp('100%')-32,
        backgroundColor : '#908F8F',
        height : wp('100%')/375*120,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 40,
        flex:1,

      },

      title_text_2 : {
        marginBottom : 5,
        fontFamily: 'NotoSansKR_400Regular',
        includeFontPadding: false,
        color : 'white',
        fontSize: 13,
        color: 'white',

      },

      large_container : {

        flex: 1,
        backgroundColor : 'white',
      }
      
});


const Category_Etc = ({navigation}) => {
    //console.log(params.id);
    

    return (
        
          <View style={styles.large_container}>
          <View style={styles.row_container}>
            <TouchableOpacity onPress= {() => navigation.navigate('SIMILAR', { send_name: ''})}>
            <Image
                style={{height:wp('100%')/375*120 , width: wp('100%')/375*249, borderRadius : 10,}}
                source={require('../image/analysis_1.png')}
            />
            <Text style={styles.title_text}>유사도 분석</Text>
            </TouchableOpacity>
            <Image
                style={{height:wp('100%')/375*120 , width: wp('100%')/375*84, borderRadius : 10,}}
                source={require('../image/analysis_0.png')}
            />

          </View>

          <View style={styles.row_container}>
            
            <Image
                style={{height:wp('100%')/375*120 , width: wp('100%')/375*52, borderRadius : 10,}}
                source={require('../image/analysis_0.png')}
            />

            <TouchableOpacity>
              <Image
                  style={{height:wp('100%')/375*120 , width: wp('100%')/375*281, borderRadius : 10,}}
                  source={require('../image/analysis_2.png')}
              />
            <Text style={styles.title_text}>주가 영향 요인 분석</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row_container}>
            <TouchableOpacity>
            <Image
                style={{height:wp('100%')/375*120 , width: wp('100%')/375*239, borderRadius : 10,}}
                source={require('../image/analysis_3.png')}
            />
            <Text style={styles.title_text}>테마주 분석</Text>
            </TouchableOpacity>
            <Image
                style={{height:wp('100%')/375*120 , width: wp('100%')/375*94, borderRadius : 10,}}
                source={require('../image/analysis_0.png')}
            />

          </View>

          <View style={styles.row_under_container}>
            <Text style={styles.title_text_2}>WARD는 꾸준한 업데이트로</Text>
            <Text style={styles.title_text_2}>새로운 분석 기능을 제공합니다!</Text>

          </View>



        </View>

       
    );
};

export default Category_Etc;