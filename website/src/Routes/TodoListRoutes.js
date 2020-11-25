import React, { useReducer } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
//Imgs
import ShopIcon from "../assets/icons/icons8-shop-96.png";
import TodosIdeas from "../Components/Pages/TodosIdeas/index.js"
import TodosBackEnd from "../Components/Pages/TodosBackEnd/index.js"
import TodosFrontEnd from "../Components/Pages/TodosFrontEnd/index.js"
import NotFound404 from "../Components/Pages/Store/NotFound404/index"

export default function TodoPages() {
    document.getElementById("favicon").setAttribute("href", ShopIcon);
  
    //custom hook
  
    return (
      <>
        <Switch>
          <Route exact path="/todos/ideas" component={TodosIdeas} /> 
          <Route exact path="/todos/backend" component={TodosBackEnd} /> 
          <Route exact path="/todos/frontend" component={TodosFrontEnd} />        
          <Route path="/todos/*" component={NotFound404} />
        </Switch>
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

        </Switch>
    </>
  );
}

*/
