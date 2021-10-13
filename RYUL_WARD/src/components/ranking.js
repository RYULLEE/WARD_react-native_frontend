import React,{Component, useState} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';


const width = Dimensions.get('window').width;
const styles = StyleSheet.create({ 
    subtitle: {
      fontSize: 16,
      fontFamily: 'NotoSansKR_500Medium',
      
      margin:0,
      padding:0,
      includeFontPadding: false,
      
      //lineHeight: 0,
      //marginLeft : 16,
      //marginTop : Platform.OS === 'ios' ? 25 : 5,
    },
    subtitle_2: {
        fontSize: 10,
        fontFamily: 'NotoSansKR_400Regular',
        
        margin:0,
        padding:0,
        includeFontPadding: false,
        lineHeight: 30,
        //lineHeight: 0,
        //marginLeft : 16,
        //marginTop : Platform.OS === 'ios' ? 25 : 5,
      },
    subtitle_3_1: {
        fontSize: 9,
        fontFamily: 'NotoSansKR_400Regular',
        marginTop: 12,
        
        includeFontPadding: false,
        //marginLeft : 16,
        //marginTop : Platform.OS === 'ios' ? 25 : 5,
        },
    subtitle_3_2: {
        fontSize: 9,
        fontFamily: 'NotoSansKR_400Regular',
        marginTop: 6,
        
        includeFontPadding: false,
        //marginLeft : 16,
        //marginTop : Platform.OS === 'ios' ? 25 : 5,
        },
  });

const RowContainer_1 = styled.View`

    flex-direction : row;
    align-items: center;
    justify-content: space-evenly;
    
    margin-top: 16;
    

`;

const RowContainer_2 = styled.View`

    flex-direction : row;
    align-items: center;
    justify-content: space-evenly;
    
    margin-top: 0;
   

`;

const Container = styled.View`

  margin-top: 0;
  align-items: flex-start;
  justify-content: center;
  
`;

const Large_Container = styled.View`

  margin-top: 0;
  align-items: center;
  
  
`;

const Ranking = ({navigation}) => {

    const [includeFontPadding, setIncludeFontPadding] = useState(false);
    return(
        <Large_Container>
        <TouchableOpacity>
        <RowContainer_1 width={width}>
            <Image
              style={{height:wp('100%')/373*90 , width: wp('100%')/373*156, borderRadius : 10,}}
              source={require('../image/ranking_1.png')}
            />
            <Container>
                <Text style={styles.subtitle}>WARD Tier System</Text>
                <Text style={styles.subtitle_2}>ALL|ALL|딥러닝</Text>
                <RowContainer_2>
                    <Text style={styles.subtitle_3_1}>1개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,borderColor:'black',marginTop:12,}}
                    source={require('../image/bar_1.png')}
                    />
                </RowContainer_2>
                <RowContainer_2>
                    <Text style={styles.subtitle_3_2}>6개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,borderColor:'black',marginTop:6,}}
                    source={require('../image/bar_2.png')}
                    />
                </RowContainer_2>
            </Container>
        </RowContainer_1>
        </TouchableOpacity>
        <TouchableOpacity>
        <RowContainer_1 width={width}>
            <Image
              style={{height:wp('100%')/373*90 , width: wp('100%')/373*156, borderRadius : 10,}}
              source={require('../image/ranking_2.png')}
            />
            <Container>
                <Text style={styles.subtitle}>유사도 활용 상승 예측</Text>
                <Text style={styles.subtitle_2}>ALL|시세|머신러닝</Text>
                <RowContainer_2>
                    <Text style={styles.subtitle_3_1}>1개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,borderColor:'black',marginTop:12,}}
                    source={require('../image/bar_3.png')}
                    />
                </RowContainer_2>
                <RowContainer_2>
                    <Text style={styles.subtitle_3_2}>6개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,borderColor:'black',marginTop:6,}}
                    source={require('../image/bar_4.png')}
                    />
                </RowContainer_2>
            </Container>
        </RowContainer_1>
        </TouchableOpacity>

        <TouchableOpacity>
        <RowContainer_1 width={width}>
            <Image
              style={{height:wp('100%')/373*90 , width: wp('100%')/373*156, borderRadius : 10,}}
              source={require('../image/ranking_3.png')}
            />
            <Container>
                <Text style={styles.subtitle}>2020 ESG 평가 지표</Text>
                <Text style={styles.subtitle_2}>장기|재무정보|단순 통계</Text>
                <RowContainer_2>
                    <Text style={styles.subtitle_3_1}>1개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,borderColor:'black',marginTop:12,}}
                    source={require('../image/bar_5.png')}
                    />
                </RowContainer_2>
                <RowContainer_2>
                    <Text style={styles.subtitle_3_2}>6개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,marginTop:6,}}
                    source={require('../image/bar_6.png')}
                    />
                </RowContainer_2>
            </Container>
        </RowContainer_1>
        </TouchableOpacity>
        </Large_Container>

    );

};

export default Ranking;