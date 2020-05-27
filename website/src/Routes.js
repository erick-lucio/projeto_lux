/*Component imports */
import React,{useState} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './components/Login_Screen';
import Register from './components/Register_screen';
import PageNotFound from './components/Page404';
import Footer from './components/Footer';
import Example from './components/Testboot';
import {createBrowserHistory} from 'history';
import Header from './components/Header';
import MainPage from './components/MainPage';

/*css imports */
import './components/index.css';

/*functions import */



export default function Routes(){
    const [] = useState([])
    const history = createBrowserHistory();
    return(
        <BrowserRouter history={history} >     
    
        <Header/>
        <Switch>
             <Route exact path="/main" component={MainPage}/>  
             <Route exact path="/register" component={Register}/>
             <Route exact path="/login" component={Login}/>
             <Route exact path="/" component={Example}/>       
                
             <Route component={PageNotFound}/>
             
             
        </Switch>
        <Footer/>
   
        
        
        
        
        
        
        </BrowserRouter>                        
         );
  
}