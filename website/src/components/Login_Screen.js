/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';



/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Login_Screen.css';

/* import urls*/
import urls from '../index';

<<<<<<< HEAD
/*React strap imports  */
import { Button } from 'reactstrap';

/* */
=======
>>>>>>> 0083e12dbd87d6cf570a2d4a0621845a37ab6099
    export default function Login() {
        const [cookies, setCookie] = useCookies([]);
        //console.log(urls.server_url_port_https,urls.server_url_port_http)
        /*Funçoes do componente */
        function login_check(){
            let email_login = document.getElementById('id_input_login_email').value;
            let password_login = document.getElementById('id_input_login_password').value;
            let data_to_send = {email_login,password_login};
            console.log(data_to_send)
            let date = new Date();
            setCookie('email', email_login, { path: '/' });
            setCookie('password', password_login, { path: '/' });
            //aplicar regex p gerenciamento das palavras inseridas
            axios({
<<<<<<< HEAD
                method: 'get',
                url: urls.server_url_https,
                //data: 'formData',
=======
                method: 'post',
                url: urls.server_url_port_http,
                data: 'formData',
>>>>>>> 0083e12dbd87d6cf570a2d4a0621845a37ab6099
                //headers: {'Content-type': 'multipart/form-data'}
                })
                .then(function (response) {
                    //handle success
<<<<<<< HEAD
                    console.log(response);
=======
                    //console.log(response);
>>>>>>> 0083e12dbd87d6cf570a2d4a0621845a37ab6099
                })
                .catch(function (response) {
                    //handle error
                    //console.log(response);
                });

        };
        /* */
        document.title = 'Erick';
        window.scrollTo({ top: 0});//vai pro inicio da page
        return (
            <>
               <div className="class_login_container">
<<<<<<< HEAD
                   <Button/>
=======
>>>>>>> 0083e12dbd87d6cf570a2d4a0621845a37ab6099
                    <div className="class_login_box_container">                        
                        <p className="class_login_p_title" >Faça Login na sua conta</p><br/>
                        <input 
                            id="id_input_login_email"
                            type="text" 
                            placeholder="Digite o seu email" 
                            className="class_login_text_input_email"></input><br/>
                        <input 
                            id="id_input_login_password"
                            type="text" 
                            placeholder="Digite sua senha"
                            className="class_login_text_input_password"></input><br/>
                        
                        <button 
                            className="class_login_button"
                            onClick={()=>login_check()}>Login</button>
                        <Link to="/register">
                            <button 
                            className="class_naotemconta_button">Não tem uma Conta?</button></Link>
                        
                        
                    </div>
               </div>
            </>
        )

    }

