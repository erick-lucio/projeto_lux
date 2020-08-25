import React,{useEffect} from 'react';
import { Text } from 'react-native';
import {useHistory,useLocation} from 'react-router-native';
import { TabMain ,TextView,TabsViews,TouchButton} from './styles';

const tabBar: React.FC = () => {
  const history = useHistory();
  var locatin = useLocation();

  function goMain(){
    history.push("/")
  }
  function goLogin(){
    history.push("/login")
    
  }
  function numero2(){
    console.log(locatin.pathname)
  }
  return (
    <TabMain>
      <TabsViews borderTopWidth={locatin.pathname=="/"?true:false}>
        <TouchButton 
          onPress={()=>goMain()}        
          underlayColor={"#03fc77"}
        >
          <TextView>
              Home
          </TextView>
        </TouchButton>
      </TabsViews>
      <TabsViews borderTopWidth={locatin.pathname=="/login"?true:false}>
        <TouchButton  
          onPress={()=>goLogin()}
          underlayColor={"#03fc77"}
        >
          <TextView>
            Login
          </TextView>
        </TouchButton>
      </TabsViews>
      <TabsViews>
        <TouchButton  
          onPress={()=>numero2()}
          underlayColor={"#03fc77"}
        >
          <TextView>
            alerta
          </TextView>
        </TouchButton>
      </TabsViews>
    </TabMain>
  );
};

export default tabBar;
