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
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import PieChartScreen from '../components/PieChartScreen';
import PieChart from 'react-native-pie-chart';
import { VictoryPie } from "victory-native";

const width = Dimensions.get('window').width;

const Pf_options = ["단기", "중기", "장기"];

const styles = StyleSheet.create({

    subtitle: {
      fontFamily: 'NotoSansKR_500Medium',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 18,
      marginLeft: 16,
      marginTop: 25,
    },
    subtitle_1: {
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 18,
        marginRight : 5,
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
      edit_row_container : {
        flexDirection : 'row',
        marginLeft: 16,
        marginTop : 40,
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



const kkkk = {
    x: 10,
};


const Portfolio = ({ navigation }) => {


    const graphicColor= ['#95B6C0', '#EE9391', '#FAC6A3',]

    const graphicData= [
        { y: 67, x: '67%'},
        { y: 10, x: '10%'},
        { y: 23, x: '23%'},  
    ]

    const graphicData_name= {
        name_1: '삼성전자',
        name_2 : 'SK 하이닉스',
        name_3: 'LG 화학'
    }



    return(
    
    <SafeAreaView>
    <ScrollView style={{backgroundColor:'#ffffff',}}>

        <View style={styles.top_rowcontatiner}>
          <Image
            style={{height:wp('100%')/375*77 , width: wp('100%')/375*77, borderRadius : 10,}}
            source={require('../image/top_5.png')}
          />
          <View style={styles.top_container}>
            <View >
            <Text style={styles.top_text_1}>WARD Portfolio</Text>
            <Text style={styles.top_text_2}>ALL|ALL|딥러닝</Text>
            </View>

            <View style={styles.top_row_smallcontainer}>
              <Text style={styles.top_text_3}>분석 단위 설정</Text>
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
        </View>
        
        <View style={styles.edit_row_container}>
            <Text style={styles.subtitle_1}>내 포트폴리오</Text>
            <AntDesign 
                name="edit" 
                size={19} 
                color="black"
                />
        </View>
        
        <VictoryPie
            data={graphicData}
            width={300}
            height={300}
            innerRadius={0}
            colorScale = {graphicColor}
            
            style={{
            labels: {
            fill: 'gray', fontSize: 15, padding: 8, 
            
            }, }}
        /> 
      <Text>{graphicData_name.name_1} </Text>  
      <Image
            style={{height:wp('100%')/375*150,position:'absolute',marginTop:200, width: wp('100%')/375*150, borderRadius : 10,}}
            source={require('../image/donut.png')}
        />  

    </ScrollView>
    </SafeAreaView>

    );

};


export default Portfolio;