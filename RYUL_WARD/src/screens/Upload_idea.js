import React,{Component, useState, useEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable, Alert } from 'react-native';
import { DB } from '../utils/firebase';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {images} from '../utils/images'
import { TextInput } from 'react-native';
//import { DocumentPicker } from 'expo';
import * as DocumentPicker from "expo-document-picker";

const styles = StyleSheet.create({
  input_container : {
    width : wp('100%')-32,
    justifyContent : 'center',
    margin: 16,
  },
  sub_title : {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize : 16,
    marginHorizontal: 16,
    //lineHeight: 30,
    includeFontPadding: false,
    //marginVertical:16,
  },
  cancel_container : {
    borderColor: '#E9E9E9',
    borderWidth:1,
    alignItems: 'center',
    width: wp('100%')/375*80,
    height: wp('100%')/375*32,
    justifyContent:'center',
    marginRight: 16,
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
    marginLeft: 16,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
});

const upload_idea = ({ navigation, route:{params} }) => {
  const {title, setTitle} = useState("");
  const {context, setContext} = useState("");

  const handleSave = () => {
    Alert.alert("", "정상적으로 제출되었습니다.\n심사 결과는 가입하신 이메일로 발송됩니다.");
  };
  const handleFile = async() => {
    console.log("clicked");
    let result = await DocumentPicker.getDocumentAsync({});
		  Alert.alert(result.uri);
      console.log(result);
  };

    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>

        <View style={styles.input_container, {margin: 16, marginTop: 40}}>
        <TextInput
              style={{ height: 40, borderColor: 'gray', 
              borderWidth: 1, borderColor: '#C4C4C4',
              borderRadius: 5, paddingHorizontal: 16, fontSize: 16}}
              value = {title}
              //onChangeText = {handleNickname}
              placeholder = "제목"
              returnKeyType = "next"
              />
          </View>
        <Text style={styles.sub_title}>아이디어 설명</Text>

        <View style={styles.input_container}>
        <TextInput
          style={{ height: hp(30), borderColor: 'gray', 
          borderWidth: 1, borderColor: '#C4C4C4',
          borderRadius: 5}}
          value = {context}
              //onChangeText = {handleNickname}
              />
          </View>
          <View style={styles.bottom_row_container}>
                <TouchableOpacity onPress= {() => navigation.navigate('Market')}>
                <View style={styles.cancel_container}>
                    <Text style={styles.cancel_text}>취소</Text>
                </View>
                </TouchableOpacity>

                <View style= {{flexDirection:'row',}}>
                <TouchableOpacity onPress = {handleFile}>
                <View style={styles.submit_container}>
                    <Text style={styles.submit_text}>파일 추가</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {handleSave}>
                <View style={styles.submit_container} >
                    <Text style={styles.submit_text}>저장</Text>
                </View>
                </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export default upload_idea;