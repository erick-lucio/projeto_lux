import React,{useState} from 'react';

//import Header from './components/Header';
//import Footer from './components/Footer';
import PageNotFound from './Page404';

import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Login from './Login_Screen';
import Register from './Register_screen';
//import './components/Defaultcss.css'
//import './components/LayoutTemplate.css'


export default function App(){
    const [] = useState([])

    return(
        <BrowserRouter>     
 
       
        <Switch>
             <Route exact path="/register" component={Register}/>
             <Route exact path="/" component={Login}/>
                     
             <Route component={PageNotFound}/>

        </Switch>
        
   
        
        
        
        
        
        
        </BrowserRouter>
      
        

        

        
     
    );
  
}