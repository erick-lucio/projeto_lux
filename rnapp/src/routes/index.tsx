
import React from 'react'
import {NativeRouter,Switch,Route} from 'react-router-native';
import loginScreen from '../screens/login/index'
import mainScreen from '../screens/main/index'
import tabBar from '../components/tabBar/index';

const Routes:React.FC = ()=>{

    return(
       <NativeRouter>
            <Switch>
                <Route exact path="/" component={mainScreen}/>
                <Route exact path="/login" component={loginScreen}/>
            </Switch>
        <Route component={tabBar}/>
       </NativeRouter> 
        

       
    );
};

export default Routes