import React from 'react';
import { Text ,StatusBar} from 'react-native';
import {useHistory} from 'react-router-native';
import { Container ,TextView,TouchButton} from './styles';

const login: React.FC = () => {
  const history = useHistory();
  function goMain(){
    history.push("/")
  }
  
  return (
    <Container  statusHeight={StatusBar.currentHeight}>
  
        <TextView>
          loging
        </TextView>
      

    </Container>
  );
};

export default login;
