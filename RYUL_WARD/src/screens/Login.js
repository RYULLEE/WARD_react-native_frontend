import React,{useState, useRef, useContext} from 'react';
import { TouchableOpacity, Alert, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, View, Button, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Image, Input } from '../components'
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhiteSpace } from '../utils/common'
import { login } from '../utils/firebase'
import Spinner from 'react-native-loading-spinner-overlay';
import { UserContext } from '../contexts';



const Container = styled.View`
  flex:1;
  padding: 40px 0px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
const ErrorText = styled.Text`
  align-items:flex-start;
  width: 100%;
  fontFamily: NotoSansKR_400Regular;
  margin-bottom: 10px;
  margin-left: 32px;

  color: #9B111E;
`;
const styles = StyleSheet.create({
  
  login_button: {
    marginTop: 50,
    width: '92%',
    backgroundColor: '#808080',
    marginBottom: 16,
  },
  signup_button: {
    flexDirection: 'row',
    justifyContent:'space-around',
    //backgroundColor: '#808080',
  },
  login_text: {
    fontFamily: 'NotoSansKR_500Medium',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#000000',
  },
  ment: {
    textAlign: 'left',
    alignSelf: 'stretch',
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 18,
    color: '#000000',
    marginTop: -20,
    marginLeft: 16,
    //backgroundColor: '#000000',
  },
  view_ment: {
    width: '100%',
    height: '15%',
    //marginTop: 50,
    marginBottom: 10,
    justifyContent: 'center',
    //backgroundColor: '#808080',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  ask_ment: {
    fontFamily: 'NotoSansKR_400Regular',
    fontSize: 14,
    color: '#000000',
    
  },
  signup_ment: {
    textDecorationLine: 'underline',
    fontFamily: 'NotoSansKR_400Regular',
    fontSize: 14,
    color: '#000000',
  },
  ment_button:{
    margin: 10,
  },
});

const Login = ({Signup}) => {
  const {dispatch} = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const [errorMessage, seterrorMessage] = useState('');
  const {user} = useContext(UserContext);
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

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const _handleLogin = async()=>{
    setLoading(true);
    try {
      const user = await login({email, password});
      dispatch(user);
      setLoading(false);
      Alert.alert('Login Success', user.email);
      navigation.navigate('Etc')
    } catch(e){
      setLoading(false);
      Alert.alert('Login Error', e.message)
    } 
  };

  
  
  return (
    
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}} extraScrollHeight={20}>
    
    <Spinner
      //visibility of Overlay Loading Spinner
      visible={loading}
      //Text with the Spinner
      textContent={'Loading...'}
      //Text style of the Spinner Text
      textStyle={styles.spinnerTextStyle}
    />

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <View style={styles.view_ment}>
      <Text style={styles.ment}>안녕하세요.</Text>
      <Text style={styles.ment}>모두를 위한 투자 알고리즘, 와드입니다.</Text>
      </View>
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
        isPassword
      />
      <TouchableOpacity style={styles.login_button} onPress= {_handleLogin}>
        <Text style={styles.login_text}>로그인</Text>
      </TouchableOpacity>

      <View style={styles.signup_button}>
        <View style={styles.ment_button}>
          <Text style={styles.ask_ment}>아직 WARD 계정이 없으신가요?</Text>
        </View>
        <View style={styles.ment_button}>
      <TouchableOpacity>
        <Text style={styles.signup_ment} onPress = {()=> navigation.navigate('Signup')}>회원가입</Text>
      </TouchableOpacity>
      </View>
      </View>

    </Container>
    </TouchableWithoutFeedback>
    
    </KeyboardAwareScrollView>
    
  );
};



export default Login;