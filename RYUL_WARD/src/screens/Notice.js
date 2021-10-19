import React,{Component, useState, useEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView} from 'react-native';
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


const Item = ({item: {id, title, date}, onPress}) => {
    return(
        <TouchableOpacity onPress= {()=> onPress({id, title})}>
            <View style={styles.notice_container}>
                <Text style={styles.title_text}>{title}</Text>
                <Text style={styles.sub_text}>{date}</Text>
            </View>
        </TouchableOpacity>
    );
};
  
const Notice = ({ navigation }) => {
    const handleItemPress = params => {
        navigation.navigate('Notice_1', params);
    };
    const [notices, setNotices] = useState([]);

    useEffect(()=>{
        const unsubsribe = DB.collection('notice')
        .orderBy('date')
        .onSnapshot(snapshot => {
            const list = [];
            snapshot.forEach(doc => {
                let obj = doc.data();
                obj["id"] = doc.id;
                list.push(obj);
            });
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
                <Item item = {item} onPress={handleItemPress} />
            )}
            />
        </ScrollView>
    );
};

export default Notice;