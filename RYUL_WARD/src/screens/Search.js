import React,{Component, useLayoutEffect, useState, useEffect, useRef} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
//import Search_Bar from '../components/SearchBar';
import { ListItem, SearchBar } from "react-native-elements";

import { DB } from '../utils/firebase';
import { render } from 'react-dom';

const width = Dimensions.get('window').width;


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

  let search_text_under='인기 검색';
  let search_text_under_height=60;
  let show_okay = true;

  //const Data = DATA();
  //console.log(Data);

  class Search_Bar extends Component {
    //const [algo_info, setAlgo_info] = useState([]);

    constructor(props) {
      //console.log(props.search_data);
      super(props);
      this.state = {
        loading: false,
        data: this.props.search_data,
        error: null,
        searchValue: "",
      };
      this.arrayholder = this.props.search_data;
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
          show_okay=false;
      }
      else {
          search_text_under_height=600;
          search_text_under='인기 검색';
          show_okay=true;
      }
    };
    

    render() {
      
     
      return (
        <View>
          
          <SearchBar
            placeholder="알고리즘 검색"
            placeholderTextColor = '#C4C4C4'
            //inputStyle={{backgroundColor: 'white',borderColor:'white', borderWidth : 0,}}
            containerStyle={{backgroundColor: 'white',marginLeft:60, borderColor:'white', width:wp('100%')/375*310,borderBottomColor:'white',borderTopColor:'white', borderWidth : 0, borderRadius: 5}}
            inputContainerStyle={{backgroundColor: 'white',borderColor:'white', borderWidth: 0, borderRadius: 5}}
            round
            searchIcon = {false}
            value={this.state.searchValue}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
            inputStyle={styles.input_text}
            
          />
          
            <View>
             {show_okay && <Text style={styles.title_text} >{search_text_under}</Text>}
             </View>
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
    hide_container: {
        height: search_text_under_height,
        backgroundColor: 'red',
    },
    top_container : {
        width: wp('100%'),
        //height: wp('100%')/375*50,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: 'red',
        borderBottomColor: '#E9E9E9',
        borderBottomWidth: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 20,
    },
    back_container : {
        position: 'absolute',
        marginLeft: 30,
        marginTop: 20,

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


const Search = ({ navigation }) => {

  const [algo_info, setAlgo_info] = useState([]);
  const collection = ['tier_system', 'timing_algo', 'portfolio_algo','etc_algo'];
  //const ref = useRef();
  

  useEffect(()=> {
    async function make_data() {
        let list =[];
        await DB
          .collection(collection[0])
          .orderBy('name')
          .onSnapshot(snapshot =>{
            snapshot.forEach(doc=>{
            let obj = doc.data();
            obj["title"] = obj["name"];
            list.push(obj);
            //console.log(list);
            });
          //console.log(list);
        setAlgo_info(list);
      });
    };
    make_data();
  }, []);

  //console.log(algo_info);

  return (
      <SafeAreaView>
      <ScrollView style={{backgroundColor:'#ffffff'}}>
          <View style={styles.top_container}>
          
          <Search_Bar search_data = {algo_info}/>
          <View style={styles.back_container}>
            <Ionicons
                name="arrow-back-outline"
                size={25}
                style={{ marginRight: 20 }}
                color='black'
                onPress= {() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
  );
  
};

export default Search;

