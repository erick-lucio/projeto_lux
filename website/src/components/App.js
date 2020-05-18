import React,{useState} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './Page404';

import {BrowserRouter,Switch,Route} from 'react-router-dom';


import './components/Defaultcss.css'
import './components/LayoutTemplate.css'


export default function App(){
    const [] = useState([])

    return(
        <BrowserRouter>     
 
        <Header/>   
        <Switch>
             <Route exact path="/acelera_dev_julio" component={AcelDev}/>
             <Route exact path="/" component={Main}/>
             <Route exact path="/about" component={About}/>            
             <Route component={PageNotFound}/>

        </Switch>
        
        <Footer /> 
        
        
        
        
        
        
        </BrowserRouter>
      
        

        

        
     
    );
  
}