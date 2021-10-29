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
import Search_bar_similar from '../components/Search_bar_similar';
import { useNavigation } from '@react-navigation/core';
import Search_bar_similar2 from '../components/Search_bar_similar2';

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
    subtitle_2: {
      fontFamily: 'NotoSansKR_500Medium',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 18,
      marginLeft: 16,
      marginTop: 40,
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
        FlatList_item_text : {
          fontFamily: 'NotoSansKR_500Medium',
          includeFontPadding: false,
          //lineHeight: 20,
          fontSize: 12,
          marginTop : 10,
        },
        FlatList_container : {

          marginLeft : 16,
          marginTop : 20,
        },
        gray_bar : {
          width : wp('100%'),
          height : wp('100%')/375*8,
          backgroundColor : '#EEEEEE',
          marginTop : 40,
        }

      

});

const icon=() => {

    return (
      <Image  style={{
        height:14, width: 14,}}
        source={require('../image/arrow_under.png')}
      />
    );
  };

const FlatList_data = [

  {
    id : '1',
    name:"네이버",
    imageUrl:require('../image/similar_name_3.png'),
    index : '0',
  },
  {
    id : '2',
    name:"카카오뱅크",
    imageUrl:require('../image/similar_name_4.png'),
    index : '1',
  },
  {
    id : '3',
    name:"기아",
    imageUrl:require('../image/similar_name_3.png'),
    index : '2',
  },
  {
    id : '4',
    name:"애플",
    imageUrl:require('../image/similar_name_4.png'),
    index : '3',
  },
  {
    id : '5',
    name:"네이버",
    imageUrl:require('../image/similar_name_3.png'),
    index : '4',
  },
  {
    id : '6',
    name:"마지막",
    imageUrl:require('../image/similar_name_4.png'),
    index:'5',
  },
]



var select_name='1111111';


const FlatList_item = ({index,name, imageUrl, light_array}) =>{
  
  const navigation = useNavigation();
  const [count, setCount] = useState(0)
  const[color_change, setcolor_change] = useState({0:false, 1:false,2:false,3:false,4:false,5:false})
  useEffect(() => {
    //console.log({name});
    select_name ={name}.name
    //console.log({select_name});
    //console.log(index)
    //setcolor_change(color_change[index]=!color_change[index])
    
  },[count,navigation])

  function Navigate_func(){
    setCount(count + 1)
    console.log(index)
    //console.log(light_array)
    if(index==0){
      light_array_change=[true,false,false,false,false,false]
    }
    else if(index==1){
      light_array_change=[false,true,false,false,false,false]
    }
    else if(index==2){
      light_array_change=[false,false,true,false,false,false]
    }
    else if(index==3){
      light_array_change=[false,false,false,true,false,false]
    }
    else if(index==4){
      light_array_change=[false,false,false,false,true,false]
    }
    else if(index==5){
      light_array_change=[false,false,false,false,false,true]
    }
    navigation.navigate('SIMILAR', { send_name: {name}.name, light_array_send:light_array_change })
    //setcolor_change(color_change[index]='pick')
    //console.log(color_change)
    
  }
  return(
  <TouchableOpacity onPress= {() =>Navigate_func()}>
  <View style={{alignItems : 'center', justifyContent : 'center', marginRight : 20,}}>
  <Text>{console.log(light_array)}</Text>
   <Image
      style={{ height: wp('100%')/375*48, width: wp('100%')/375*48, borderWidth : 3, borderColor :light_array[index]?'red':'#EEEEEE'  }}
      source={imageUrl}
    />
    <Text style={styles.FlatList_item_text}>{name}</Text>
  </View>
  </TouchableOpacity>
  );
};

const Similar = ({navigation, route:{params}}) => {

     
    
    

      return (
        <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}} >

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

            <Search_bar_similar selected_name = {params.send_name}/>

            <View style={styles.gray_bar}/>

            <Text style={styles.subtitle_2}>상위 유사 종목</Text>

            <View style={styles.FlatList_container}>
            <FlatList horizontal={true} data={FlatList_data} renderItem={({item}) => (<FlatList_item name={item.name} imageUrl={item.imageUrl} index={item.index} light_array={params.light_array_send}/>)} keyExtractor={item=>item.id} />
            </View>

            <View style={styles.gray_bar}/>

            <Text style={styles.subtitle_2}>함께 분산투자하면 좋은 종목</Text>

            <View style={styles.FlatList_container}>
            <FlatList horizontal={true} data={FlatList_data} renderItem={({item}) => (<FlatList_item name={item.name} imageUrl={item.imageUrl} index={item.index} light_array={[false,false,false,false,false,false,false,false,]}/>)} keyExtractor={item=>item.id} />
            </View>

            <View style={styles.gray_bar}/>

            <Text style={styles.subtitle_2}>다른 종목과도 분석해보세요!</Text>

            <Search_bar_similar2 />
            <View style={styles.gray_bar}/>
            

        </ScrollView>
        </SafeAreaView>
      );

};

export default Similar;