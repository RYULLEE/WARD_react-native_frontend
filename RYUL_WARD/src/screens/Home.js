import React,{Component, useLayoutEffect} from 'react';
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
<<<<<<< HEAD
import {images} from '../utils/images'
=======
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
>>>>>>> 80be41ed395d211c305e2cf2c505d81797d2bb5f

const width = Dimensions.get('window').width;

const Container = styled.View`

  align-items: center;
  
`;

const Etc_Button_Container = styled.View`

  align-items: center;
  width: ${({width})=> width-32}px;
  
`;

const styles = StyleSheet.create({
  subtitle_2: {
    fontSize: 18,
    fontFamily: 'NotoSansKR_500Medium',
    marginLeft : 16,
    marginTop : 25,
    includeFontPadding: false,
    
  }, 
  subtitle: {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize : 18,
    marginLeft : 16,
    marginTop : 40,
    lineHeight: 30,
    includeFontPadding: false,
  },
  rowcontatiner: {
    flexDirection: 'row',
  },
  al_button_1 : {
    marginLeft : 16,
    marginTop : 10,
    
  },
  al_button_2 : {
    marginLeft : 10,
    marginTop : 10,
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontFamily:'NotoSansKR_400Regular',
    includeFontPadding: false,
  },
  Rank_Container : {
    alignItems: 'center',
    height:wp('100%')/373*90*3+120,
    
  },
  etc_button : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    height:32,
    width:wp('100%')-32,
    marginLeft:16,
    marginRight:16,
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },
  etc_text : {
    fontSize: 14,
    fontFamily:'NotoSansKR_500Medium',
    includeFontPadding: false,
  },
  suggest_rowcontainer : {
    flexDirection : 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('100%')-32,
    height: (wp('100%')-32)/343*81,
    borderColor : '#D8D8D8',
    borderRadius: 9,
    borderWidth : 2,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
  },
  suggest_container: {
    alignItems: 'flex-start',
    
  },

  suggest_text_1 : {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    //lineHeight: 30,
    fontSize: 14,
    marginLeft: 17,
    
    
  },
  suggest_text_2 : {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    lineHeight: 30,
    fontSize: 10,
    marginLeft: 17,
    marginTop: 4,
  },
  youtube_rowcontainer : {
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
    width: wp('100%')-32,
    marginLeft: 16,
    marginRight: 16,

  },

  upload_container : {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('100%'),
    marginTop: 14,
  },
  info_container_0 : {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('100%')-32,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 40,

  },
  info_container_1 : {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('100%')-32,
    marginLeft: 16,
    marginRight: 16,

  },
  info_container_2 : {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: wp('50%')-16,
    marginBottom: Platform.OS === 'ios' ? 0 : 10,
  },
  info_text : {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 30,
    fontSize: 12,

  },
  info_last_text: {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 10,
    marginLeft:16,
    color:'gray',
  },
  info_last_text_first: {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 10,
    marginLeft:16,
    color:'gray',
    marginTop: 10,
  },
  info_last_text_last: {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 10,
    marginLeft:16,
    color:'gray',
    marginBottom: 50,
  },

});

/*
const StyledText = styled.Text`
  font-family: 'NotoSansKR_500Medium';
  font-size: 18px;
  margin-left: 16px;
  margin-top: 0px;
  
`;
*/

const getwidth = () => {

  const width = Dimensions.get('window').width;

  return <Home width={width} />;
};

const ranking_list = styled.View`

  flex:1;
  height: 200px;

`;

const Home = ({ navigation,route }) => {

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
          onPress= {() => navigation.navigate('ALGORITHM')}
        />
      ),
    });
  }, []);
  
  return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
        <SliderBox images={[
          images.Home_banner_1,
          images.Home_banner_2,
          images.Home_banner_3,
        ]}

          autoplay
          sliderBoxHeight={wp('100%') / 375 * 200}
          circleLoop
          dotColor="#ffffff"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 15,
            marginHorizontal: 5,
            padding: 0,
            margin: 0
          }}

        />
        <Text style={styles.subtitle_2}>최근 본 알고리즘</Text>

        <ScrollView horizontal={true} style={styles.rowcontatiner}>
          <TouchableOpacity style={styles.al_button_1} onPress= {() => navigation.navigate('ALGORITHM')} >
            <Image
              style={{ height: 128, width: 96, borderRadius: 5, }}
              source={require('../image/al_1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.al_button_2}>
            <Image
              style={{ height: 128, width: 96, borderRadius: 5, }}
              source={require('../image/al_2.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.al_button_2}>
            <Image
              style={{ height: 128, width: 96, borderRadius: 5, }}
              source={require('../image/al_3.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.al_button_2}>
            <Image
              style={{ height: 128, width: 96, borderRadius: 5, }}
              source={require('../image/al_2.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.al_button_2}>
            <Image
              style={{ height: 128, width: 96, borderRadius: 5, }}
              source={require('../image/al_3.png')}
            />
          </TouchableOpacity>

        </ScrollView>

      <Text style={styles.subtitle}>알고리즘 랭킹</Text>
      <View style={styles.Rank_Container}>
        <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
        tabBarTextStyle={styles.tabBarTextStyle}
        
        >
         
          <Ranking tabLabel={'적중률'}/>  
        
          <Ranking tabLabel={'수익률'} />
          <Ranking tabLabel={'정밀도'} />
          
        </ScrollableTabView>
      </View>
      
      <TouchableOpacity>
          <View style={styles.etc_button}>
            <Text style={styles.etc_text}>
              더 보기
            </Text>
          </View>
      </TouchableOpacity>

      <Text style={styles.subtitle}>이 알고리즘은 어때요?</Text>

      <TouchableOpacity>
      <View style={styles.suggest_rowcontainer}>
        <Image  style={{
          height:wp('100%')/373*58, width: wp('100%')/373*58, borderRadius: 100, marginLeft:16,}}
          source={require('../image/sticker_1.png')}
        />
        <View style={styles.suggest_container}>
          <Text style={styles.suggest_text_1}>증권사 리포트는 믿으면 안 된다?</Text>
          <Text style={styles.suggest_text_2}>증권사 리포트 종합 분석</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.suggest_rowcontainer}>
        <Image  style={{
          height:wp('100%')/373*58, width: wp('100%')/373*58, borderRadius: 100, marginLeft:16,}}
          source={require('../image/sticker_2.png')}
        />
        <View style={styles.suggest_container}>
          <Text style={styles.suggest_text_1}>여러 종목을 산다고 분산 투자인 건 아니다</Text>
          <Text style={styles.suggest_text_2}>유사도 활용 분산 투자 유효성 진단</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.suggest_rowcontainer}>
        <Image  style={{
          height:wp('100%')/373*58, width: wp('100%')/373*58, borderRadius: 100, marginLeft:16,}}
          source={require('../image/sticker_2.png')}
        />
        <View style={styles.suggest_container}>
          <Text style={styles.suggest_text_1}>수출입 무역통계를 보면 {"\n"}기업의 분기 실적을 미리 알 수 있다</Text>
          <Text style={styles.suggest_text_2}>분기 별 재무제표와 수출입 무역통계 간의 분석</Text>
        </View>
      </View>
      </TouchableOpacity>

      <Text style={styles.subtitle}>WARD Youtube</Text>

      <View style={styles.youtube_rowcontainer}>
        <TouchableOpacity>
        <Image  style={{
          height:wp('100%')/373*93, width: wp('100%')/373*167, borderRadius: 10, }}
          source={require('../image/ward_youtube_1.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image  style={{
          height:wp('100%')/373*93, width: wp('100%')/373*167, borderRadius: 10, }}
          source={require('../image/ward_youtube_2.png')}
        />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Upload Yours</Text>
      
      <View style={styles.upload_container} >

        <TouchableOpacity>
          <Image  style={{
            height:wp('100%')/2/187*112, width: wp('100%')/2,}}
            source={require('../image/upload_yours_1.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image  style={{
            height:wp('100%')/2/187*112, width: wp('100%')/2,}}
            source={require('../image/upload_yours_2.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.info_container_0}>

        <View style={styles.info_container_2}>
          <TouchableOpacity>
            <Text style={styles.info_text}>이용 약관</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_container_2}>
          <TouchableOpacity>
          <Text style={styles.info_text}>WARD 서비스 소개</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info_container_1}>

        <View style={styles.info_container_2}>
          <TouchableOpacity>
          <Text style={styles.info_text}>개인 정보 처리</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_container_2}>
          <TouchableOpacity>
          <Text style={styles.info_text}>WARD 채용</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.info_last_text_first}>WARD invest(주) | 대표 이찬규 | 010-9229-9388</Text>
      <Text style={styles.info_last_text}>대전광역시 유성구 대학로 291 w5-2 2층 ( 한국과학기술원, 스타트업빌리지)</Text>
      <Text style={styles.info_last_text_last}>copyright © WARD All rights reserved</Text>
      </ScrollView> 
      </SafeAreaView> 
        
      
    );
        
  };
  
  export default Home;
