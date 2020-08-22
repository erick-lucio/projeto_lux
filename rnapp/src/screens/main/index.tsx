import React from 'react';
import { Text ,View,TouchableHighlight,TextInput,Platform, StatusBar} from 'react-native';
import {Link,useHistory} from 'react-router-native';
import { Container,TextView ,TouchButton} from './styles';



const Main: React.FC = () => {
  const history = useHistory();
  function goLogin(){
    history.push("/login")
  }
  return (
    <Container statusHeight={StatusBar.currentHeight}>   
      <View>
         <TouchButton
          underlayColor="#5fa"
          onPress={()=>goLogin()}
         >
           
              <TextView>
                  Ir para Login
              </TextView>
         
         </TouchButton>
      </View>
      <TextInput
      placeholder="Poe seu nome ai menor"
      ></TextInput>
    </Container>
  );
};

export default Main;
