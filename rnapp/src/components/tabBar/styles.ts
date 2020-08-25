import styled from 'styled-components/native';

interface borderTop{
    borderTopWidth?:boolean  
}

export const TabMain = styled.View`
    width:100%;
    height:10%;
    background-color:rgba(50,220,250,0.35);
    display:flex;
    flex-direction:row;
    align-items:center;
    
`;
export const TextView = styled.Text`
  font-size: 20px;
  text-align: center;
  color: rgb(0,0,0);
`;
export const TabsViews = styled.View<borderTop>`
    flex:1;
    border-color:#fca;
    border-top-width:${props=>props.borderTopWidth?4:0}px;
`;
export const TouchButton = styled.TouchableHighlight`
    height:100%;
    padding-top:10%;

`