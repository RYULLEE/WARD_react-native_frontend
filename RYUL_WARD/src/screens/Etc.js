import React,{Component, useContext} from 'react';
import { Alert, Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../contexts';
import { logout } from '../utils/firebase';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const StyledText = styled.Text`
  font-size: 30px;
  
`;
const styles = StyleSheet.create({
  
  etc_content: {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 30,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,

  },
  etc_button: {
    marginLeft: 16,
    marginRight: 16,
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
    height: wp('100%')/375*50,
    justifyContent : 'center',
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

  screen_container : {
    height: hp('100%')-120,
    justifyContent : 'space-between',
    //backgroundColor : 'red'
  }

});


export const etc = ({navigation}) => {
  const {user} = useContext(UserContext);
  const {dispatch} = useContext(UserContext);
  const _handleLogout = async() => {
    try{
      await logout();
      Alert.alert('Logout Success', user.email);
    } catch(e){
      console.log('[Profile] logout: ', e.message);
    }finally{
      dispatch({});
    }
  };
    return (
      
      <SafeAreaView>     
        <ScrollView style={{backgroundColor:'#ffffff',}}>
        <View style={styles.screen_container}>
  
      <View>
      <TouchableOpacity  onPress= {() => navigation.navigate('Notice')} style={styles.etc_button}>
        <Text style={styles.etc_content}>공지사항</Text>
  
      </TouchableOpacity>
      <TouchableOpacity onPress= {() => navigation.navigate('Question')} style={styles.etc_button}>
          <Text style={styles.etc_content}>자주하는 질문</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {() => navigation.navigate('User_admin')} style={styles.etc_button}>
        <Text style={styles.etc_content}>계정 관리</Text>
      </TouchableOpacity>
      
        {user?.uid && user?.email ? 
        <TouchableOpacity style={styles.etc_button} onPress={_handleLogout}>
        <Text style={styles.etc_content}>로그아웃</Text>
        </TouchableOpacity>:  <TouchableOpacity style={styles.etc_button} onPress= {() => navigation.navigate('Login')}><Text style={styles.etc_content}>로그인</Text></TouchableOpacity>}
      </View>

      <View>
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

        </View>

        </View>
      </ScrollView>
      
    </SafeAreaView>
    );
};

export default etc;