import React from 'react';
import { Text ,View,ScrollView,Image} from 'react-native';

import { MainContainer ,Boxes,ScrolledViewStyled} from './styles';
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
const Feed: React.FC<feedProps> = (props) => {
  
  return (
    <ScrolledViewStyled>
    <MainContainer>
        {props.arrayObject.map((element,key) => {
          return(<><Text key={key}>{element.name}</Text><Image source={{uri:require(element.img)}}></Image><Text>{element.distance} Km</Text><Text>{element.job}</Text><Text>{element.aboutMe}</Text></>)
          
        })}      
    </MainContainer>
    </ScrolledViewStyled>
   

  );
};

export default Feed;
