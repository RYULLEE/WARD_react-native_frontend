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
import {images} from '../utils/images'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import Search_Bar from '../components/SearchBar';
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";
import { useNavigation } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';


const width = Dimensions.get('window').width;

const DATA = [
    {
      id: "1",
      title: "이률이률",
    },
    {
      id: "2",
      title: "WARD Tier System 2",
    },
    {
      id: "3",
      title: "WARD Tier System 3",
    },
    {
      id: "4",
      title: "WARD Tier System 4",
    },
    {
      id: "5",
      title: "WARD Tier System 5",
    },
    {
      id: "6",
      title: "WARD Tier System 6",
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
      title: "WARD Tier System 12",
    },
  ];
    
  const Item = ({ title }) => {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.input_text} >{title}</Text>
            </View>
        </TouchableOpacity>
    );
  };
    
  const renderItem = ({ item }) => <Item title={item.title} />;

  
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
    };
    
    render() {
      return (
        <View style={styles.large_container}>
          <View style={styles.top_row_container}>
          <Ionicons
            name="arrow-back-outline"
            size={25}
            style={{ marginRight: 20 }}
            color='black'
            onPress= {() => this.props.navigation.navigate('Home')}
        />
          <SearchBar
            placeholder="알고리즘 검색"
            placeholderTextColor = '#C4C4C4'
            //inputStyle={{backgroundColor: 'white',borderColor:'white', borderWidth : 0,}}
            containerStyle={{backgroundColor: 'white',borderColor:'white', width:wp('100%')/375*310,borderBottomColor:'white',borderTopColor:'white', borderWidth : 0, borderRadius: 5}}
            inputContainerStyle={{backgroundColor: 'white',borderColor:'white', borderWidth: 0, borderRadius: 5}}
            round
            searchIcon = {false}
            value={this.state.searchValue}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
            inputStyle={styles.input_text}
            
          />
          
        </View>
        <Text style={styles.title_text}>인기 검색</Text>
          <FlatList
            data={this.state.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

        
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    
    large_container: {
        width: wp('100%'),
        //flexDirection: 'row',
        //height: wp('100%')/375*50,
        
      },
    top_row_container : {
        width: wp('100%'),
        flexDirection: 'row',
        //height: wp('100%')/375*50,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
        borderBottomColor: '#E9E9E9',
        borderBottomWidth: 1,
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
      marginTop:30,
      color: '#6F7985',
      marginLeft: 31,
      marginBottom: 15,


    },
    sub_text : {
      fontFamily: 'NotoSansKR_400Regular',
      fontSize : 12,
      //lineHeight: 30,
      includeFontPadding: false,
      marginBottom: 11,
      color:'gray',
      marginTop: 5,

    },
});

export default Search_Bar;