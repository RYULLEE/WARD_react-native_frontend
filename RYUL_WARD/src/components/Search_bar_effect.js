import React,{Component, useLayoutEffect} from 'react';
import { Button,useWindowDimensions,  Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from './ranking';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler'
import SelectDropdown from 'react-native-select-dropdown';
import RNPickerDialog from 'rn-modal-picker';
import Score_Bar from './Score_Bar';
import Line_chart_effect from './Line_chart_effect';

const styles = StyleSheet.create({

    container: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor : 'yellow',
        marginLeft : 0,
        width : wp('100%')-32,
        marginLeft : 16,
        marginRight : 16,
        //backgroundColor : 'red'
  
      },
      selectedTextStyle: {
        //height: 40,
        borderColor: 'gray',
        //backgroundColor: 'red',
        justifyContent: 'center',
        //width: '100%',
        color: '#6C7681',
        fontFamily: 'NotoSansKR_300Light',
        fontSize : 18,
        //lineHeight: 30,
        includeFontPadding: false,
        marginLeft : 35,
        marginTop: -4,
      },
      
      listTextStyle: {
        color: '#000',
        marginVertical: 10,
        flex: 0.9,
        marginLeft: 20,
        marginHorizontal: 10,
        textAlign: 'left',
        fontFamily: 'NotoSansKR_300Light',
        fontSize : 16,
        //lineHeight: 30,
        includeFontPadding: false,
        //backgroundColor : 'red',
      },
      searchBarStyle: {
        //marginBottom: 10,
        flexDirection: 'row',
        height: 40,
        borderWidth: 0.5,
        borderColor: '#6C7681',
        //shadowColor: '#303030',
        borderRadius: 5,
        //elevation: 1,
        //marginHorizontal: 16,
        //backgroundColor : 'blue'
      },
      
      dropDownIconStyle: {
        width: wp('100%')-32,
        height: 40,
        left: -(wp('100%')-32),
        // marginTop: 20,
        //backgroundColor : 'red',
        opacity : 0,
      },
      
      pickerStyle: {
        borderWidth: 1,
        height: 40,
        borderColor: '#8D7EB5',
        borderRadius: 5,
        //backgroundColor : 'red',
        //marginLeft : 16,
       // marginRight : 16,
        width : wp('100%')-32,
      },
      name_row_container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : wp('100%')-32,
        marginHorizontal : 16,
        //marginBottom : 25,
        marginTop : 10,
        marginBottom : 30,
      },
      name_row_inside_conatiner_1_left : {
        //backgroundColor : 'red',
        justifyContent : 'center',
        justifyContent : 'space-evenly',
        marginLeft : 16,
      },
      name_row_inside_conatiner_1_right : {
        //backgroundColor : 'red',
        justifyContent : 'center',
        justifyContent : 'space-evenly',
        alignItems : 'flex-end',
        marginRight : 16,
      },
      name_row_inside_conatiner_2 : {
        backgroundColor :  '#F7F7F9',
        borderRadius : 10,
        //alignItems : 'center',
        justifyContent : 'center',
        width : wp('100%')/375*122,
      },
      name_text : {
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 16,
        //lineHeight: 30,
        includeFontPadding: false,
      },
      name_sub_text : {
        fontFamily: 'NotoSansKR_400Regular',
        fontSize : 11,
        //lineHeight: 30,
        includeFontPadding: false,
        color : '#999999',
      },
      right_text_1 : {
        fontFamily: 'NotoSansKR_400Regular',
        fontSize : 12,
        lineHeight: 30,
        includeFontPadding: false,
        marginRight : 10,
      },
      right_text_2 : {
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 18,
        //lineHeight: 30,
        includeFontPadding: false,
      },

})

const show_name=false;



class Search_bar_effect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: '삼성전자',
        },
        {
          id: 2,
          name: 'SK 하이닉스',
        },
        {
          id: 3,
          name: 'NAVER',
        },
        {
          id: 4,
          name: '삼성바이오로직스',
        },
        {
          id: 5,
          name: 'LG 화학',
        },
        {
          id: 6,
          name: '카카오',
        },
        {
          id: 7,
          name: '삼성전자우',
        },
        {
          id: 8,
          name: '삼성SDI',
        },
        {
          id: 9,
          name: '현대차',
        },
        {
          id: 10,
          name: '기아',
        },
        
        
      ],
      placeHolderText: '종목명 또는 종목 코드 검색',
      selectedText: '',
      defaultValue: true,
      select: '',
      value: '',

    };
  }

  selectedValue(index, item) {
    this.setState({selectedText: item.name});
  }

  render() {
    return (
      <View>
      <View style={{justifyContent : 'center'}}>
        <View style={styles.container}>
          
          <RNPickerDialog
            data={this.state.data}
            //pickerTitle={'Sort by'}
            // labelText={'testss'}
            showSearchBar={true}
            showPickerTitle={true}
            listTextStyle={styles.listTextStyle}
            pickerStyle={styles.pickerStyle}
            selectedText={this.state.selectedText}
            placeHolderText={this.state.placeHolderText}
            searchBarPlaceHolder={'종목명 또는 종목 코드 검색'}
            searchBarPlaceHolderColor={'#9d9d9d'}
            selectedTextStyle={styles.selectedTextStyle}
            placeHolderTextColor={'gray'}
            dropDownIconStyle={styles.dropDownIconStyle}
            searchBarStyle={styles.searchBarStyle}
            //dropDownIcon={require('../image/top_5.png')}
            selectedValue={(index, item) => this.selectedValue(index, item)}
          />        
        </View>
        
        <View style={{position : 'absolute', marginLeft : 30,}}>
          <Ionicons
              name="search"
              size={22}
              color='#8D7EB5'            
          />
        </View>      
      </View>
      <View>
      { (this.state.selectedText!=''?true:false) &&
        <View style={styles.name_row_container}>
          <View style={{flexDirection : 'row', }}>
          <Image
                    style={{ height: wp('100%')/375*48, width: wp('100%')/375*48, borderRadius: 0, }}
                    source={require('../image/similar_name_1.png')}
          />
          <View style={styles.name_row_inside_conatiner_1_left}>
            <Text style={styles.name_text}>{this.state.selectedText}</Text>
            <Text style={styles.name_sub_text}>선택한종목 설명</Text>
          </View>
          </View>

          
        </View>
      }
      </View>

      <View>
      { (this.state.selectedText!=''?true:false) && 
        <View>
            
            <Line_chart_effect/>

        </View>
      }
      </View>
      


      </View>
      
    );
  }
}

export default Search_bar_effect;