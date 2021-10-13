import React from 'react';
import styled from 'styled-components/native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import { Button, useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tier_system from './Tier_system';

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

const Category = ({navigation}) => {
    return (
      <Container>
        <TouchableOpacity style={styles.etc_button} onPress= {() => navigation.navigate('TIER SYSTEM')}>
        <Text style={styles.etc_content}>Tier System</Text>
  
      </TouchableOpacity>
      
  
      </Container>
    );
  };

  export default Category;