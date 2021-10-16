import React,{Component,useState} from 'react';
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
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import SelectDropdown from 'react-native-select-dropdown';
//import page_1 from '../components/tier_component';
import { useNavigation } from '@react-navigation/native';



const width = Dimensions.get('window').width;


const Container = styled.SafeAreaView`
  
  align-items: center;
`;

const styles = StyleSheet.create({
  
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
    width:wp('100%')-32,
    marginLeft:16,
    marginRight:16,
    //marginTop:25,
    //backgroundColor: 'red',
  },
  select_box:{
    width:wp('30%'),
    //marginLeft:10,
    backgroundColor:'#ffffff'
  },
  select_box_1:{
    width:wp('25%'),
    marginLeft:0,
    backgroundColor:'#ffffff',
    marginRight:0,
  },
  select_box_text:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 15,
    marginLeft:-10,
  },
  select_box_text_under:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 15,
  },
  tabBarTextStyle: {
    fontSize: 15,
    fontFamily:'NotoSansKR_500Medium',
    includeFontPadding: false,
  },
  top10text_1:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    
    fontSize: 12,
    marginLeft: 4,
    marginTop: 8,
    
  },
  top10text_2:{
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    
    fontSize: 10,
    marginLeft: 4,
    marginTop: 3,
    
  },
  tier_bigcontainer : {
    width: wp('100%')-32,
    height: 200,
  },
  tier_rowcontainer : {
    width: wp('100%')-32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
    marginBottom : 10,
  },
  tab_container : {
    height: 900,
  },
});

const Tier_options1 = ["단기", "중기", "장기"];
const Tier_options2 = ["시세 기반", "제무제표 기반","기타 정보"];
const Tier_options3 = ["딥 러닝", "머신 러닝","단순 통계"];

const icon=() => {

  return (
    <Image  style={{
      height:14, width: 14,}}
      source={require('../image/arrow_under.png')}
    />
  );
};

const Page_1=({Home, CATEGORY}) => {
  
  const navigation = useNavigation();
  return (

      <View style={styles.tier_bigcontainer}>
        <View style={styles.tier_rowcontainer}>
        <TouchableOpacity onPress= {() => navigation.navigate('ALGORITHM')}>
          <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source={require('../image/top_1.png')}
          />
          <Text style={styles.top10text_1}>WARD Timer</Text>
          <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => navigation.navigate('ALGORITHM')}>
          <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source={require('../image/top_2.png')}
          />
          <Text style={styles.top10text_1}>WARD Timer</Text>
          <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => navigation.navigate('ALGORITHM')}>
          <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source={require('../image/top_3.png')}
          />
          <Text style={styles.top10text_1}>WARD Timer</Text>
          <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.tier_rowcontainer}>
        <TouchableOpacity>
          <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source={require('../image/top_4.png')}
          />
          <Text style={styles.top10text_1}>WARD Timer</Text>
          <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source={require('../image/top_5.png')}
          />
          <Text style={styles.top10text_1}>WARD Timer</Text>
          <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source={require('../image/top_6.png')}
          />
          <Text style={styles.top10text_1}>WARD Timer</Text>
          <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.tier_rowcontainer}>
        <TouchableOpacity>
          <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source={require('../image/top_1.png')}
          />
          <Text style={styles.top10text_1}>WARD Timer</Text>
          <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source={require('../image/top_2.png')}
          />
          <Text style={styles.top10text_1}>WARD Timer</Text>
          <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source={require('../image/top_3.png')}
          />
          <Text style={styles.top10text_1}>WARD Timer</Text>
          <Text style={styles.top10text_2}>ALL|ALL|딥러닝</Text>
        </TouchableOpacity>
        </View>

      </View>
        
  );
};


const Tier_system = ({ navigation }) => {


    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
          <TouchableOpacity onPress= {() => navigation.navigate('ALGORITHM')}>
          <Image  style={{
            height:wp('100%')/375*200, width: wp('100%'),}}
            source={require('../image/tier_bigpicture.png')}
          />
          </TouchableOpacity>
          <View style={styles.rowcontatiner}>
          <SelectDropdown
            data={Tier_options1}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            defaultButtonText={'투자 기간'}
            buttonStyle={styles.select_box_1}
            buttonTextStyle={styles.select_box_text}
            rowTextStyle={styles.select_box_text_under}
            renderDropdownIcon={icon}
            
          />
          <SelectDropdown
            data={Tier_options2}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            defaultButtonText={'사용 데이터'}
            buttonStyle={styles.select_box}
            buttonTextStyle={styles.select_box_text}
            rowTextStyle={styles.select_box_text_under}
            renderDropdownIcon={icon}
          />
          <SelectDropdown
            data={Tier_options3}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            defaultButtonText={'알고리즘 종류'}
            buttonStyle={styles.select_box}
            buttonTextStyle={styles.select_box_text}
            rowTextStyle={styles.select_box_text_under}
            renderDropdownIcon={icon}
          />
          </View>
          
          <View style={styles.tab_container}>
          <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
            tabBarTextStyle={styles.tabBarTextStyle}
          >
            <Page_1 tabLabel={'• 적중률순'}/>
              
            <Page_1 tabLabel={'• 수익률순'}/>

            <Page_1 tabLabel={'• 정밀도순'}/>

            <Page_1 tabLabel={'• 업로드순'}/>
            
          
            

        </ScrollableTabView>
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  };
  
  function onChange() {
    return (val) => setSelectedTeam(val)
  }

  export default Tier_system;