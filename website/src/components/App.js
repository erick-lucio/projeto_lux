/*Component imports */
import React,{useState} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './Login_Screen';
import Register from './Register_screen';
import PageNotFound from './Page404';
import Footer from './Footer';
/*css imports */





export default function App(){
    const [] = useState([])
    
    return(
        <BrowserRouter>     
    
       
        <Switch>
             <Route exact path="/register" component={Register}/>
             <Route exact path="/" component={Login}/>
                     
             <Route component={PageNotFound}/>

        </Switch>
        <Footer/>
   
        
        
        
        
        
        
        </BrowserRouter>                        
         );
  
}