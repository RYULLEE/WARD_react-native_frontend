import React,{Component, useLayoutEffect, useEffect, useState} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { DB } from '../utils/firebase';
import {images} from '../utils/images'


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const StyledText = styled.Text`
  font-size: 30px;
  
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
    marginLeft:16,
    marginTop:16,
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
});

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

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const Category = ({navigation, route}) => {
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

  //console.log(algo_info);

    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
        <View style={styles.bigcontatiner}>
        <View style={styles.rowcontatiner}>
          <TouchableOpacity onPress= {() => navigation.navigate('TIER SYSTEM')}>
          <Image
              style={{height:wp('100%')/375*228 , width: wp('100%')/375*218, borderRadius : 10,}}
              source={require('../image/category_1.png')}
          />
          </TouchableOpacity>
          <View style={styles.smallcontatiner}>
            <TouchableOpacity onPress= {() => navigation.navigate('Category_Portfolio')}>
            <Image
              style={{height:wp('100%')/375*106 , width: wp('100%')/375*109, borderRadius : 10,}}
              source={require('../image/category_2.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress= {() => navigation.navigate('Category_Etc')}>
            <Image
              style={{height:wp('100%')/375*106 , width: wp('100%')/375*109, borderRadius : 10,}}
              source={require('../image/category_3.png')}
            />
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity onPress= {() => navigation.navigate('Category_Timing')}>
        <Image
              style={{height:(wp('100%')-32)/343*125 , width: wp('100%')-32, borderRadius : 10,marginTop:16,}}
              source={require('../image/category_4.png')}
        />
        </TouchableOpacity>
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

  export default Category;