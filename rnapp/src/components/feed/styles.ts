import styled from 'styled-components/native';
import {FlatList} from 'react-native'
export const MainContainer = styled.View`
 
  height:100%;
  display:flex;
  justify-content:space-between;
  flex:0 0  auto;
  margin-bottom:200px;
`;
export const Boxes = styled.View`
    justify-content:center;
    background-color:#fbdbd0;
    
`;
export const ScrolledViewStyled = styled.ScrollView`
  max-height:30%;
    
`;
export const FlatListStyled = styled(FlatList)`
  max-height:50%;
    
`;


