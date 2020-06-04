/*Component imports */
import React,{useState} from 'react';
import {BrowserRouter,Switch,Route,MemoryRouter} from 'react-router-dom';
import Login from './components/loginPage/Login_Screen';
import SignIn from './components/signInPage/SignIn_Screen';
import PageNotFound from './components/404Page/Page404';
import Footer from './components/footer/Footer';
import Example from './components/startPage/Testboot';
import {createBrowserHistory} from 'history';
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import About from './components/aboutPage/About';
import Test_page from './components/testPage/Test_page';


/*css imports */
import './index.css';

/*functions import */
import store from './store/index';
import { Provider } from 'react-redux'

export default function Routes(){
    const [] = useState([])
    const history = createBrowserHistory();
   // window.location.pathname= "/";
   // console.log()

    return(
        <Provider store={store}>
            <BrowserRouter history={history} basename="/">     
        
            <Header/>
            <Switch>
                <Route exact path="/pagina_teste" component={Test_page}/>  
                <Route exact path="/main" component={MainPage}/>  
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/" component={Example}/>       
                    
                <Route component={PageNotFound}/>
                
                
            </Switch>
            <Footer/>
    
            
            
            
            
            
            
            </BrowserRouter>     
        </Provider>                  
         );
  
}