import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Tier_system = ({ navigation }) => {
    return (
        
      <Container>
        <StyledText>Tier_system</StyledText>
        <Button
          title="go to the home screen"
          onPress={() => navigation.navigate('Home')}
        />
      </Container>
    );
  };
  
  export default Tier_system;