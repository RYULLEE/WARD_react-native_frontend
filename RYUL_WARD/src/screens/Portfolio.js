import React,{Component, useState, useEffect,} from 'react';
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
import Pie_header from '../components/Pie_header';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
import Search_Bar from '../components/SearchBar';


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
      row_scroll_container : {
        marginLeft : 16,
        //backgroundColor: 'red',
        //marginTop: 25,
        position: 'absolute',
      }, 
      pie_container : {
        //backgroundColor : 'green',
        alignItems: 'center',
      },
      pie_container_large : {
        marginTop : 25,
      },
      margin_container_1 : {
        height : wp('100%')/375*8,
        //marginLeft: 16,
        //marginRight : 16,
        width : wp('100%'),
        backgroundColor : '#F3F4F6',
      },
      bottom_row_container : {
        //marginLeft : 16,
        //marginRight : 16,
        flexDirection : 'row',
        backgroundColor : '#F3F4F6',
        justifyContent : 'space-between',
      },
      bottom_container : {
        width : wp('100%')/375*367/2,
        marginTop : wp('100%')/375*8,
        marginBottom : wp('100%')/375*8,
        backgroundColor : '#ffffff'

      },
      pie_center_text : {
        position : 'absolute',
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        //lineHeight: 20,
        fontSize: wp('100%')/375*22,
        marginTop : wp('100%')/375*80,
      },
      edit_text_title : {
        fontFamily: 'NotoSansKR_500Medium',
        includeFontPadding: false,
        color : 'white',
        fontSize: 18,
        marginTop : 100,
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


function Edit_portfolio() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.edit_row_container}>
            <Text style={styles.subtitle_1}>내 포트폴리오</Text>
            <AntDesign 
                name="edit" 
                size={19} 
                color="black"
                onPress={toggleModal}
                />
               <Modal isVisible={isModalVisible}>
        <SafeAreaView style={{flex:1}}>
          <Text style={styles.edit_text_title}>매수 종목 추가</Text>
          <TextInput 
            backgroundColor ='white'
          />
          <Text style={styles.edit_text_title}>매도 종목 삭제</Text>
          <TextInput 
            backgroundColor ='white'
          />

          <Button title="close" onPress={toggleModal} />
        </SafeAreaView>
      </Modal>
    </View>
    

     
  );
};


const Portfolio = ({ navigation }) => {


    const graphicColor= ['#95B6C0', '#EE9391', '#FAC6A3',]

    const graphicColor_bottom_1= ['#FFBF00', '#DDDDDD',]

    const graphicColor_bottom_2= ['#2E9AFE', '#DDDDDD',]

    const graphicData= [
        { y: 67, x: '67%'},
        { y: 10, x: '10%'},
        { y: 23, x: '23%'},  
    ]

    const graphicData_bottom_1= [
      { y: 25, x: '25%'},
      { y: 75, x: '75%'},  
    ]

    const graphicData_bottom_2= [
      { y: 75, x: '75%'},
      { y: 25, x: '25%'},  
    ]

    const [headers, setHeaders] = useState({
      '1' : {id:'1', name_input : '삼성전자', color_input : '#95B6C0'},
      '2' : {id:'2', name_input : 'SK 하이닉스', color_input : '#EE9391'},
      '3' : {id:'3', name_input : 'LG 화학', color_input : '#FAC6A3'},
      '4' : {id:'4', name_input : '삼성전자', color_input : '#95B6C0'},
      '5' : {id:'5', name_input : 'SK 하이닉스', color_input : '#EE9391'},
      '6' : {id:'6', name_input : 'LG 화학', color_input : '#FAC6A3'},

    })


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
        <Edit_portfolio/>
        
        <View style={styles.pie_container_large}>
        <View style={styles.pie_container}>
          <VictoryPie
              data={graphicData}
              width={wp('100%')/375*300}
              height={wp('100%')/375*300}
              innerRadius={0}
              colorScale = {graphicColor}
              
              style={{
                labels: {
                fill: 'gray', fontSize: 15, padding: 8, 
                
                }, 
                
              }}
          /> 
          <Image
            style={{height:wp('100%')/375*188 , width: wp('100%')/375*188,  position:'absolute', marginTop:wp('100%')/375*56 ,borderRadius : 10,}}
            source={require('../image/donut.png')}
          />
        </View>
        <ScrollView horizontal={true} style={styles.row_scroll_container}>
          {Object.values(headers)
          .map(item => (
            <Pie_header key={item.id} name_input={item.name_input} color_input={item.color_input}/>
          ))
          }
        </ScrollView>
        
        </View>

        <View style={styles.bottom_row_container}>
          <View style={styles.bottom_container}>
            <Text style={styles.subtitle}>분산 투자 유효성</Text>

            <View style={styles.pie_container}>
              <VictoryPie
                data={graphicData_bottom_1}
                width={wp('100%')/375*200}
                height={wp('100%')/375*200}
                innerRadius={wp('100%')/375*35}
                colorScale = {graphicColor_bottom_1}
              
                  style={{
                    labels: {
                    fill: 'white', fontSize: -100000, padding: 8, 
                    }, 
                    
                  }}
              /> 
              <Text style={styles.pie_center_text}>25%</Text> 
          </View>


          </View>
          <View style={styles.bottom_container}>
          <Text style={styles.subtitle}>투자 안정성</Text>

          <View style={styles.pie_container}>
              <VictoryPie
                data={graphicData_bottom_2}
                width={wp('100%')/375*200}
                height={wp('100%')/375*200}
                innerRadius={wp('100%')/375*35}
                colorScale = {graphicColor_bottom_2}
              
                  style={{
                    labels: {
                     fontSize: -100000,  
                    }, 
                    
                  }}
              /> 
              <Text style={styles.pie_center_text}>75%</Text>
          </View>
          </View>

        </View>

    </ScrollView>
    </SafeAreaView>

    );

};


export default Portfolio;