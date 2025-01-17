import React,{Component, useLayoutEffect, useState, useEffect} from 'react';
import { Button,StatusBar, useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import {images} from '../utils/images'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { DB } from '../utils/firebase';
import Constants from 'expo-constants';
import Home_1 from './Home_1';
import Home_2 from './Home_2';
import Home_3 from './Home_3';
import Home_4 from './Home_4';

const width = Dimensions.get('window').width;

const Container = styled.View`

  align-items: center;
  
`;

const Etc_Button_Container = styled.View`

  align-items: center;
  width: ${({width})=> width-32}px;
  
`;

const styles = StyleSheet.create({
  etc_content: {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize: 16,
    
    marginTop: 10,
    marginBottom: 10,

  },
  etc_button: {
    marginLeft: 16,
    marginRight: 16,
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  subtitle: {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 18,
    marginLeft: 16,
    marginTop: 40,
  },
  rowcontatiner: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width:wp('100%')-32,
    marginLeft:16,
    marginRight:16,
    marginTop:25,
    //backgroundColor: 'red',
  },
  smallcontatiner: {
    alignItems:'center',
    justifyContent:'space-between',
  },
  bigcontatiner: {
    alignItems:'center',
    width:wp('100%')-32,
    marginLeft:16,
    marginRight:16,
    height: (wp('100%')-32)/343*369+25,
    justifyContent: 'space-between',
    //backgroundColor: 'blue',
    
  },
  top10rowcontatiner: {
    flexDirection: 'row',
    //marginLeft:16,
    //marginTop:16,
  },
  top10smallcontainer: {
    marginRight:10,
   marginBottom: 50,
  },
  top10text_1:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    
    fontSize: 12,
    marginLeft: 4,
    marginTop: 7,
    
  },
  top10text_2:{
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    
    fontSize: 10,
    marginLeft: 4,
    marginTop: 3,
    
  },
  background : {
    backgroundColor : '#3A4057',
    width : wp('100%'),
    height : wp('95%')/375*508,
  },
  row_top_container : {
    flexDirection : 'row',
    width : wp('100%')-26,
    marginLeft : 36,
    marginTop : wp('100%')/375*29+(Platform.OS === 'ios' ? 0 : Constants.statusBarHeight),
    alignItems : 'center',
    //backgroundColor : 'red',
    //justifyContent : 'center',
  },

  row_top_text : {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize : 24,
    marginLeft : 12,
    
    lineHeight: 30,
    includeFontPadding: false,
    color : 'white',
  },

  top_icon : {
    marginLeft : 36,
    marginTop : 16,
    //backgroundColor : 'yellow',
    width : wp('100%')/375*28,
    height : wp('100%')/375*28,
  },

  explain_container : {
    position : 'absolute',
    marginTop : wp('100%')/375*117,
    marginLeft : wp('100%')/375*166,
    width : wp('100%')/375*174,
    //backgroundColor : 'yellow',
    alignItems : 'flex-end'
  },

  explain_text : {
    fontFamily: 'NotoSansKR_300Light',
    fontSize : 18,
    color : 'white',
    marginVertical : 5,
    lineHeight: 30,
    includeFontPadding: false,
  },

  explain_text2 : {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize : 24,
    color : 'white',
    marginVertical : 5,
    lineHeight: 30,
    includeFontPadding: false,
  },
  wrapper: {
    height : wp('100%')/375*518,
  },
  slide1: {
    width : wp('100%'),
    height : wp('100%')/375*518,
  },
  top10rowcontatiner: {
    flexDirection: 'row',
    marginLeft:16,
    marginTop:16,
  },

});

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};
const Item = ({item: {id, name, invest_term, used_data, algo_type, empty, screen_type}, onPress}) => {
  if (empty == true){
    return null;
  }
  const prefix = 'https://firebasestorage.googleapis.com/v0/b/ward-1-2bf63.appspot.com/o';
  let url_name = name.replace(/ /g, "");
  let img_url = `${prefix}/algorithm_profile%2F${url_name}.png?alt=media`;
  //console.log(name);
  return(
    <View style={styles.top10smallcontainer}>
          <TouchableOpacity onPress= {()=> onPress({screen_type, id, name, algo_type, invest_term, used_data})}>
            <Image
              style={{height:wp('100%')/375*96 , width: wp('100%')/375*96, borderRadius : 10,}}
              source= {{uri: img_url}} />
            <Text style={styles.top10text_1}>{name}</Text>
            <Text style={styles.top10text_2}>{invest_term}|{used_data}|{algo_type}</Text>
            </TouchableOpacity>
          </View>
  );
};
const Home = ({ navigation,route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTintColor: 'black',
      
      headerRight: ({ tintColor }) => (
        
        <Ionicons
          name="search"
          size={25}
          style={{ marginRight: 20 }}
          color='gray'
          onPress= {() => navigation.navigate('Search')}
        />
      ),
    });
  }, []);

  const algo_category = ['tier_system', 'timing_algo', 'portfolio_algo', 'etc_algo'];
  const [algo_info, setAlgo_info] = useState([]);
  let list =[];
  
  useEffect(()=> {
    const unsubscribe = DB.collection(algo_category[0])
      .orderBy('views', 'desc')//
      .onSnapshot(snapshot =>{ snapshot.forEach(doc=>{
          let obj = doc.data(); obj["id"] = doc.id; obj["screen_type"]=0; list.push(obj); 
        });     
      DB.collection(algo_category[1])
      .orderBy('views', 'desc')//
      .onSnapshot(snapshot =>{ snapshot.forEach(doc=>{
          let obj = doc.data(); obj["id"] = doc.id; obj["screen_type"]=1;list.push(obj); 
          });
          DB.collection(algo_category[2])
          .orderBy('views', 'desc')//
          .onSnapshot(snapshot =>{ snapshot.forEach(doc=>{
            let obj = doc.data(); obj["id"] = doc.id; obj["screen_type"]=2; list.push(obj); 
            });
            DB.collection(algo_category[3])
            .orderBy('views', 'desc')//
            .onSnapshot(snapshot =>{ snapshot.forEach(doc=>{
              let obj = doc.data(); obj["id"] = doc.id; obj["screen_type"]=3; list.push(obj); 
              });
            list.sort((a, b) => (a.views <= b.views) ? 1 : -1)
            list = list.slice(0, 10)
            setAlgo_info(list)
            });
          });
        });
      });
      return ()=> unsubscribe();
  }, []);

  const handleItemPress = params => {
    //console.log(params.screen_type, "sdfs");
    const screen = ["ALGORITHM", "TIMER", "PORTFOLIO"];
    navigation.navigate(screen[params.screen_type], params);
  };

  return (
      
        <SafeAreaView style={{ flex:0, backgroundColor: '#3A4057' }}>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
        
        
        <View style={styles.background}>
          <View style={styles.row_top_container}>
            <TouchableOpacity>
              <Ionicons name="options-outline" size={wp('100%')/375*28} color="white" />
            </TouchableOpacity>
            <Text style={styles.row_top_text}>종목 티어 시스템</Text>
          </View>

          <TouchableOpacity onPress= {() => navigation.navigate('HOME_2')}>
            <MaterialCommunityIcons name="clock-time-four-outline" size={wp('100%')/375*28} color="gray" style={styles.top_icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => navigation.navigate('HOME_3')}>
            <MaterialCommunityIcons name="file-find" size={wp('100%')/375*28} color="gray" style={styles.top_icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => navigation.navigate('HOME_4')}>
            <Ionicons name="analytics-outline" size={wp('100%')/375*28} color="gray" style={styles.top_icon}/>
          </TouchableOpacity>

          <Image  style={{
            height:wp('100%')/375*102, width: wp('100%')/375*188, marginTop : Platform.OS === 'ios' ? 145 : 125, marginLeft : 36,}}
            source={require('../image/home_tab_1.png')}
          />

          <View style={styles.explain_container}>
            <Text style={styles.explain_text}>와드는</Text>
            <Text style={styles.explain_text}>지금 당장</Text>
            <Text style={styles.explain_text}>투자하기 좋은</Text>
              <View style={{flexDirection : 'row', alignItems : 'center'}}>
                <Text style={styles.explain_text2}>종목군</Text> 
                <Text style={styles.explain_text}> 을 추천합니다.</Text>
              </View>
          </View>

        </View>
        
        <Text style={styles.subtitle}>인기 TOP 10 </Text>
        
        <ScrollView horizontal={true} style={styles.top10rowcontatiner}>
        <FlatList
          //horizontal
          keyExtractor={item => item['id']}
          data = {formatData(algo_info, 10)}
          renderItem = {({item}) => (
            <Item item = {item} onPress={handleItemPress}/>
          )}
          numColumns = {10}
          />
          </ScrollView>

        

      </ScrollView> 
      </SafeAreaView>
      
      
      
    );
        
  };
  
  export default Home;
