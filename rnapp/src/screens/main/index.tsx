import React from 'react';
import { Text ,View,TouchableHighlight,TextInput,Platform, StatusBar,KeyboardAvoidingView} from 'react-native';
import {Link,useHistory} from 'react-router-native';
import { Container,TextView ,TouchButton} from './styles';
import Feed from '../../components/feed/index';

interface objItens{
  name:string;
  img:string;
  distance:number;
  job:string;
  aboutMe:string
}
interface feedProps{
  arrayObject:Array<objItens>
}

const Main: React.FC = () => {
  var arrayDeTeste = [
  {name:"Erick",img:"https://reactnative.dev/img/tiny_logo.png",distance:5,job:"Massagist",aboutMe:"I am a guy who are working in my spa from the last five years"},
  {name:"Joao",img:"https://reactnative.dev/img/tiny_logo.png",distance:5,job:"Massagist",aboutMe:"I am a guy who are working in my spa from the last five years"},
  {name:"Bruna",img:"https://reactnative.dev/img/tiny_logo.png",distance:5,job:"Massagist",aboutMe:"I am a guy who are working in my spa from the last five years"},
  {name:"lucas",img:"https://reactnative.dev/img/tiny_logo.png",distance:5,job:"Massagist",aboutMe:"I am a guy who are working in my spa from the last five years"},
  {name:"dameal",img:"https://reactnative.dev/img/tiny_logo.png",distance:5,job:"Massagist",aboutMe:"I am a guy who are working in my spa from the last five years"},
  {name:"calubelo",img:"https://reactnative.dev/img/tiny_logo.png",distance:5,job:"Massagist",aboutMe:"I am a guy who are working in my spa from the last five years"}]
  
  const history = useHistory();
  function goLogin(){
    history.push("/login")
  }
  const test = true
  if(test){
    return (
      <Container statusHeight={StatusBar.currentHeight}>   
        <TextView>Autonomos proximos a mim</TextView>
        <Feed arrayObject={arrayDeTeste}/>
        
      </Container>
    );
  }else{
    return (
      <Container statusHeight={StatusBar.currentHeight}>   

      </Container>
    );
  }

};

export default Main;
