/*component imports */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { createBrowserHistory } from "history";
import './components/index.css';


import * as sec from './Security';

sec.encrypt()

sec.decrypt()

/*css imports */
//import 'bootstrap/dist/css/bootstrap.min.css';

//constantes historico
const customHistory = createBrowserHistory();

/*Url config */
const url = 'localhost';
const port = ':3000';
const server_url_port_https = 'https://'+url+port;
const server_url_port_http = 'http://'+url+port;
const server_url_https = 'https://server-node-test-1.herokuapp.com/';
const server_url_http = 'http://'+url;
//

export default {server_url_port_https,server_url_port_http,server_url_https,server_url_http}
//



ReactDOM.render(<Routes history={customHistory}/>, document.getElementById('main'));



