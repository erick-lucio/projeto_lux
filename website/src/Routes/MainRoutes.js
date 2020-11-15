import React, { useReducer } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
//Imgs
import { context1 } from "../Context/Context";

import NotFound from "../Components/Pages/Store/NotFound404/index.js";
//Import de routes
import TodoPagesRoutes from "./TodoListRoutes.js";
import WowPagesRoutes from "./WowRoutes.js";
import MainPagesRoutes from "./MainPagesRoutes.js"
//Valores ou string para nomear as url,colocar no store depois


export default function Website() {
  document.getElementById("favicon").setAttribute("href", ShopIcon);

  return (
    
    <HashRouter history={history}>
      <context1.Provider
        value={{
        }}
      >
        <Switch>
          <Route path="/home/*" component={MainPagesRoutes} /> 
          <Route path="/todos/*" component={TodoPagesRoutes} /> 
          <Route path="/wow/*" component={WowPagesRoutes} />        
          <Route path="*" component={NotFound} />
        </Switch>
      </context1.Provider>
    </HashRouter>
  );
}
