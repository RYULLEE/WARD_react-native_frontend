import React from 'react';
import styled from 'styled-components/native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import { Button, useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, TextInput, ScrollView } from 'react-native';

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

export const category = () => {
  return (
    <Container>
      <TouchableOpacity style={styles.etc_button}>
      <Text style={styles.etc_content}>Tier System</Text>

    </TouchableOpacity>
    <TouchableOpacity style={styles.etc_button}>
        <Text style={styles.etc_content}>Buy/Sell Timing</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.etc_button}>
      <Text style={styles.etc_content}>Portfolio Analysis</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.etc_button}>
      <Text style={styles.etc_content}>Others</Text>
    </TouchableOpacity>

    </Container>
  );
};

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




export const etc = () => {
  return (
    <SafeAreaView>
      
      <View style={styles.top_banner}>
      <Text style={styles.top_banner_text}>더보기</Text>
      <TouchableOpacity style={{ width: 24, position:'absolute'}}>
     
     <Image
          style={{ marginLeft: 16, marginTop: 16, marginRight: 16,
            height: 24, width: 24,}}
          source={require('../image/outline_close_black_48dp.png')}
        />
        </TouchableOpacity>
        
        </View>
      


    <TouchableOpacity style={styles.etc_button}>
      <Text style={styles.etc_content}>공지사항</Text>

    </TouchableOpacity>
    <TouchableOpacity style={styles.etc_button}>
        <Text style={styles.etc_content}>자주하는 질문</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.etc_button}>
      <Text style={styles.etc_content}>계정 관리</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.etc_button}>
      <Text style={styles.etc_content}>로그아웃</Text>
    </TouchableOpacity>
    
    
  </SafeAreaView>
  );
};
