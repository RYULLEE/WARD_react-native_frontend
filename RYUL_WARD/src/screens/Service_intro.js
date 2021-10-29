import React,{Component, useState, useEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { DB } from '../utils/firebase';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {images} from '../utils/images'

const styles = StyleSheet.create({
  screen_container : {
    height: hp('100%')-120,
    justifyContent : 'space-between',
    //backgroundColor : 'red'
  },
  image: {
    //flex: 1,
    //resizeMode: "contain",
    width: wp('100%'),
    height: wp('100%')*1632/750,
  }
});

const service_intro = ({ navigation, route:{params} }) => {

    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
        <Image
              style={styles.image}
              //resizeMode = "contain"
              source={{uri: images.service_intro}}
             
            />
        </ScrollView>
      </SafeAreaView>
    );
};

export default service_intro;