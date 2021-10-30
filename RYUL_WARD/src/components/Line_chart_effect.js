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

import { Chart, VerticalAxis, HorizontalAxis, Line, Tooltip, Area } from 'react-native-responsive-linechart'

const styles = StyleSheet.create({

    chart_container : {
        height: wp('100%')/375*190, 
        width: wp('100%')-32, 
        backgroundColor: '#ffffff',
        marginHorizontal : 16,
    }
})

const data_1 = [
    { x: 0, y: 30 },
    { x: 1, y: 45 },
    { x: 2, y: 55 },
    { x: 3, y: 0 },
    { x: 4, y: 100 },
    { x: 5, y: 60 },
    { x: 6, y: 45 },
    { x: 7, y: 55 },
    { x: 8, y: 0 },
    { x: 9, y: 20 },
  ]
  const data_2 = [
    { x: 0, y: 40 },
    { x: 1, y: 95 },
    { x: 2, y: 75 },
    { x: 3, y: 10 },
    { x: 4, y: 50 },
    { x: 5, y: 40 },
    { x: 6, y: 95 },
    { x: 7, y: 75 },
    { x: 8, y: 10 },
    { x: 9, y: 50 },
  ]
  let data_1_mean=0;
  let sum_1=0;
  for (let i=0; i<data_1.length; i++){
    sum_1+=data_1[i].y;
  }
  data_1_mean = sum_1/data_1.length;

  let data_2_mean=0;
  let sum_2=0;
  for (let i=0; i<data_2.length; i++){
    sum_2+=data_2[i].y;
  }
  data_2_mean = sum_2/data_2.length;

  let delta = data_2_mean- data_1_mean;
  if(delta>=0){
    for (let i=0; i<data_1.length; i++){
      data_1[i].y+=delta;
    }
  }

  else{
    for (let i=0; i<data_2.length; i++){
      data_2[i].y+=(-delta);
    }
  }

  let data_1_max= 0;
  for (let i=0; i<data_1.length; i++){
    if(data_1[i].y>data_1_max){
      data_1_max = data_1[i].y
    }

  }

  let data_2_max= 0;
  for (let i=0; i<data_2.length; i++){
    if(data_2[i].y>data_2_max){
      data_2_max = data_2[i].y
    }

  }

  let data_1_min= 999999999999999;
  for (let i=0; i<data_1.length; i++){
    if(data_1[i].y<data_1_min){
      data_1_min = data_1[i].y
    }

  }

  let data_2_min= 999999999999999;
  for (let i=0; i<data_2.length; i++){
    if(data_2[i].y<data_2_min){
      data_2_min= data_2[i].y
    }

  }


  let data_total_max = 0;
  if(data_1_max >= data_2_max) data_total_max = data_1_max;
  else data_total_max = data_2_max;

  let data_total_min = 0;
  if(data_1_min >= data_2_min) data_total_min = data_2_min;
  else data_total_min = data_1_min;

  let data_total_length = data_1.length;

  




const Line_chart_effect = () => {

    return (
        <View>
            
            <Chart
              style={styles.chart_container}
              xDomain={{ min: 0, max: data_total_length-1 }}
              yDomain={{ min: data_total_min-20, max: data_total_max+20 }}
              
            >
            
              <VerticalAxis tickValues={[data_total_max+20]} theme={{
                axis: {
                  visible: false,
                },
              }} />
              <HorizontalAxis tickCount={data_total_length} theme={{
                axis: {
                  visible: true,
                },
                labels : {
                    visible : false,
                }
              }}/>
            <Area  data={data_1} smoothing="none" theme={{ 
                gradient: { from : { color: '#5B73AD', opacity: 1}, to : { color: '#6278AE' , opacity: 0 }} 
            
            }} 
            
            />
            <Line  data={data_2} smoothing="none" theme={{ 
                stroke: { color: '#FB7070', width: 2 }, 
                scatter: { default: { width: 9, height: 9, rx: 10, color: '#FB7070' },
                 },
                
            }}
            
            />
            
              
            </Chart>
        </View>
    );
};

export default Line_chart_effect;