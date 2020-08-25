/*component imports */
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";

/*css imports */
//import 'bootstrap/dist/css/bootstrap.min.css';

//constantes historico


import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Routes />, rootElement);
} else {
  render(<Routes />, rootElement);
}