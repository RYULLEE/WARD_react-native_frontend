import React,{Component} from 'react';
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


const styles = StyleSheet.create({
    
      rule_container:{
        
        marginLeft: 16,
        marginRight: 16,
        width: wp('100%')-32,
        
      },
      title_text : {
      
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 14,
        //lineHeight: 30,
        includeFontPadding: false,
        marginTop: 40,
      },
      sub_text : {
        fontFamily: 'NotoSansKR_400Regular',
        fontSize : 14,
        //lineHeight: 30,
        includeFontPadding: false,
        marginTop: 25,
      },
      submit_text:{
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 14,
        //lineHeight: 30,
        color: '#ffffff',
        includeFontPadding: false,
      },
      submit_container : {
        backgroundColor: '#000000',
        alignItems: 'center',
        width: wp('100%')/375*80,
        height: wp('100%')/375*32,
        justifyContent:'center',
        borderRadius: 5,
      },
      bottom_container : {
        alignItems: 'center',
        justifyContent: 'center',
        width : wp('100%'),
        marginTop: 40,
        marginBottom: 60,
      },
});


const User_admin_component_1 = ({ navigation }) => {

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>
            
            <View style={styles.rule_container}>
                <Text style={styles.title_text}>제 1조 (목적)</Text>
                <Text style={styles.sub_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            
                <Text style={styles.title_text}>제 2조 (용어의 정의)</Text>
                <Text style={styles.sub_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            
                <Text style={styles.title_text}>제 3조 (목적)</Text>
                <Text style={styles.sub_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View> 
            
            
            <View style={styles.bottom_container}>
            <TouchableOpacity onPress= {() => navigation.navigate('User_admin')}>
                <View style={styles.submit_container}>
                    <Text style={styles.submit_text}>확인</Text>
                </View>
            </TouchableOpacity>
            </View>
            
        </ScrollView>
    );
};

export default User_admin_component_1;