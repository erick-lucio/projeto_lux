import styled from 'styled-components/native';
import {Link} from 'react-router-native';

interface Myprops {
  statusHeight: any
}

export const Container = styled.View<Myprops>`
  font-size: 35px;
  text-align: center;
  color: palevioletred;
  height: 90%;
  padding-top: ${props => props.statusHeight || 0}px;
  display:flex;
`;

export const TouchButton = styled.TouchableHighlight`
  

`
export const TextView = styled.Text`
  font-size: 35px;
  text-align: center;
  color: palevioletred;
  background-color:rgba(50,130,20,0.5);
`;


