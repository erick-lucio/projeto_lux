import React, { useReducer } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
//Imgs
import { context1 } from "../Context/Context";

import NotFound from "../Components/Pages/Store/NotFound404/index.js";
//Import de routes
import TodoPagesRoutes from "./TodoListRoutes.js";
import WowPagesRoutes from "./WowRoutes.js";
import MainPagesRoutes from "./MainPagesRoutes.js"
//Valores ou string para nomear as url,colocar no store depois

const history = createBrowserHistory
export default function Website() {
  

  return (
    
    <BrowserRouter history={history}>
      <context1.Provider
        value={{
        }}
      >
        <Switch>
          <Route exact path="/" component={MainPagesRoutes} /> 
          <Route exact path="/todos/*" component={TodoPagesRoutes} /> 
          <Route exact path="/wow/*" component={WowPagesRoutes} />        
          <Route path="*" component={NotFound} />
        </Switch>
      </context1.Provider>
    </BrowserRouter>
  );
}
