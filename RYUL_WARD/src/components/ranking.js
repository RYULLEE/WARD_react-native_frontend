import React,{Component} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({ 
    subtitle: {
      fontSize: 16,
      fontFamily: 'NotoSansKR_500Medium',
      //marginLeft : 16,
      //marginTop : Platform.OS === 'ios' ? 25 : 5,
    },
    subtitle_2: {
        fontSize: 10,
        fontFamily: 'NotoSansKR_400Regular',
        marginTop: 8,
        //marginLeft : 16,
        //marginTop : Platform.OS === 'ios' ? 25 : 5,
      },
    subtitle_3_1: {
        fontSize: 9,
        fontFamily: 'NotoSansKR_400Regular',
        marginTop: 12,
        //marginLeft : 16,
        //marginTop : Platform.OS === 'ios' ? 25 : 5,
        },
    subtitle_3_2: {
        fontSize: 9,
        fontFamily: 'NotoSansKR_400Regular',
        marginTop: 6,
        //marginLeft : 16,
        //marginTop : Platform.OS === 'ios' ? 25 : 5,
        },
  });

const RowContainer = styled.View`

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

const Ranking = () => {

    return(
        <Large_Container>
        <RowContainer width={width}>
            <Image
              style={{height:wp('100%')/373*75 , width: wp('100%')/373*130, borderRadius : 10,}}
              source={require('../image/ranking_1.png')}
            />
            <Container>
                <Text style={styles.subtitle}>WARD Tier System</Text>
                <Text style={styles.subtitle_2}>ALL|ALL|딥러닝</Text>
                <RowContainer width={width}>
                    <Text style={styles.subtitle_3_1}>1개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,borderColor:'black',borderWidth: 0.2,marginTop:12,}}
                    source={require('../image/bar_1.png')}
                    />
                </RowContainer>
                <RowContainer width={width}>
                    <Text style={styles.subtitle_3_2}>6개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,borderColor:'black',borderWidth: 0.2,marginTop:6,}}
                    source={require('../image/bar_2.png')}
                    />
                </RowContainer>
            </Container>
        </RowContainer>
        
        <RowContainer width={width}>
            <Image
              style={{height:wp('100%')/373*75 , width: wp('100%')/373*130, borderRadius : 10,}}
              source={require('../image/ranking_1.png')}
            />
            <Container>
                <Text style={styles.subtitle}>WARD Tier System</Text>
                <Text style={styles.subtitle_2}>ALL|ALL|딥러닝</Text>
                <RowContainer width={width}>
                    <Text style={styles.subtitle_3_1}>1개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,borderColor:'black',borderWidth: 0.2,marginTop:12,}}
                    source={require('../image/bar_1.png')}
                    />
                </RowContainer>
                <RowContainer width={width}>
                    <Text style={styles.subtitle_3_2}>6개월</Text>
                    <Image
                    style={{height:wp('100%')/373*8 , width: wp('100%')/373*120, borderRadius: 10,borderColor:'black',borderWidth: 0.2,marginTop:6,}}
                    source={require('../image/bar_2.png')}
                    />
                </RowContainer>
            </Container>
        </RowContainer>



        </Large_Container>

    );

};

export default Ranking;