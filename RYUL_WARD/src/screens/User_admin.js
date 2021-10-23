import React,{Component, useState} from 'react';
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
import { Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
    
      user_container:{
        alignItems:'flex-start',
        marginLeft: 16,
        marginRight: 16,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 40,
      },
      title_text : {
      
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 18,
        //lineHeight: 30,
        includeFontPadding: false,
        marginTop:40,
        marginBottom:40,
        marginLeft: 16,

      },
     sub_text_2 : {
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 14,
        //lineHeight: 30,
        includeFontPadding: false,
        //marginBottom:40,
        //marginLeft: 16,

     },
     row_container_2_big : {
        flexDirection: 'row',
        marginBottom: 40,
        marginLeft: 16,
        marginRight: 32,
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'red',
        width: wp('100%')-80,

     },
     row_container_2_small : {
        flexDirection: 'row',
        alignItems: 'center',

     },
     check_box : {
         marginLeft: 4,
     },
     checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        marginLeft: 10,
        borderColor: 'gray',
        backgroundColor: 'transparent',
      },
    
      checkboxChecked: {
        backgroundColor: '#E99314',
        borderColor: '#E99314',
        alignItems: 'center',
      },

      cancel_container : {
        borderColor: '#E9E9E9',
        borderWidth:1,
        alignItems: 'center',
        width: wp('100%')/375*80,
        height: wp('100%')/375*32,
        justifyContent:'center',
        marginRight: 8,
        borderRadius: 5,
      },
      cancel_text : {
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 14,
        //lineHeight: 30,
        color: '#E99314',
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
      submit_text:{
        fontFamily: 'NotoSansKR_500Medium',
        fontSize : 14,
        //lineHeight: 30,
        color: '#ffffff',
        includeFontPadding: false,
      },
      bottom_row_container : {
        flexDirection:'row',
        marginLeft: 16,
        marginRight: 16,
        width: wp('100%')-32,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 49,
        marginBottom: 40,
      },
});

function MyCheckbox() {
    const [checked, onChange] = useState(false);
  
    function onCheckmarkPress() {
      onChange(!checked);
    }
  
    return (
      <TouchableOpacity
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onCheckmarkPress}>
        {checked && <Ionicons name="checkmark-sharp" size={22} color="white" />}
      </TouchableOpacity>
    );
};


const User_admin = ({ navigation }) => {

    const [checked, setChecked] = React.useState(false);

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>

            <View style={styles.user_container}>
                <Text style={styles.title_text}>개인 정보</Text>
            </View>
            
            <View style={styles.user_container}>
                <Text style={styles.title_text}>약관</Text>
                <View style={styles.row_container_2_big}>
                    <View style={styles.row_container_2_small}>
                        <Text style={styles.sub_text_2}>약관에 동의합니다</Text>
                        <MyCheckbox />
                    </View>
                    <TouchableOpacity onPress= {() => navigation.navigate('User_admin_component_1')}>
                        <Image
                            style={{height:wp('100%')/375*30 , width: wp('100%')/375*30,}}
                            source={require('../image/arrow_right.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.row_container_2_big}>
                    <View style={styles.row_container_2_small}>
                        <Text style={styles.sub_text_2}>개인정보취급방침에 동의합니다</Text>
                        <MyCheckbox />
                    </View>
                    <TouchableOpacity onPress= {() => navigation.navigate('User_admin_component_2')}>
                        <Image
                            style={{height:wp('100%')/375*30 , width: wp('100%')/375*30, }}
                            source={require('../image/arrow_right.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottom_row_container}>
                <TouchableOpacity>
                <View style={styles.cancel_container}>
                    <Text style={styles.cancel_text}>취소</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.submit_container}>
                    <Text style={styles.submit_text}>저장</Text>
                </View>
                </TouchableOpacity>
            </View>


            
        </ScrollView>
    );
};

export default User_admin;