import React, { useReducer } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
//Imgs
import ShopIcon from "../assets/icons/icons8-shop-96.png";



export default function TodoPages() {
    document.getElementById("favicon").setAttribute("href", ShopIcon);
  
    //custom hook
  
    return (
      <>
todo list
      </>
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
