import React,{Component, useState, useEffect} from 'react';
import { AppRegistry, processColor, Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import RNPickerDialog from 'rn-modal-picker';
import { Chart, VerticalAxis, HorizontalAxis, Line, Tooltip } from 'react-native-responsive-linechart'
import { DB } from '../utils/firebase';
import { DATA } from '../utils/stock_info';


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
      height : wp('100%')/375*170,
      width : wp('100%')/375*270,
      //backgroundColor : 'yellow',
      //marginLeft : -wp('100%')/375*30,
      //justifyContent : 'center',
      //marginLeft : 16,
      borderWidth : 1,
      borderRadius : 10,
      borderColor : '#E9E9E9',
    },
    line_box : {
      alignItems : 'center',
      justifyContent : 'center',
      height : wp('100%')/375*190,
      width : wp('100%')/375*290,
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
      //height : 1000,
      //justifyContent : 'space-evenly',
      alignItems : 'flex-start',
      marginLeft : 16,
      //backgroundColor : 'red',
      //zIndex:1,
    },
    x_label_text : {
      fontFamily: 'NotoSansKR_500Medium',
      fontSize : 10,
      //lineHeight: 30,
      includeFontPadding: false,
    },
    x_label_row_container : {
      width : wp('100%')/375*236,
      flexDirection : 'row',
      justifyContent : 'space-between',
      position : 'absolute',
      marginHorizontal : wp('100%')/375*10,
      //backgroundColor : 'green',
      marginTop : wp('100%')/375*145,
    },
   
});

const screenWidth = Dimensions.get("window").width;

const data_linechart = [
  { x: 0, y: 60 },
  { x: 1, y: 45 },
  { x: 2, y: 55 },
  { x: 3, y: 0 },
  { x: 4, y: 100 }
]



const data_date =['9/30' , '10/1', '10/4', '10/5', '10/6']

const show_name=false;

class Search_Bar_name extends React.Component {
  constructor(props) {
    console.log(props.search_data);
    super(props);
    this.state = {
      data: this.props.search_data,
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
            <View style={styles.large_linechart_container}>
            <View style={styles.linechart_container}>
            <Chart
              style={{ height: wp('100%')/375*140, width: wp('100%')/375*255, backgroundColor: '#ffffff' }}
              xDomain={{ min: 0, max: 4 }}
              yDomain={{ min: 0, max: 100 }}
              padding={{ left: wp('100%')/375*20, top: wp('100%')/375*30, bottom: wp('100%')/375*10, right: wp('100%')/375*15 }}
            >
              <VerticalAxis tickValues={[50]} theme={{
                axis: {
                  visible: false,
                },
              }} />
              <HorizontalAxis tickCount={0} theme={{
                axis: {
                  visible: false,
                },
              }}/>
              <Line  data={data_linechart} smoothing="none" theme={{ 
                stroke: { color: '#8D7EB5', width: 5 }, 
                scatter: { default: { width: 15, height: 15, rx: 10, color: '#8D7EB5' },
                selected: { color: '#6A0888' } },
                dataPoint: {
                  visible: true,
                  color: "black",
                  radius: 3,
                  label: { visible: true, marginBottom: 25 }
                },
            
            }} 
            tooltipComponent={<Tooltip theme={{ formatter: ({ y }) => y.toFixed(0), }} />}
            onTooltipSelect={{ value: { x: 10, y: 10, }, index: 2}}
            
            initialTooltipIndex='4'
            />
              
            </Chart>
            <View style={styles.x_label_row_container}>
              <Text style={styles.x_label_text}>{data_date[0]}</Text>
              <Text style={styles.x_label_text}>{data_date[1]}</Text>
              <Text style={styles.x_label_text}>{data_date[2]}</Text>
              <Text style={styles.x_label_text}>{data_date[3]}</Text>
              <Text style={styles.x_label_text}>{data_date[4]}</Text>
            </View>

            </View>  

            <Image
              style={{ height: wp('100%')/375*170, width:wp('100%')/375*40, borderRadius: 10, marginLeft : 10,}}
              source={require('../image/buy_sell.png')}
            />                
            </View>
        </View>
      }
      </View>
      </View>
      
    );
  }
}

const Timer = ({ navigation }) => {

    return(
        <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
            <Text style={styles.subtitle}>Timing Score</Text>

            <Search_Bar_name search_data = {DATA}/> 
        </ScrollView>
        </SafeAreaView>
    );
};

export default Timer;