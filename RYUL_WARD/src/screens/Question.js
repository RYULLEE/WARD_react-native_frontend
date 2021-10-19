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
    
      question_container:{
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
        marginTop:21,
        marginBottom:21,

      },
     
});

const Item = ({item: {id, question, answer}, onPress}) => {
    return(
        <TouchableOpacity onPress= {() => onPress({id, question})}>
        <View style={styles.question_container}>
            <Text style={styles.title_text}>{question}</Text>
        </View>
        </TouchableOpacity>
    );
};

const Question = ({ navigation }) => {
    const handleItemPress = params => {
        navigation.navigate('Question_component_1', params);
    };
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        const unsubsribe = DB.collection('question')
        .onSnapshot(snapshot => {
            const list = [];
            snapshot.forEach(doc => {
                let obj = doc.data();
                obj["id"] = doc.id;
                list.push(obj);
            });
        setQuestions(list);
        console.log(list);
        });
        
        return () => unsubsribe();
    }, []);

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>
            <FlatList
            keyExtractor={item => item['id']}
            data = {questions}
            renderItem = {({item}) => (
                <Item item = {item} onPress={handleItemPress} />
            )}
            />
        </ScrollView>
    );
};

export default Question;