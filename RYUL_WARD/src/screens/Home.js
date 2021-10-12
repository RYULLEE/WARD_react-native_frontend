import React,{Component} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated } from 'react-native';
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



const Container = styled.SafeAreaView`
  height: 300px;
  align-items: center;
  
`;


const styles = StyleSheet.create({ 
  subtitle_2: {
    fontSize: 18,
    fontFamily: 'NotoSansKR_500Medium',
    marginLeft : 16,
    marginTop : Platform.OS === 'ios' ? 25 : 5,
  }, 
  subtitle: {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize : 18,
    marginLeft : 16,
    marginTop : Platform.OS === 'ios' ? 40 : 20,
  },
  rowcontatiner: {
    flexDirection : 'row',
  },
  al_button_1 : {
    marginLeft : 16,
    marginTop : Platform.OS === 'ios' ? 10 : 0,
    
  },
  al_button_2 : {
    marginLeft : 10,
    marginTop : Platform.OS === 'ios' ? 10 : 0,
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontFamily:'NotoSansKR_400Regular',
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
  
    const width=Dimensions.get('window').width;

    return <Home width={width}/>;
};

const ranking_list = styled.View`

  flex:1;
  height: 200px;

`;

const Home = ({ navigation }) => {
    
 
  return (
      <SafeAreaView>
        <ScrollView>
        <SliderBox images={[
          require('../image/big_picture.png'),
          require('../image/big_picture2.png'),
          require('../image/big_picture3.png')  
        ]}
        
        autoplay
        sliderBoxHeight={wp('100%')/375*200}
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
      
      <ScrollView horizontal = {true} style={styles.rowcontatiner}>
        <TouchableOpacity style={styles.al_button_1} >
          <Image
              style={{height: 128, width: 96, borderRadius : 5,}}
              source={require('../image/al_1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.al_button_2}> 
          <Image
              style={{height: 128, width: 96, borderRadius : 5, }}
              source={require('../image/al_2.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.al_button_2}>
          <Image
              style={{height: 128, width: 96, borderRadius : 5, }}
              source={require('../image/al_3.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.al_button_2}> 
          <Image
              style={{height: 128, width: 96, borderRadius : 5, }}
              source={require('../image/al_2.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.al_button_2}>
          <Image
              style={{height: 128, width: 96, borderRadius : 5, }}
              source={require('../image/al_3.png')}
          />
        </TouchableOpacity>

      </ScrollView>

      <Text style={styles.subtitle}>알고리즘 랭킹</Text>
      <Container>
        <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
        tabBarTextStyle={styles.tabBarTextStyle}

        >

          <Text tabLabel={'적중률'} >
            1111
            
          </Text>
          <Text tabLabel={'수익률'} >2222</Text>
          <Text tabLabel={'정밀도'} >3333</Text>
          
        </ScrollableTabView>
      </Container>
      
      <Text style={styles.subtitle}>알고리즘 랭킹</Text>
      <Text style={styles.subtitle}>알고리즘 랭킹</Text>

      </ScrollView>
      </SafeAreaView> 
        
      
    );
        
  };
  
  export default Home;