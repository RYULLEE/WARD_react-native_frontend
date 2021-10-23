import React, { useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import { View, Alert, TouchableOpacity, Text, StyleSheet,  Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Input} from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhiteSpace } from '../utils/common';
import { signup } from '../utils/firebase';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  background-color: #ffffff;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  fontFamily: NotoSansKR_400Regular;
  margin-bottom: 10px;
  margin-left: 32px;

  color: #9B111E;
`;
const styles = StyleSheet.create({
  
  signup_button: {
    marginTop: 40,
    width: '92%',
    height: 40,
    justifyContent : 'center',
    marginBottom: 16,
    backgroundColor: '#000000',
    borderRadius : 5,
  },
  signup_text: {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  each_container : {
    marginBottom: 30,
    width : wp('100')-32,
    //justifyContent: 'center',
    marginLeft : 16,
    marginRight: 16,
    //backgroundColor : 'red',
    borderBottomWidth : 2,
    
  },
});

const Signup = ({Login}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const didMountRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    if (didMountRef.current){
  let _errorMessage = '';
  if (!name) {
    _errorMessage = 'Please enter your name.';
  } else if (!validateEmail(email)) {
    _errorMessage = 'Please verify your email.';
  } else if (password.length < 6) {
    _errorMessage = 'The password must contain 6 characters at least.';
  } else if (password !== passwordConfirm) {
    _errorMessage = 'Passwords need to match.';
  } else {
    _errorMessage = '';
  }
  setErrorMessage(_errorMessage);
}else{
  didMountRef.current = true;
}
  }, [name, email, password, passwordConfirm]);
  
  useEffect(() => {
    setDisabled(
      !(name && email && password && passwordConfirm && !errorMessage)
    );
  }, [name, email, password, passwordConfirm, errorMessage]);

  const _handleSignupButtonPress = async () => {
    setLoading(true);
    try{
      const user = await signup({email, password, name});
      console.log(user);
      Alert.alert('Signup Success', user.email);
      navigation.navigate('Login');
      setLoading(false);
    } catch(e){
      Alert.alert('Signup Error', e.message);
      setLoading(false);
    } 
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}} extraScrollHeight = {20}>
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
      
      <View style={styles.each_container}>
      <Input
        //label="Name"
        value={name}
        onChangeText={text => setName(text)}
        onSubmitEditing={() => {setName(name.trim());
        emailRef.current.focus();}}
        onBlur={() => setName(name.trim())}
        placeholder="Name"
        returnKeyType="next"
       />
       </View>

       <View style={styles.each_container}>
      <Input
        ref={emailRef}
        //label="Email"
        value={email}
        onChangeText={text => setEmail(removeWhiteSpace(text))}
        onSubmitEditing={() => passwordRef.current.focus()}
        placeholder="Email"
        returnKeyType="next"
      />
      </View>

      <View style={styles.each_container}>
      <Input
        ref={passwordRef}
        //label="Password"
        value={password}
        onChangeText={text => setPassword(removeWhiteSpace(text))}
        onSubmitEditing={() => passwordConfirmRef.current.focus()}
        placeholder="Password"
        returnKeyType="next"
        isPassword
      />
      </View>

      <View style={styles.each_container}>
       <Input
        ref={passwordConfirmRef}
        //label="Password Confirm"
        value={passwordConfirm}
        onChangeText={text => setPasswordConfirm(removeWhiteSpace(text))}
        onSubmitEditing={_handleSignupButtonPress}
        placeholder="Password_Confirm"
        returnKeyType="done"
        isPassword
      />
      </View>
      <ErrorText>{errorMessage}</ErrorText>

      <TouchableOpacity style={styles.signup_button} onPress= {_handleSignupButtonPress}>
        <Text style={styles.signup_text} >회원가입</Text>
      </TouchableOpacity>
    </Container>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default Signup;