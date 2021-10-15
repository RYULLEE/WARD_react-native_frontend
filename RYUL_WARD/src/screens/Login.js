import React,{useState, useRef} from 'react';
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Image, Input } from '../components'
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhiteSpace } from '../utils/common'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
`;
const ErrorText = styled.Text`
  align-items:flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #9B111E;
`;
const styles = StyleSheet.create({
  
  login_button: {
    margin: 16,
    backgroundColor: '#808080',
  },
  login_text: {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize: 18,
    marginLeft: 32,
    marginRight: 32,
    color: '#FFFFFF',
  },

});

const login = ({Signup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const [errorMessage, seterrorMessage] = useState('');

  const _handleEmailChange = email => {
    const changedEmail = removeWhiteSpace(email);
    setEmail(changedEmail);
    seterrorMessage(
      validateEmail(changedEmail) ? '':'이메일 주소가 올바르지 않습니다.'
    );
  };

  const _handlePasswordChange = password => {
    setPassword(removeWhiteSpace(password));
  };

  const _handleLogin = ()=>{};

  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}} extraScrollHeight={20}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Image url ={images.logo_black} />
      <Input
        label = "Email"
        value = {email}
        onChangeText={_handleEmailChange}
        onSubmitEditing={()=>passwordRef.current.focus()}
        placeholder = "Email"
        returnKeyType = "next"
      />
      <ErrorText>{errorMessage}</ErrorText>
      <Input
        ref={passwordRef}
        label = "Password"
        value = {password}
        onChangeText={_handlePasswordChange}
        onSubmitEditing={()=>{}}
        placeholder = "Password"
        returnKeyType = "done"
      />
      <TouchableOpacity style={styles.login_button} onPress= {_handleLogin}>
        <Text style={styles.login_text}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login_button} onPress= {_handleLogin}>
        <Text style={styles.login_text} onPress = {()=> navigation.navigate('Signup')}>회원가입</Text>
      </TouchableOpacity>
    </Container>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};



export default login;