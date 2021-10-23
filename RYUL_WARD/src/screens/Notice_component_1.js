import React,{Component, useState, useEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { DB } from '../utils/firebase';

const styles = StyleSheet.create({
    
      notice_container:{
        alignItems:'flex-start',
        marginLeft: 16,
        marginRight: 16,
        borderBottomColor: '#E9E9E9',
        borderBottomWidth : 1,
        
      },
      title_text : {
      
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 14,
        //lineHeight: 30,
        includeFontPadding: false,
        marginTop:11,

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

const Item = ({item: {content, date, title}}) => {
  return(
    <View>
    <Text style={styles.title_text}>{title}</Text>
    <Text style={styles.title_text}>{date}</Text>
    <Text style={styles.title_text}>{content}</Text>
    </View>
  );
};
const Notice_component_1 = ({ navigation, route:{params} }) => {
    //console.log(params.id);
    const [notices, setNotices] = useState([]);

    useEffect(()=>{
        const unsubsribe = DB.collection('notice')
          .doc(params.id)
          .onSnapshot( doc =>{
            const list =[];
            list.push(doc.data());
        setNotices(list);
        //console.log(list);
        });
        return () => unsubsribe();
    }, []);

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>
          <FlatList
            keyExtractor={item => item['id']}
            data = {notices}
            renderItem = {({item}) => (
                <Item item = {item} />
            )}
            />
          </ScrollView>
    );
};

export default Notice_component_1;