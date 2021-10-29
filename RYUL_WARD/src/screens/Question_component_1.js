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
        fontSize : 18,
        //lineHeight: 30,
        includeFontPadding: false,
        marginVertical: 16, 

      },
      context_text : {
        fontFamily: 'NotoSansKR_400Regular',
        fontSize : 14,
        //lineHeight: 30,
        includeFontPadding: false,
        marginBottom: 11,
        color:'black',
        marginTop: 5,
      },
      context_container:{
        alignItems:'flex-start',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16
      },
});
const Item = ({item: {question, answer}}) => {
  return(
    <><View style={styles.notice_container}>
      <Text style={styles.title_text}>{question}</Text>
    </View><View style={styles.context_container}>
        <Text style={styles.context_text}>{answer}</Text>
      </View></>
  );
};

const Question_component_1 = ({ navigation, route:{params} }) => {
  const [question, setQuestions] = useState([]);
  useEffect(()=>{
    const unsubsribe = DB.collection('question')
      .doc(params.id)
      .onSnapshot( doc =>{
        const list =[];
        list.push(doc.data());
    setQuestions(list);
    });
    return () => unsubsribe();
  }, []);

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>
          <FlatList
            keyExtractor={item => item['id']}
            data = {question}
            renderItem = {({item}) => (
                <Item item = {item} />
            )}
            /> 
        </ScrollView>
    );
};

export default Question_component_1;