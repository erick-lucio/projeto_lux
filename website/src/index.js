/*component imports */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Routes from './Routes';

/*css imports */
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import MainApp from './components/MainApp';
>>>>>>> 0083e12dbd87d6cf570a2d4a0621845a37ab6099

/*Url config */
const url = 'localhost';
const port = ':3000';
const server_url_port_https = 'https://'+url+port;
const server_url_port_http = 'http://'+url+port;
<<<<<<< HEAD
const server_url_https = 'https://server-node-test-1.herokuapp.com/';
const server_url_http = 'http://'+url;
export default {server_url_port_https,server_url_port_http,server_url_https,server_url_http}



ReactDOM.render(<Routes />, document.getElementById('main'));
=======
export default {server_url_port_https,server_url_port_http}
/*css imports */



ReactDOM.render(<MainApp />, document.getElementById('main'));
>>>>>>> 0083e12dbd87d6cf570a2d4a0621845a37ab6099



