import React,{Component, useLayoutEffect} from 'react';
import { Button,useWindowDimensions,  Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler'
import SelectDropdown from 'react-native-select-dropdown';
import RNPickerDialog from 'rn-modal-picker';
import Search_bar_similar from '../components/Search_bar_similar';

const Pf_options = ["단기", "중기", "장기"];

const styles = StyleSheet.create({
  
    subtitle: {
      fontFamily: 'NotoSansKR_500Medium',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 18,
      //marginLeft: 16,
      //marginTop: 25,
    },
    top_row_smallcontainer : {
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent : 'center',
        
      },
    top_row_container_1 : {
        flexDirection : 'row',
        marginLeft : 16,
        marginRight : 16,
        width : wp('100%')-32,
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 25,

    },
      select_box:{
        width: wp('100%')/375*65,
        height : wp('100%')/375*28,
        backgroundColor:'white',
        borderColor: '#F3F4F6',
        borderWidth: 2,
        borderRadius:10,
        //height: 20,

      },

      
      
      select_box_text:{
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 14,
        marginLeft:0,
        //backgroundColor : 'red'
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
          //marginRight: 10,
          borderRadius:5,
          //height: 20,
          //borderWidth: 1,
          borderColor: 'gray',
          //backgroundColor : 'red',
        },
        top_text_3_box : {
            width : wp('100%')/375*103,
            height : wp('100%')/375*28,
            backgroundColor : '#F3F4F6',
            alignItems : 'center',
            justifyContent : 'center',
            borderRadius : 10,
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

  



const Similar = ({navigation}) => {


  
      return (
        <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>

            <View style={styles.top_row_container_1}>
            <Text style={styles.subtitle}>유사도 점수</Text>

            <View style={styles.top_row_smallcontainer}>
                <View style={styles.top_text_3_box}>
              <Text style={styles.top_text_3}>분석 단위 설정</Text>
                </View>
              <SelectDropdown
                data={Pf_options}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                defaultButtonText={'단기'}
                buttonStyle={styles.select_box}
                buttonTextStyle={styles.select_box_text}
                rowTextStyle={styles.select_box_text_under}
                renderDropdownIcon={icon}
                
              />
            </View>
            </View>

            <Search_bar_similar/>


        </ScrollView>
        </SafeAreaView>
      );

};

export default Similar;