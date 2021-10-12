import React from 'react';
import styled from 'styled-components/native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const StyledText = styled.Text`
  font-size: 30px;
  
`;

export const home = () => {
    return (
      <Container>
        <StyledText>홈</StyledText>
      </Container>
    );
  };
  
  export const category = () => {
    return (
      <Container>
        <StyledText>카테고리</StyledText>
        <StyledText>카테고리dddd</StyledText>
        <ScrollableTabView 
      >

        <Text key={'1'} tabLabel={'first tab '} >1111</Text>
        <Text key={'2'} tabLabel={'second tab '} >1111</Text>
        <Text key={'3'} tabLabel={'third tab '} >1111</Text>
        
      </ScrollableTabView>
      </Container>
    );
  };
  
  export const market = () => {
    return (
      <Container>
        <StyledText>다운로드 마켓</StyledText>
      </Container>
    );
  };

  export const etc = () => {
    return (
      <Container>
        <StyledText>더보기</StyledText>
      </Container>
    );
  };