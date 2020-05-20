/*component imports */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainApp from './components/MainApp';

/*Url config */
const url = 'localhost';
const port = ':3000';
const server_url_port_https = 'https://'+url+port;
const server_url_port_http = 'http://'+url+port;
export default {server_url_port_https,server_url_port_http}
/*css imports */



ReactDOM.render(<MainApp />, document.getElementById('main'));



