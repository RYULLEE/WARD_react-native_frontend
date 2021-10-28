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
import SelectDropdown from 'react-native-select-dropdown';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import Plotly from 'react-native-plotly';

const Al_options = ["단기", "중기", "장기"];

const icon=() => {
  return (
    <Image  style={{
      height:14, width: 14,}}
      source={require('../image/arrow_under.png')}
    />
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 18,
    marginLeft: 16,
    marginTop: 40,
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
  chart_container : {
    height:wp('100%')/375*180,
    //width: 200,
    backgroundColor:'red',
    //alignItems:'center',
    //justifyContent:'center',
    marginTop: -10,
  },
  scroll_container:{
    height:wp('100%')/375*180+40,
    
  },
  hide_box1 : {
    height: 21,
    width: wp('100%'),
    backgroundColor: '#ffffff',
    position: 'absolute',
    //opacity:0.5,
  },
  hide_box2 : {
    height: wp('100%')/375*180-21,
    width: wp('100%'),
    marginTop:21,
    backgroundColor: 'blue',
    position: 'absolute',
    opacity:0,
  },
  row_explain_container : {
    flexDirection:'row',
    marginLeft: 16,
    marginTop: 15,
    alignItems:'center',
  },
  explain_text1:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 12,
    color: '#E99314',
    marginLeft: 5,
    marginRight: 19,
  },
  explain_text2:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 12,
    color: '#999999',
    marginLeft: 5,
  },
  row_tier_container:{
    flexDirection: 'row',
    marginLeft:16,
    marginTop: 23,
    alignItems:'center',
    marginRight:28,
    justifyContent: 'space-between'
  },
  tier_component_container : {
    justifyContent:'flex-start',
    alignItems: 'center',
  },
  tier_component_text : {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 12,
    marginTop: 8,
    maxWidth: 70, 
    textAlign: "center"
  },
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


const layout = { 
  height:wp('100%')/375*250,
  l: 0, r: 0, b: 0, t: 0, pad: 0,
  margin:{
    l: 0,
      r: 0,
      t: 40,
      d: 0,
  },
  polar: {
    radialaxis: { 
      visible: true, 
      range: [0, 100],
      showticklabels: false,  
      showline: false,
      ticklen: 0,
    },
    angularaxis: { 
      rotation: 210, 
      ticklen: 0,
      tickfont: { 
        color: '#000000',
        size: 13,
        fontFamily: 'NotoSansKR_500Medium',
      },
    },

  },
  showlegend: false,
  autosize: true,
  staticPlot: true,
  xaxis: {
    uirevision: 'time',
 },
 yaxis: {
    uirevision: 'time',
 },
  
};


const data_date =['9/30' , '10/1', '10/4', '10/5', '10/6']

const show_name=false;

class Search_Bar_name extends React.Component {
  constructor(props) {
    /*console.log(props.search_data);*/
    super(props);
    this.state = {
      data: this.props.search_data,
      placeHolderText: '종목명 또는 종목 코드 검색',
      selectedText: '',
      selectedCode: '',
      selectedImage: '',
      selectedMarket: '',
      selectedCorrect: '',
      defaultValue: true,
      select: '',
      value: '',
      selectedData: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 }
      ],
    };
  }
  
  selectedValue(index, item) {
    console.log(item);
    let code = "" + item.code;
    let length = code.length;
    for(let i=0 ; i<6-length ; i++) {
      code = '0'+ code
      //console.log(code)
    }

    const Ref = DB.collection('timing_algo')
      .doc("B9jtzROQQEEDb66jQsOX")
      .collection('score_info')
      .doc(code);
    //console.log(code)

    const doc = Ref.onSnapshot(doc =>{
      let Data = [];
      let obj = doc.data()
      //console.log(obj["data"]);
      for(let i = 0; i<5; i++){
        Data.push({x:i, y:obj["data"][i]})
      }
      this.setState({selectedData: Data, selectedCorrect: obj["correct"]})
      /*console.log(Data);*/
    });
    
    const prefix = 'https://firebasestorage.googleapis.com/v0/b/ward-1-2bf63.appspot.com/o';
    let img_url = `${prefix}/stock_image%2F${code}.png?alt=media`;
    
    this.setState({selectedText: item.name, selectedCode: code, selectedImage: img_url, selectedMarket: item.market});//, selectedData: Data
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
                    source= {{uri: this.state.selectedImage}}
          />
          <View style={styles.name_row_inside_conatiner_1}>
            <Text style={styles.name_text}>{this.state.selectedText}</Text>
            <Text style={styles.name_sub_text}>{this.state.selectedCode}|{this.state.selectedMarket}</Text>
          </View>
          </View>
          <View style={styles.name_row_inside_conatiner_2}>
            <View style={{flexDirection:'row',alignItems : 'center', justifyContent : 'center',}}>
              <Text style={styles.right_text_1}>적중률</Text>
              <Text style={styles.right_text_2}>{this.state.selectedCorrect}%</Text>
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
              <Line  data={this.state.selectedData} smoothing="none" theme={{ 
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

const Timer = ({ navigation, route:{params}}) => {
  let data = [
    {
    type: 'scatterpolar',   r: [10, 10, 10, 10],   theta: ['적중률','수익률','정밀도','적중률'], 
    fill: 'toself',   name: 'WARD',  line: {    color: '#E99314',  },
    },
    {
      type: 'scatterpolar',     r: [10, 10, 10,10],     theta: ['적중률','수익률','정밀도','적중률'], 
      fill: 'toself',     name: '시장 평균',     line: {      color: 'gray',    },
      }
  ];
  const [score_info_1, setScore_info_1] = useState([]);
  const [score_info_3, setScore_info_3] = useState([]);
  const [score_info_6, setScore_info_6] = useState([]);
  const [score_info_12, setScore_info_12] = useState([]);
  const Radar_chart_1 = () => {
    score_info_1.push(score_info_1[0]);
    data[0]["r"] = score_info_1;
      return(
        <View style={styles.chart_container} >
        <Plotly  data={data} layout={layout} debug enableFullPlotly />
        <View style={styles.hide_box1}/>
        <View style={styles.hide_box2}/>
      </View>
      );
  };
  const Radar_chart_3 = () => {
    score_info_3.push(score_info_3[0]);
    data[0]["r"] = score_info_3;
    return(
      <View style={styles.chart_container} >
      <Plotly  data={data} layout={layout} debug enableFullPlotly />
      <View style={styles.hide_box1}/>
      <View style={styles.hide_box2}/>
    </View>
    );
};
const Radar_chart_6 = () => {
  score_info_6.push(score_info_6[0]);
  data[0]["r"] = score_info_6;
  return(
    <View style={styles.chart_container} >
    <Plotly  data={data} layout={layout} debug enableFullPlotly />
    <View style={styles.hide_box1}/>
    <View style={styles.hide_box2}/>
  </View>
  );
};
const Radar_chart_12 = () => {
  score_info_12.push(score_info_12[0]);
  data[0]["r"] = score_info_12;
  return(
    <View style={styles.chart_container} >
    <Plotly  data={data} layout={layout} debug enableFullPlotly />
    <View style={styles.hide_box1}/>
    <View style={styles.hide_box2}/>
  </View>
  );
};
  const prefix = 'https://firebasestorage.googleapis.com/v0/b/ward-1-2bf63.appspot.com/o';
  let url_name = params.name.replace(/ /g, "");
  let img_url = `${prefix}/algorithm_profile%2F${url_name}.png?alt=media`;

  return(
    <SafeAreaView>
    <ScrollView style={{backgroundColor:'#ffffff'}}>

    <View style={styles.top_rowcontatiner}>
      <Image
        style={{height:wp('100%')/375*77 , width: wp('100%')/375*77, borderRadius : 10,}}
        source= {{uri: img_url}}
      />
      <View style={styles.top_container}>
        <View >
        <Text style={styles.top_text_1}>{params.name}</Text>
        <Text style={styles.top_text_2}>{params.invest_term} | {params.used_data} | {params.algo_type}</Text>
        </View>

        <View style={styles.top_row_smallcontainer}>
          <Text style={styles.top_text_3}>투자 기간 설정</Text>
          <SelectDropdown
            data={Al_options}
            onSelect={(selectedItem, index) => {
              setInvest_info(index)
              console.log(invest_info, selectedItem, index)
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
    <Text style={styles.subtitle}>알고리즘 스코어</Text>
        <View style={styles.row_explain_container}>
        <Image
            style={{height:wp('100%')/375*11 , width: wp('100%')/375*11,}}
            source={require('../image/score_box_1.png')}
          />
        <Text style={styles.explain_text1}>WARD Tier System</Text>
        <Image
            style={{height:wp('100%')/375*11 , width: wp('100%')/375*11,}}
            source={require('../image/score_box_2.png')}
          />
        <Text style={styles.explain_text2}>시장 평균</Text>
        </View>

        <View style={styles.scroll_container}>
        <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
            tabBarTextStyle={styles.tabBarTextStyle}
          >
            <Radar_chart_1 tabLabel={'최근 1개월'} />
            <Radar_chart_3 tabLabel={'최근 3개월'} />
            <Radar_chart_6 tabLabel={'최근 6개월'} />
            <Radar_chart_12 tabLabel={'최근 12개월'} />

        </ScrollableTabView>
        </View>
            <Text style={styles.subtitle}>Timing Score</Text>

            <Search_Bar_name search_data = {DATA}/> 

        </ScrollView>
        </SafeAreaView>
    );
};

export default Timer;