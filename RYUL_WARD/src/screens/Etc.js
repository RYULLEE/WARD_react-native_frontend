import React,{Component} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import { NavigationContainer } from '@react-navigation/native';


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
    return (
      <SafeAreaView>     
        <ScrollView style={{backgroundColor:'#ffffff',}}>
  
      <TouchableOpacity style={styles.etc_button}>
        <Text style={styles.etc_content}>공지사항</Text>
  
      </TouchableOpacity>
      <TouchableOpacity style={styles.etc_button}>
          <Text style={styles.etc_content}>자주하는 질문</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.etc_button}>
        <Text style={styles.etc_content}>계정 관리</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.etc_button} onPress= {() => navigation.navigate('Login')}>
        <Text style={styles.etc_content}>로그인</Text>
      </TouchableOpacity>
      </ScrollView>
      
    </SafeAreaView>
    );
};

export default etc;