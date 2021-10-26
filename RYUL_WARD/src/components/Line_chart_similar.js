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
    { x: 0, y: 70 },
    { x: 1, y: 45 },
    { x: 2, y: 55 },
    { x: 3, y: 0 },
    { x: 4, y: 100 },
    { x: 5, y: 60 },
    { x: 6, y: 45 },
    { x: 7, y: 55 },
    { x: 8, y: 0 },
    { x: 9, y: 100 },
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

const Line_chart_similar = () => {

    return (
        <View>
            <Text>11</Text>
            <Chart
              style={styles.chart_container}
              xDomain={{ min: 0, max: 9 }}
              yDomain={{ min: 0, max: 100 }}
              
            >
            
              <VerticalAxis tickValues={[]} theme={{
                axis: {
                  visible: false,
                },
              }} />
              <HorizontalAxis tickCount={0} theme={{
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
            <Area  data={data_2} smoothing="none" theme={{ 
                gradient: { from : { color: '#FD7D7D', opacity: 1}, to : { color: '#F78484' , opacity: 0 }} 
            
            }} 
            
            />
            
              
            </Chart>
        </View>
    );
};

export default Line_chart_similar;