import React,{Component, useLayoutEffect, useState, useEffect} from 'react';
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
import { useNavigation } from '@react-navigation/core';
import Search_bar_effect from '../components/Search_bar_effect';

const styles = StyleSheet.create({
  
    subtitle: {
      fontFamily: 'NotoSansKR_500Medium',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 18,
      marginLeft: 16,
      marginTop: 25,
    },
    container_1 : {
        marginHorizontal : 16,
        marginTop : 40,
        width : wp('100%')-32,
        height : wp('100%')/375*24,
        backgroundColor : '#E9E9E9',
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 10,
    },
    text_1 : {
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 12,
        
    },
    
    text_2 : {
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        lineHeight: 20,
        fontSize: 14,
        
    },

    

})


const FlatList_data = [

    {
      id : '1',
      name:"필라델피아 반도체 지수",
      index : '0',
    },
    {
      id : '2',
      name:"DRAM 가격 주별 평균값",
      index : '1',
    },
    {
      id : '3',
      name:"NAND FLASH 가격 주별 평균값",
      index : '2',
    },
    {
      id : '4',
      name:"DXI 지수 ( DRAM Exchange Index )",
      index : '3',
    },
    {
      id : '5',
      name:"삼성전자 분기별 순이익",
      index : '4',
    },
    
  ]
  
  const FlatList_item = ({index,name, light_array}) =>{
  
    const navigation = useNavigation();
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      //console.log({name});
      //select_name ={name}.name
      //console.log({select_name});
      //console.log(index)
      //setcolor_change(color_change[index]=!color_change[index])
      
    },[count,navigation])
  
    function Navigate_func(){
      setCount(count + 1)
      console.log(index)
      //
      if(index==0){
        light_array_change=[true,false,false,false,false]
      }
      else if(index==1){
        light_array_change=[false,true,false,false,false]
      }
      else if(index==2){
        light_array_change=[false,false,true,false,false]
      }
      else if(index==3){
        light_array_change=[false,false,false,true,false]
      }
      else if(index==4){
        light_array_change=[false,false,false,false,true]
      }
      console.log(light_array_change)
      navigation.navigate('EFFECT', { send_name: {name}.name, light_array_send:light_array_change })
      
      
    }
    return(
    <TouchableOpacity onPress= {() =>Navigate_func()}>
    <View style={{marginHorizontal : 16,
        marginBottom: 10,
        width : wp('100%')-32,
        height : wp('100%')/375*50,
        borderBottomWidth : 1,
        borderWidth : light_array[index]?1:0,
        borderBottomColor : light_array[index]?'#FB7070':'#E9E9E9',
        borderColor :light_array[index]?'#FB7070':'#EEEEEE',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 5,
        backgroundColor : light_array[index]?'#FBEFEF':'white',
        
        }}>
   
      <Text style={styles.text_2}>{name}</Text>
    </View>
    </TouchableOpacity>
    );
  };

const Effect = ({navigation, route:{params}}) => {

    return (
        <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff'}}>
            <Text style={styles.subtitle}>주가 영향 요인 분석</Text>
            <Text>{params.send_name}</Text>

            <Search_bar_effect/>

            <View style={styles.container_1}>
                <Text>영향 요인</Text>
            </View>

            
            <FlatList data={FlatList_data} renderItem={({item}) => (<FlatList_item name={item.name} index={item.index} light_array={params.light_array_send}/>)} keyExtractor={item=>item.id} />
        </ScrollView>
        </SafeAreaView>
    );
}

export default Effect;