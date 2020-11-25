import React, { useReducer } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

//Imgs
import ShopIcon from "../assets/icons/icons8-shop-96.png";
//Redux

//Components
import NotFound from "../Components/Pages/Store/NotFound404/index.js";
import MainLandingPage from "../Components/Pages/MainPage/index.js";







export default function MainPages() {
    document.getElementById("favicon").setAttribute("href", ShopIcon);
  
    //custom hook
  
    return (
      <Switch>

      <Route exact path="/" component={MainLandingPage} /> 
      <Route exact path="/home/48/:id_param?" component={MainLandingPage} />
      <Route path="/home/*" component={NotFound} />
    </Switch>
    );
  }
/*

export default function TodoPages() {
  document.getElementById("favicon").setAttribute("href", ShopIcon);

  //custom hook

  return (
    <>
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
    </>
  );
}

*/
