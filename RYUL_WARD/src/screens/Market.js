import React,{Component, useLayoutEffect} from 'react';
import { Button,useWindowDimensions,  Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  
    subtitle: {
      fontFamily: 'NotoSansKR_500Medium',
      includeFontPadding: false,
      lineHeight: 20,
      fontSize: 18,
      marginLeft: 16,
      marginTop: 40,
    },
    top_container : {
        width : wp('100%')-32,
        marginLeft : 16,
        marginRight : 16,
        marginTop : 22,
        alignItems : 'center',
    },
    bottom_row_container : {
        width : wp('100%')-32,
        marginLeft : 16,
        marginRight : 16,
        marginTop : 16,
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginBottom : 200,
    },

});

const Market = ({navigation, route}) => {

    useLayoutEffect(() => {
      navigation.setOptions({
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        
        headerRight: ({ tintColor }) => (
          
          <Ionicons
            name="search"
            size={25}
            style={{ marginRight: 20 }}
            color='gray'
            onPress= {() => navigation.navigate('Search')}
          />
        ),
      });
    }, []);
  
      return (
        <SafeAreaView>
          <ScrollView style={{backgroundColor:'#ffffff',}}>
              <View style={styles.top_container}>
                <Image
                    style={{height:wp('100%')/375*352 , width: wp('100%')/375*343, borderRadius : 5,}}
                    source={require('../image/market_top_1.png')}
                />
                
                    <View style={{position : 'absolute', zIndex: 1}}>
                        <TouchableOpacity>
                            <Image
                            style={{height:wp('100%')/375*80 , width: wp('100%')/375*311, 
                            borderRadius : 5,  marginTop : wp('100%')/375*156,
                            }}
                            source={require('../image/market_top_2.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{position : 'absolute',}}>
                        <TouchableOpacity>
                        <Image
                        style={{height:wp('100%')/375*80 , width: wp('100%')/375*311, 
                        borderRadius : 5,  marginTop : wp('100%')/375*252,
                        }}
                        source={require('../image/market_top_3.png')}
                        />
                        </TouchableOpacity>
                    </View>
              </View>

        <Text style={styles.subtitle}>WARD에서 당신의 알고리즘을 판매하세요</Text>
        <View style={styles.bottom_row_container}>
          <TouchableOpacity onPress= {() => navigation.navigate('Upload_algorithm')}>
            <Image
                style={{height:wp('100%')/375*102 , width: wp('100%')/375*166, 
                borderRadius : 5,
                }}
                source={require('../image/market_bottom_1.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress= {() => navigation.navigate('Upload_idea')}>
            <Image
                style={{height:wp('100%')/375*102 , width: wp('100%')/375*166, 
                borderRadius : 5,
                }}
                source={require('../image/market_bottom_2.png')}
            />
            </TouchableOpacity>
        </View>

        </ScrollView>
        </SafeAreaView>
      );

};

export default Market;