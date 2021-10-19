import React,{Component, useLayoutEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
//import TabViewExample from '../navigations/home_slide_tab';
//import ScrollableTabView,{ ScrollableTabBar }  from 'react-native-scrollable-tab-view';
//import { render } from 'react-router-dom';
//import Tabs from '../navigations/home_slide_tab';
//import { TabView, SceneMap } from 'react-native-tab-view';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


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
            <TouchableOpacity>
            <Image
              style={{height:wp('100%')/375*106 , width: wp('100%')/375*109, borderRadius : 10,}}
              source={require('../image/category_2.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
              style={{height:wp('100%')/375*106 , width: wp('100%')/375*109, borderRadius : 10,}}
              source={require('../image/category_3.png')}
            />
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity>
        <Image
              style={{height:(wp('100%')-32)/343*125 , width: wp('100%')-32, borderRadius : 10,marginTop:16,}}
              source={require('../image/category_4.png')}
        />
        </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>인기 TOP 10 </Text>

        <ScrollView horizontal={true} style={styles.top10rowcontatiner}>
          <View style={styles.top10smallcontainer}>
          <TouchableOpacity  onPress= {() => navigation.navigate('ALGORITHM')}>
            <Image
              style={{height:wp('100%')/375*96 , width: wp('100%')/375*96, borderRadius : 10,}}
              source={require('../image/top_1.png')}
            />
          </TouchableOpacity>
            <Text style={styles.top10text_1}>WARD Timer</Text>
            <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
          </View>

          <View style={styles.top10smallcontainer}>
          <TouchableOpacity>
            <Image
              style={{height:wp('100%')/375*96 , width: wp('100%')/375*96, borderRadius : 10,}}
              source={require('../image/top_2.png')}
            />
            </TouchableOpacity>
            <Text style={styles.top10text_1}>WARD Timer</Text>
            <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
          </View>

          <View style={styles.top10smallcontainer}>
          <TouchableOpacity>
            <Image
              style={{height:wp('100%')/375*96 , width: wp('100%')/375*96, borderRadius : 10,}}
              source={require('../image/top_3.png')}
            />
            </TouchableOpacity>
            <Text style={styles.top10text_1}>WARD Timer</Text>
            <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
          </View>

          <View style={styles.top10smallcontainer}>
          <TouchableOpacity>
            <Image
              style={{height:wp('100%')/375*96 , width: wp('100%')/375*96, borderRadius : 10,}}
              source={require('../image/top_4.png')}
            />
            </TouchableOpacity>
            <Text style={styles.top10text_1}>WARD Timer</Text>
            <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
          </View>

          <View style={styles.top10smallcontainer}>
          <TouchableOpacity>
            <Image
              style={{height:wp('100%')/375*96 , width: wp('100%')/375*96, borderRadius : 10,}}
              source={require('../image/top_5.png')}
            />
            </TouchableOpacity>
            <Text style={styles.top10text_1}>WARD Timer</Text>
            <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
          </View>

        </ScrollView>

      </ScrollView>
      </SafeAreaView>
    );
  };

  export default Category;