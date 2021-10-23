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
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({

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
    notice_container:{
      alignItems:'flex-start',
      marginLeft: 16,
      marginRight: 16,
      borderBottomColor: '#E9E9E9',
      borderBottomWidth : 1,
      
    },
    input_text : {
      fontFamily: 'NotoSansKR_500Medium',
      fontSize : 16,
      //lineHeight: 30,
      includeFontPadding: false,
    },
    title_text : {
    
      fontFamily: 'NotoSansKR_500Medium',
      fontSize : 16,
      //lineHeight: 30,
      includeFontPadding: false,
      marginTop:20,
      color: '#6F7985',
      marginLeft: 31,
      marginBottom: 15,


    },
});

const width = Dimensions.get('window').width;

const icon_search = () =>{

    return(
        <Ionicons
            name="search"
            size={22}
            color='#8D7EB5'
            
        />
    );
};

const DATA = [
    {
      id: "1",
      title: "WARD Tier System 1",
    },
    {
      id: "2",
      title: "이률 이률",
    },
    {
      id: "3",
      title: "WARD Tier System 3",
    },
    {
      id: "4",
      title: "이두호 이두호",
    },
    {
      id: "5",
      title: "WARD Tier System 5",
    },
    {
      id: "6",
      title: "이찬규 이찬규",
    },
    {
      id: "7",
      title: "WARD Tier System 7",
    },
    {
      id: "8",
      title: "WARD Tier System 8",
    },
    {
      id: "9",
      title: "WARD Tier System 9",
    },
    {
      id: "10",
      title: "WARD Tier System 10",
    },
    {
      id: "11",
      title: "WARD Tier System 11",
    },
    {
      id: "12",
      title: "삼성전자",
    },
  ];
  
  const Itemselected=() => {
    
    show_okay2 = false;
    alert('sefffsfe')
    //F_hight = 10;
  };

  const Item = ({ title }) => {

    
    return (
        <TouchableOpacity onPress ={()=>Itemselected()} underlayColor='blue'  >
            <View style={styles.item}>
                <Text style={styles.input_text} >{title}</Text>
            </View>
        </TouchableOpacity>
    );
  };
    
  const renderItem = ({ item }) => <Item title={item.title} />;

  let search_text_under='인기 검색';
  let search_text_under_height=60;
  let show_okay = false;
  let show_okay2= true;
  let F_hight = 200;

  class Search_Bar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        data: DATA,
        error: null,
        searchValue: "",
      };
      this.arrayholder = DATA;
    }
    
    searchFunction = (text) => {
      const updatedData = this.arrayholder.filter((item) => {
        const item_data = `${item.title.toUpperCase()})`;
        const text_data = text.toUpperCase();
        return item_data.indexOf(text_data) > -1;
      });
      this.setState({ data: updatedData, searchValue: text });
      if(text) {
          search_text_under_height=0;
          search_text_under='';
          show_okay=true;
      }
      else {
          search_text_under_height=600;
          search_text_under='인기 검색';
          show_okay=false;
      }
    };
    
    render() {
    
     
      return (
        <View>
          
          <SearchBar
            placeholder="종목명 또는 종목 코드 검색"
            placeholderTextColor = '#C4C4C4'
            //inputStyle={{backgroundColor: 'white',borderColor:'white', borderWidth : 0,}}
            containerStyle={{backgroundColor: 'white', borderColor:'white',marginLeft :10, width:wp('100%')-20,borderBottomColor:'white',borderTopColor:'white', borderWidth : 0, borderRadius: 5}}
            inputContainerStyle={{backgroundColor: 'white',borderColor:'#8D7EB5',borderBottomWidth:1, borderWidth: 1, borderRadius: 5,}}
            round
            searchIcon = {false}
            value={this.state.searchValue}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
            inputStyle={styles.input_text}
            searchIcon = {icon_search}
            
          />
          
            

             <View style={{height: F_hight}}>
            {(show_okay) && <FlatList
                data={this.state.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            /> }
            </View>
        
        </View>
      );
    }
  }

const Timer = ({ navigation }) => {

    return(
        <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
            <Text style={styles.subtitle}>Timing Score</Text>

            <Search_Bar/>
        </ScrollView>
        </SafeAreaView>

    );

};

export default Timer;