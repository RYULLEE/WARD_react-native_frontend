import React from 'react';
import { Button, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';

const Container = styled.SafeAreaView`
  
  align-items: center;
`;

const styles = StyleSheet.create({ 
  subtitle: {
    fontSize: 18,
    fontFamily: 'NotoSansKR_500Medium',
    marginLeft : 16,
    marginTop : Platform.OS === 'ios' ? 15 : 5,
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
  }
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

const Home = ({ navigation }) => {
    
  
  return (
      <SafeAreaView>
        
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
      <Text style={styles.subtitle}>최근 본 알고리즘</Text>
      
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


      </SafeAreaView> 
        
      
    );
    
  };
  
  export default Home;