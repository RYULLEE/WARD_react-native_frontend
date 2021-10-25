import React,{Component, useState, useEffect} from 'react';
import {  Image, View, Text, SafeAreaView, StyleSheet, FlatList, } from 'react-native';
import {  ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import SelectDropdown from 'react-native-select-dropdown';
import Plotly from 'react-native-plotly';
import { DB } from '../utils/firebase';

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
 
});

const Al_options = ["단기", "중기", "장기"];

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

const icon=() => {
  return (
    <Image  style={{
      height:14, width: 14,}}
      source={require('../image/arrow_under.png')}
    />
  );
};


const Item = ({item, color}) => {
  const prefix = 'https://firebasestorage.googleapis.com/v0/b/ward-1-2bf63.appspot.com/o';
  //console.log(color);
  let stock_num = item;
  let img_url = `${prefix}/stock_image%2F${stock_num}.png?alt=media`;
  const [stock_name, setStock_name] = useState([]);
  useEffect(()=> {
    const unsubscribe = DB.collection('Market_info')
      .where("단축코드", "==", stock_num)
      .onSnapshot(snapshot =>{
        const list =[];
        snapshot.forEach(doc=>{
          let obj = doc.data();
          obj["id"] = doc.id;
          list.push(obj);
          console.log(list[0]["한글 종목약명"]);
        });
        setStock_name(list[0]["한글 종목약명"]);
      });
        return ()=> unsubscribe();
  }, [item]);

  //console.log(img_url)
  return(
    <View style={styles.tier_component_container}>
            <Image
              style={{height:wp('100%')/375*48 , width: wp('100%')/375*48,
              borderWidth: 3, 
              borderColor: color,
              marginHorizontal: 12}}
              source={{uri: img_url}}
              
            />
            <Text style={styles.tier_component_text}>{stock_name}</Text>
          </View>
  );
};

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
}

const Algorithm = ({ route:{params}}) => {
  console.log(params);
  const [stock_info_1, setStock_info_1] = useState([]);
  const [stock_info_2, setStock_info_2] = useState([]);
  const [stock_info_3, setStock_info_3] = useState([]);
  const [score_info_1, setScore_info_1] = useState([]);
  const [score_info_3, setScore_info_3] = useState([]);
  const [score_info_6, setScore_info_6] = useState([]);
  const [score_info_12, setScore_info_12] = useState([]);
  
  const category = {0:'data_short', 1: 'data_medium', 2:'data_long'};
  const [invest_info, setInvest_info] = useState(0);
  
  useEffect(()=> {
    console.log("refresh")
    const unsubscribe = DB.collection('tier_system')
      .doc(params.id)
      .collection(category[invest_info])
      .onSnapshot(snapshot => {
        const list = [];
        snapshot.forEach(doc => {
            list.push(doc.data());
            //console.log(list[0]["tier_list"]["1st"]);
        });      
        setStock_info_1(list[0]["tier_list"]["1st"]);
        setStock_info_2(list[0]["tier_list"]["2nd"]);
        setStock_info_3(list[0]["tier_list"]["3rd"]);

        setScore_info_1(list[0]["score_list"]["1개월"]);
        setScore_info_3(list[0]["score_list"]["3개월"]);
        setScore_info_6(list[0]["score_list"]["6개월"]);
        setScore_info_12(list[0]["score_list"]["12개월"]);
      });

      return () => unsubscribe();
  }, [invest_info]);
  
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
               
        <Text style={styles.subtitle}>종목 티어 표</Text>
        <View style={styles.row_tier_container}>
          <Image
            style={{height:wp('100%')/375*29 , width: wp('100%')/375*23, marginRight: (wp('100%')-360)/2}}
            source={require('../image/tier_label_1.png')}
          />
          <FlatList 
            keyExtractor={item => item['id']}
            data = {formatData(stock_info_1, 4)}
            renderItem = {({item}) => (
              <Item item = {item} color = {"#F08683"}/>
            )}
            numColumns = {4}
            />
        </View>

        <View style={styles.row_tier_container}>
          <Image
            style={{height:wp('100%')/375*29 , width: wp('100%')/375*23, marginRight: (wp('100%')-360)/2}}
            source={require('../image/tier_label_2.png')}
          />
          <FlatList 
            keyExtractor={item => item['id']}
            data = {formatData(stock_info_2, 4)}
            renderItem = {({item}) => (
              <Item item = {item } color = {"#F6C189"}/>
            )}
            numColumns = {4}
            />
        </View>

        <View style={styles.row_tier_container} marginBottom = {40}>
          <Image
            style={{height:wp('100%')/375*29 , width: wp('100%')/375*23, marginRight: (wp('100%')-360)/2}}
            source={require('../image/tier_label_3.png')}
          />
          <FlatList 
            keyExtractor={item => item['id']}
            data = {formatData(stock_info_3, 4)}
            renderItem = {({item}) => (
              <Item item = {item} color = {"#69C356"}/>
            )}
            numColumns = {4}
            
            />
        </View>

        
        </ScrollView>
    </SafeAreaView>
  );
};

export default Algorithm;