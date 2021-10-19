import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import { Button, useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tier_system from './Tier_system';
import {firestore} from '../utils/firebase'

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
  subtitle_2: {
    fontSize: 18,
    fontFamily: 'NotoSansKR_500Medium',
    marginLeft: 16,
    marginTop: Platform.OS === 'ios' ? 25 : 5,
  },
  subtitle: {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize: 18,
    marginLeft: 16,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
  },
  rowcontatiner: {
    flexDirection: 'row',
  },
  al_button_1: {
    marginLeft: 16,
    marginTop: Platform.OS === 'ios' ? 10 : 0,

  },
  al_button_2: {
    marginLeft: 10,
    marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontFamily: 'NotoSansKR_400Regular',
  },
  top_banner: {
    justifyContent: "flex-start",
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
    
    
  },
  top_banner_text: {
    fontFamily: 'NotoSansKR_500Medium',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 14,
    marginBottom: 14,
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1
  },
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
    borderBottomWidth: 1
  },
});


export const home = () => {
  return (
    <Container>
      <StyledText>홈</StyledText>
    </Container>
  );
};


export const category = ({navigation}) => {
  return (
    <Container>
    </Container>
  );
};
class test {
  constructor (name, age) {
    this.name =  name;
    this.age = age;
  }
  toString(){
    return this.name + ' is ' + this.age;
  }
}


export const market = () => {

  return (
    <View>
      <TextInput
        placeholder="Course Goal!"
        style={{ borderColor: "black",                                                                                                                                                                                                                                                                                                                                                 borderWidth: 1, padding: 10 }}
      />
        <Button title="ADD" />
    </View>
  );
};


export const etc = ({navigation}) => {
  return (
    <SafeAreaView>

  </SafeAreaView>
  );
};
