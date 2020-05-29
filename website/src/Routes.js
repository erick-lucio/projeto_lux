/*Component imports */
import React,{useState} from 'react';
import {BrowserRouter,Switch,Route,MemoryRouter} from 'react-router-dom';
import Login from './components/Login_Screen';
import SignIn from './components/SignIn_Screen';
import PageNotFound from './components/Page404';
import Footer from './components/Footer';
import Example from './components/Testboot';
import {createBrowserHistory} from 'history';
import Header from './components/Header';
import MainPage from './components/MainPage';
import About from './components/About';

/*css imports */
import './components/index.css';

/*functions import */



export default function Routes(){
    const [] = useState([])
    const history = createBrowserHistory();
   // window.location.pathname= "/";
   // console.log()
    
    return(
        <BrowserRouter history={history} basename="/">     
    
        <Header/>
        <Switch>
             <Route exact path="/main" component={MainPage}/>  
             <Route exact path="/signin" component={SignIn}/>
             <Route exact path="/login" component={Login}/>
             <Route exact path="/about" component={About}/>
             <Route exact path="/" component={Example}/>       
                
             <Route component={PageNotFound}/>
             
             
        </Switch>
        <Footer/>
   
        
        
        
        
        
        
        </BrowserRouter>                        
         );
  
}