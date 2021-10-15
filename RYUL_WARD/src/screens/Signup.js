import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import { Image, Input} from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhiteSpace } from '../utils/common';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #808080;
`;

const signup = ({Login}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const _handleSignupButtonPress = () => {};

  return (
    <Container>
      <Input
        label="Name"
        value={name}
        //onChangeText={text => setName(text)}
        //onSubmitEditing={() => {
          //setName(name.trim());
        //  emailRef.current.focus();
        //}}
        //onBlur={() => setName(name.trim())}
        placeholder="Name"
        returnKeyType="next"
       />
      <Input
        ref={emailRef}
        label="Email"
        value={email}
        //onChangeText={text => setEmail(removeWhiteSpace(text))}
        //onSubmitEditing={() => passwordRef.current.focus()}
        placeholder="Email"
        returnKeyType="next"
      />
      <Input
        ref={passwordRef}
        label="Password"
        value={password}
        //onChangeText={text => setPassword(removeWhiteSpace(text))}
        //onSubmitEditing={() => passwordConfirmRef.current.focus()}
        placeholder="Password"
        returnKeyType="done"
        //isPassword
      />
       <Input
        ref={passwordConfirmRef}
        label="Password Confirm"
        value={passwordConfirm}
        //onChangeText={text => setPasswordConfirm(removeWhiteSpace(text))}
        //onSubmitEditing={_handleSignupButtonPress}
        placeholder="Password"
        returnKeyType="done"
        isPassword
      />
      <ErrorText>{errorMessage}</ErrorText>

    </Container>
  );
};

export default signup;