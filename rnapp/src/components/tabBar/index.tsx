import React from 'react';
import { Text } from 'react-native';
import {useHistory} from 'react-router-native';
import { TabMain ,TextView,TabsViews,TouchButton} from './styles';

const tabBar: React.FC = () => {
  const history = useHistory();
  function goMain(){
    history.push("/")
  }
  function goLogin(){
    history.push("/login")
  }
  return (
    <TabMain>
      <TabsViews>
        <TouchButton 
          onPress={()=>goMain()}        
          underlayColor={"#03fc77"}
        >
          <TextView>
              Home
          </TextView>
        </TouchButton>
      </TabsViews>
      <TabsViews>
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
          onPress={()=>alert("Teste alerta")}
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
