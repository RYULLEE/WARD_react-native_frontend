import React,{Component, useState, useEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { DB } from '../utils/firebase';
import { ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {images} from '../utils/images';
import {text} from '../utils/personal_info_text';
import {text2} from '../utils/use_term_text';

const styles = StyleSheet.create({
  view_style : {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 16,
    marginBottom: 20
  },
  text_style : {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    fontSize: 14,
  },
  etc_button: {
    width: 80,
    backgroundColor: 'black',
    alignItems : 'center',
    height: 36,
    justifyContent : 'center',
    borderRadius: 5
  },
  etc_content: {
    fontFamily: 'NotoSansKR_500Medium',
    color: 'white',
    includeFontPadding: false,
    lineHeight: 30,
    fontSize: 16,
  },
});

const Personal_info = ({ navigation, route:{params} }) => {
    console.log(params);
    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>

        <View style={styles.view_style}>
          <Text style={styles.text_style}>{params === "personal" ? text: text2}</Text>
        </View>
      <View style = {{alignItems: 'center', justifyContent: 'center', marginBottom: 60}}>
        <TouchableOpacity  onPress= {() => navigation.navigate('Etc')} style={styles.etc_button}>
          <Text style={styles.etc_content}>확인</Text>
        </TouchableOpacity>
      </View>

        </ScrollView>
      </SafeAreaView>
    );
};

export default Personal_info;