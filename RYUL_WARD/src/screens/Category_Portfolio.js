import React,{Component,useEffect,useState} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import { DB } from '../utils/firebase';
import {images} from '../utils/images'
import { color } from 'react-native-reanimated';


const width = Dimensions.get('window').width;


const Container = styled.SafeAreaView`
  align-items: center;
`;

const styles = StyleSheet.create({
  
  subtitle: {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 18,
    marginLeft: 16,
    marginTop: 40,
  },
  rowcontatiner: {
    flexDirection: 'row',
    width:wp('100%')-32,
    marginLeft:16,
    marginRight:16,

  },
  select_box:{
    width:wp('30%'),
    //marginLeft:10,
    backgroundColor:'#ffffff'
  },
  select_box_1:{
    width:wp('25%'),
    marginLeft:0,
    backgroundColor:'#ffffff',
    marginRight:0,
  },
  select_box_text:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 15,
    marginLeft:-10,
  },
  select_box_text_under:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 15,
  },
  tabBarTextStyle: {
    fontSize: 15,
    fontFamily:'NotoSansKR_500Medium',
    includeFontPadding: false,
  },
  top10text_1:{
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    
    fontSize: 12,
    marginLeft: 4,
    marginTop: 8,
    //backgroundColor: '#000000',
  },
  top10text_2:{
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    
    fontSize: 10,
    marginLeft: 4,
    marginTop: 3,
    //backgroundColor: '#000000',
    
  },
  tier_bigcontainer : {
    width: wp('100%')-32,
  },
  tier_rowcontainer : {
    justifyContent: 'space-around',
    alignItems : 'center',
    //backgroundColor: '#000000',
  },
  item_box : {
    marginRight: (wp('100%')-32-3*wp('100%')/375*109)/2,
    marginTop: 25,
    marginBottom: 10
  },
});

const Tier_options1 = ["ALL", "단기", "중기", "장기"];
const Tier_options2 = ["ALL", "시세", "제무제표","기타 정보"];
const Tier_options3 = ["ALL", "딥러닝", "머신 러닝","단순 통계"];

const icon=() => {

  return (
    <Image  style={{
      height:14, width: 14,}}
      source={require('../image/arrow_under.png')}
    />
  );
};


const Item = ({item: {id, name, invest_term, used_data, algo_type, empty}, onPress}) => {
  if (empty == true){
    return null;
  }
  const prefix = 'https://firebasestorage.googleapis.com/v0/b/ward-1-2bf63.appspot.com/o';
  let url_name = name.replace(/ /g, "");
  let img_url = `${prefix}/algorithm_profile%2F${url_name}.png?alt=media`;
  console.log(img_url);
  return(
      <TouchableOpacity style={styles.item_box} onPress= {()=> onPress({id, name, algo_type, invest_term, used_data})}>
        <Image
            style={{height:wp('100%')/375*109 , width: wp('100%')/375*109, borderRadius : 10,}}
            source= {{uri: img_url}}
          />
          <Text style={styles.top10text_1}>{name}</Text>
          <Text style={styles.top10text_2}>{invest_term}|{used_data}|{algo_type}</Text>
      </TouchableOpacity>
  );
};
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  console.log(data);
  return data;
}

const Page_1=({Home, CATEGORY}) => {
  const handleItemPress = params => {
    navigation.navigate('ALGORITHM', params);
};

  const [algo_info, setAlgo_info] = useState([]);
  useEffect(()=> {
    const unsubscribe = DB.collection('portfolio_algo')
      .orderBy('name')
      .onSnapshot(snapshot =>{
        const list =[];
        snapshot.forEach(doc=>{
          let obj = doc.data();
          obj["id"] = doc.id;
          list.push(obj);
          console.log(list)
        });
        setAlgo_info(list);
      });
      return ()=> unsubscribe();
  }, []);

  const navigation = useNavigation();
  return (

      <View >
        <View style={styles.rowcontatiner}>
        <FlatList
          //horizontal
          keyExtractor={item => item['id']}
          data = {formatData(algo_info, 3)}
          renderItem = {({item}) => (
            <Item item = {item} onPress={handleItemPress} />
          )}
          numColumns = {3}
          />
        </View>
      </View>
        
  );
};


const Tier_system = ({ navigation }) => {

  const [algo_info, setAlgo_info] = useState([]);
  useEffect(()=> {
    const unsubscribe = DB.collection('tier_system')
      .orderBy('name')
      .onSnapshot(snapshot =>{
        const list =[];
        snapshot.forEach(doc=>{
          list.push(doc.id);
        });
        setAlgo_info(list);
      });
      return ()=> unsubscribe();
  }, []);

  const numberOfFullRows = Math.floor(algo_info.length / 3);
  //const numberOfFullRows = 0;
    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor:'#ffffff',}}>
          <TouchableOpacity>
          <Image  style={{
            height:wp('100%')/375*200, width: wp('100%'),}}
            source={{uri: images.Portfolio_Banner}}
          />
          </TouchableOpacity>
          <View style={styles.rowcontatiner}>
          <SelectDropdown
            data={Tier_options1}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            defaultButtonText={'투자 기간'}
            buttonStyle={styles.select_box_1}
            buttonTextStyle={styles.select_box_text}
            rowTextStyle={styles.select_box_text_under}
            renderDropdownIcon={icon}
            
          />
          <SelectDropdown
            data={Tier_options2}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            defaultButtonText={'사용 데이터'}
            buttonStyle={styles.select_box}
            buttonTextStyle={styles.select_box_text}
            rowTextStyle={styles.select_box_text_under}
            renderDropdownIcon={icon}
          />
          <SelectDropdown
            data={Tier_options3}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            defaultButtonText={'알고리즘 종류'}
            buttonStyle={styles.select_box}
            buttonTextStyle={styles.select_box_text}
            rowTextStyle={styles.select_box_text_under}
            renderDropdownIcon={icon}
          />
          </View>
          
          <View style={{height: 50+(wp('100%')/375*109+95)*numberOfFullRows}}>
          <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
            
            tabBarTextStyle={styles.tabBarTextStyle}
            tabBarUnderlineStyle = {{ backgroundColor: "#4D7D5D"}}
            tabBarActiveTextColor = "#4D7D5D"
          >
            <Page_1 tabLabel={'• 적중률순'}/>
              
            <Page_1 tabLabel={'• 수익률순'}/>

            <Page_1 tabLabel={'• 정밀도순'}/>

            <Page_1 tabLabel={'• 업로드순'}/>

        </ScrollableTabView>
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  };
  
  function onChange() {
    return (val) => setSelectedTeam(val)
  }

  export default Tier_system;