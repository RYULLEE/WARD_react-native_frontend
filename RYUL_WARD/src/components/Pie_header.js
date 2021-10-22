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
import { Ionicons } from '@expo/vector-icons'; 


const styles = StyleSheet.create({

    subtitle: {
      fontFamily: 'NotoSansKR_400Regular',
      includeFontPadding: false,
      //lineHeight: 20,
      fontSize: 14,
      marginLeft: 5,
      marginBottom : 3,
      marginRight : 15,
    },
    row_container : {
      flexDirection : 'row',
      alignItems : 'center',
      //backgroundColor : 'red',
    },
});




const Pie_header= ({name_input, color_input}) => {


    return(
        <View style={styles.row_container}>
            <Ionicons name="square" size={24} color={color_input} />
            <Text style={styles.subtitle}>{name_input}</Text>
        </View>
    );
};

export default Pie_header;