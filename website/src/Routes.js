/*Component imports */
import React,{useState} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './components/Login_Screen';
import Register from './components/Register_screen';
import PageNotFound from './components/Page404';
import Footer from './components/Footer';
import Example from './components/Testboot';

/*css imports */
import './components/index.css';

/*functions import */



export default function Routes(){
    const [] = useState([])
    
    return(
        <BrowserRouter>     
    
       
        <Switch>
             <Route exact path="/register" component={Register}/>
             <Route exact path="/teste" component={Example}/>
             <Route exact path="/" component={Login}/>       
                
             <Route component={PageNotFound}/>
             
             Figma
        </Switch>
        
   
        
        
        
        
        
        
        </BrowserRouter>                        
         );
  
}