import React,{Component, useState, useContext, useEffect} from 'react';
import { Alert, Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Input_2 } from '../components/';
import { UserContext } from '../contexts';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { DB } from '../utils/firebase';
import { set } from 'react-native-reanimated';


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
        marginBottom:25,
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
      input_container : {
        width : widthPercentageToDP('100%')- wp('100%')/375*80-80,
        height: 46,
        justifyContent : 'center',
        marginLeft : 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#808080',
        marginRight: 16,
        marginBottom: 16
      },
      personal_info_container:{
        flexDirection: 'row', 
        justifyContent: 'space-around',
      },
      check_container : {
        backgroundColor: '#000000',
        alignItems: 'center',
        width: wp('100%')/375*80,
        height: 46,
        justifyContent:'center',
        borderRadius: 5,
      },
      email_container : {
        width : widthPercentageToDP('100%')- 64,
        height: 46,
        justifyContent : 'center',
        marginLeft : 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#808080',
        marginRight: 16,
        marginBottom: 16,
        opacity: 0.3,
      },
      label_text : {
        width : widthPercentageToDP('40%')-80,
        fontFamily: 'NotoSansKR_400Regular',
        fontSize : 12,
        includeFontPadding: false,
        color: '#808080',
        marginLeft: 16,
        marginBottom: 4
      },
      country_number : {
        width : widthPercentageToDP('40%')-80,
        height: 46,
        justifyContent : 'center',
        marginLeft : 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#808080',
        marginBottom: 40,
        opacity: 0.3,
      },
      phone_number : {
        width : widthPercentageToDP('60%'),
        height: 46,
        justifyContent : 'center',
        marginLeft : 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#808080',
        marginRight: 16,
      },
});




const User_admin = ({ navigation }) => {

    const [checked_1, onChange_1] = useState(false);
    const [checked_2, onChange_2] = useState(false);
    const {user} = useContext(UserContext);
    const [nickname, setNickname] = useState('');
    const [phonenum, setPhonenum] = useState('');

    const handleNickname = input_nick => {
      setNickname(input_nick);
    };

    const handlePhonenum = input_num => {
      setPhonenum(input_num);
    };

    const onDoublecheck= async() => {
      const personalRef = DB.collection('personal_info');
      const snapshot = await personalRef.where('nick_name', '==', nickname).get();
      if(snapshot.empty){
        Alert.alert('Available nickname', nickname);
      }
      else{
        Alert.alert('Unavailable nickname', nickname);
        setNickname('WARD'+user.uid.substring(0, 4))
      }
    }
    
    function onCheckmarkPress_1() {
      onChange_1(!checked_1);
      console.log("1:", checked_1);
    }
    function onCheckmarkPress_2() {
      onChange_2(!checked_2);
      console.log("2:", checked_2);
    }

    const handleSave_success = async() => {
      Alert.alert('Successfuly Saved', user.email);
      console.log(user, nickname, phonenum,);
      const data = {
        phone : phonenum,
        nick_name: nickname,
      };
      try{
        const res = await DB.collection('personal_info').doc(user.uid).set(data);
      } catch(e){
        Alert.alert('Saving Error', e.message);
      }
      
      //console.log("saved");
    };
    const handleSave_fail = () => {
      Alert.alert('약관에 동의하지 않으셨습니다', user.email);

      //console.log("failed");
    };

    useEffect(()=> {
      const unsubscribe = DB.collection('personal_info')
        .doc(user.uid)
        .onSnapshot(doc => {
          const list = [];
          list.push(doc.data());
          //console.log(list);
          setNickname(list[0]["nick_name"]);
          setPhonenum(list[0]["phone"]);
        });
        return () => unsubscribe();
    }, []);

    console.log(nickname, phonenum,);
    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>

          <View style={styles.user_container}>
            <Text style={styles.title_text}>개인 정보</Text>
            <Text style={styles.label_text}>닉네임</Text>
            <View style = {styles.personal_info_container}>
              <View style={styles.input_container}>
              <Input_2
              value = {nickname}
              onChangeText = {handleNickname}
              placeholder = {nickname}
              returnKeyType = "next"
              />
              </View>
            <TouchableOpacity onPress={onDoublecheck}>
                  <View style={styles.check_container} >
                      <Text style={styles.submit_text}>중복 확인</Text>
                  </View>
                  </TouchableOpacity>
            </View> 
            <Text style={styles.label_text}>이메일</Text>
            <View style={styles.email_container}>
            <Input_2
              disabled = {true}
              placeholder = {user.email}
              returnKeyType = "next"
            />
            </View>
            <View style = {styles.personal_info_container}>
            <Text style={styles.label_text}>국가 번호</Text>
            <Text style={styles.label_text}>휴대폰 번호</Text>
            </View>
            <View style = {styles.personal_info_container}>
            <View style={styles.country_number}>
            <Input_2
              disabled = {true}
              placeholder = "82"
              returnKeyType = "next"
            />
            </View>
            <View style={styles.phone_number}>
            <Input_2
              value = {phonenum}
              onChangeText = {handlePhonenum}
              placeholder = {phonenum}
              returnKeyType = "next"
            />
            </View>
            </View>
          </View>
            
            <View style={styles.user_container}>
                <Text style={styles.title_text}>약관</Text>
                <View style={styles.row_container_2_big}>
                    <View style={styles.row_container_2_small}>
                        <Text style={styles.sub_text_2}>약관에 동의합니다</Text>
                        <TouchableOpacity
                        style={[styles.checkboxBase, checked_1 && styles.checkboxChecked]} onPress={onCheckmarkPress_1}>
                        {checked_1 && <Ionicons name="checkmark-sharp" size={22} color="white" />}
                         </TouchableOpacity>
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
                        <TouchableOpacity
                        style={[styles.checkboxBase, checked_2 && styles.checkboxChecked]} onPress={onCheckmarkPress_2}>
                        {checked_2 && <Ionicons name="checkmark-sharp" size={22} color="white" />}
                         </TouchableOpacity>
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
                <TouchableOpacity onPress= {() => navigation.navigate('Etc')}>
                <View style={styles.cancel_container}>
                    <Text style={styles.cancel_text}>취소</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {!checked_1 || !checked_2 ? handleSave_fail : handleSave_success}>
                <View style={styles.submit_container} >
                    <Text style={styles.submit_text}>저장</Text>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default User_admin;