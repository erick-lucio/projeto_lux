import React, { useReducer } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
//Imgs
import ShopIcon from "./assets/icons/icons8-shop-96.png";
//Redux
import {reducerCounter,estadoInicialCounter} from './Redux/Counter'
import {reducerCart,estadoInicialCart} from './Redux/Cart'
import {reducerProducts,estadoInicialProducts} from './Redux/Products'
//Context
import { context1 } from "./Context/Context";
//Custom components
import MainLanding from "./Components/Pages/MainPage/MainLandingPage/index"
import StoreMain from "./Components/Pages/Store/Main/index";
import StoreCart from "./Components/Pages/Store/Cart/index";
import StoreHeader from "./Components/Pages/Store/Header/index.js";
import StoreProduct from "./Components/Pages/Store/Product/index.js";
import NotFound from "./Components/Pages/Store/NotFound404/index.js";



export default function Routes() {
  document.getElementById("favicon").setAttribute("href", ShopIcon);
  const [stateCounter, dispatchCounter] = useReducer(
    reducerCounter,
    estadoInicialCounter
  );
  const [stateProducts, dispatchProducts] = useReducer(
    reducerProducts,
    estadoInicialProducts
  );
  const [stateCart, dispatchCart] = useReducer(reducerCart, estadoInicialCart);

  const history = createBrowserHistory();
  //custom hook

  return (
    <HashRouter history={history}>
      <context1.Provider
        value={{
          stateCounter,
          dispatchCounter,
          stateProducts,
          dispatchProducts,
          stateCart,
          dispatchCart,
        }}
      >
        <Switch>
              <Route path="/store" component={StoreHeader}/>
              
        </Switch>
        <Switch>

          <Route exact path="/" component={MainLanding} /> 
          <Route exact path="/admin_painel" component={StoreMain} />

          
          <Route exact path="/store" component={StoreMain} />
          <Route exact path="/store/cart" component={StoreCart} />
          <Route exact path="/store/product/:id_param?" component={StoreProduct} />
          <Route path="*" component={NotFound} />
        </Switch>
      </context1.Provider>
    </HashRouter>
  );
}
