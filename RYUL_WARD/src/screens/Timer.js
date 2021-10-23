import React,{Component, useState, useEffect} from 'react';
import { AppRegistry, processColor, Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import Plotly from 'react-native-plotly';
import RadarChartScreen from '../components/RadarChartScreen';
import { DB } from '../utils/firebase';
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import RNPickerDialog from 'rn-modal-picker';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const styles = StyleSheet.create({

    subtitle: {
      fontFamily: 'NotoSansKR_500Medium',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 18,
      marginLeft: 16,
      marginTop: 40,
    },
    item: {
        backgroundColor: "#ffffff",
        padding: 15,
        marginVertical: 2,
        marginLeft: 16,
        marginRight: 16,
    },
    notice_container:{
      alignItems:'flex-start',
      marginLeft: 16,
      marginRight: 16,
      borderBottomColor: '#E9E9E9',
      borderBottomWidth : 1,
      
    },
    input_text : {
      fontFamily: 'NotoSansKR_500Medium',
      fontSize : 16,
      //lineHeight: 30,
      includeFontPadding: false,
    },
    title_text : {
    
      fontFamily: 'NotoSansKR_500Medium',
      fontSize : 16,
      //lineHeight: 30,
      includeFontPadding: false,
      marginTop:20,
      color: '#6F7985',
      marginLeft: 31,
      marginBottom: 15,


    },




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
    },
    name_row_inside_conatiner_1 : {
      //backgroundColor : 'red',
      justifyContent : 'center',
      justifyContent : 'space-evenly',
      marginLeft : 16,
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
    linechart_container : {
      height : wp('100%')/375*220,
      width : wp('100%')/375*270,
      //backgroundColor : 'red',
      //marginLeft : -wp('100%')/375*30,
      justifyContent : 'flex-end',
      marginLeft : 16,
      //borderWidth : 1,
      borderRadius : 10,
      borderColor : '#E9E9E9',
    },
    line_box : {
      alignItems : 'center',
      justifyContent : 'center',
      height : wp('100%')/375*190,
      width : wp('100%')/375*270,
      borderWidth : 1,
      borderRadius : 10,
      borderColor : '#E9E9E9',
      position : 'absolute',
      marginLeft : wp('100%')/375*10,
      marginTop : wp('100%')/375*15,
    },
    large_linechart_container : {
      flexDirection : 'row',
      width : wp('100%')-32,
      //justifyContent : 'space-around',
      alignItems : 'flex-start',
      marginLeft : wp('100%')/375*3,
      
    }
   
});

const screenWidth = Dimensions.get("window").width;


const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  //barPercentage: 0.5,
  useShadowColorFromDataset: true, // optional
  
};

const d = [60, 50, 100, 0, 10,];

const data_linechart = {
  labels: ["9/30", "10/1", "10/4", "10/5", "10/6",],
  datasets: [
    {
      data: [60, 50, 100, 0, 10,],
      color: (opacity = 1) => `rgba(141,126,181, ${opacity})`, 
      strokeWidth: 2 // optional
    }
  ],
  //legend: ["Rainy Days"] // optional
};



const show_name=false;

class Search_Bar_name extends React.Component {
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
                    source={require('../image/name_1.png')}
          />
          <View style={styles.name_row_inside_conatiner_1}>
            <Text style={styles.name_text}>{this.state.selectedText}</Text>
            <Text style={styles.name_sub_text}>선택한종목 해당하는 설명</Text>
          </View>
          </View>
          <View style={styles.name_row_inside_conatiner_2}>
            <View style={{flexDirection:'row',alignItems : 'center', justifyContent : 'center',}}>
              <Text style={styles.right_text_1}>적중률</Text>
              <Text style={styles.right_text_2}>65.5%</Text>
            </View>
          </View>
        </View>
      }
      </View>

      <View>
      { (this.state.selectedText!=''?true:false) && 
        <View>
            
        </View>
      }
      </View>



      </View>
      
    );
  }
}

const minValue = 0;
const maxValue = Math.max.apply(null,d);
function* yLabel() {
  yield* [minValue, '50', maxValue];
}
const yLabelIterator = yLabel();


const Timer = ({ navigation }) => {

    return(
        <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
            <Text style={styles.subtitle}>Timing Score</Text>

            <Search_Bar_name/>

            <View style={styles.large_linechart_container}>
            <View style={styles.linechart_container}>
            <LineChart
              data={data_linechart}
              width={wp('100%')/375*330}
              height={wp('100%')/375*200/100*maxValue}
              chartConfig={chartConfig}
              withVerticalLines = {false}
              fromZero = {true}
              yAxisInterval={1000}
              yLabelsOffset={10}
              segments={2}
              withHorizontalLabels = {false}
              //withVerticalLabels = {false}
              style={{marginLeft:-wp('100%')/375*40}}
              withVerticalLines={false}
              withHorizontalLines={false}
              withShadow={false}
              propsForDots= {
                r= "6",
                strokeWidth= "2",
                stroke= "#fff"
            }
              renderDotContent = {({x, y, index}) => <Text style={{ position: 'absolute', top: y-wp('100%')/375*19, left: x-wp('100%')/375*9 }} >{d[index]}</Text>}
              xLabelsOffset = {-wp('100%')/375*8}
              //horizontalLabelRotation= {50}
              //hidePointsAtIndex='4'
              //formatYLabel= {yLabel}
              //formatYLabel={() => yLabelIterator.next().value}
            />
            
            </View>

            <Image
              style={{ height: wp('100%')/375*190, width:wp('100%')/375*50, borderRadius: 15,marginLeft : wp('100%')/375*15, marginTop : wp('100%')/375*14, }}
              source={require('../image/buy_sell.png')}
            />
            <View style={styles.line_box}>
              <Image
                style={{ height: wp('100%')/375*1, width:wp('100%')/375*250, borderRadius: 15,  }}
                source={require('../image/line_box.png')}
              />
            </View>

            </View>
        </ScrollView>
        </SafeAreaView>

    );

};

export default Timer;