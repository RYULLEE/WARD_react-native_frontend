import React,{Component, useContext} from 'react';
import { Alert, Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../contexts';
import { logout } from '../utils/firebase';

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
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,

  },
  etc_button: {
    marginLeft: 16,
    marginRight: 16,
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
  },

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
      
      </ScrollView>
      
    </SafeAreaView>
    );
};

export default etc;