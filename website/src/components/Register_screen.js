/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom'

/*css imports */
import './Register_screen.css';
   
/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

<<<<<<< HEAD
/* import urls*/
import urls from '../index';

=======
>>>>>>> 0083e12dbd87d6cf570a2d4a0621845a37ab6099
    export default function Register(){
        const [cookies, setCookie] = useCookies([]);
        
        window.scrollTo({ top: 0});//scrool to top of page
        /*Funçoes do componente */
        function register_check(){
            let email_login = document.getElementById('id_input_register_email').value;
            let name_login = document.getElementById('id_input_register_name').value;    
            let password_login = document.getElementById('id_input_register_password').value;
            console.log(email_login,name_login,password_login)
            //aplicar regex p gerenciamento das palavras inseridas
            
        };
        /* */
        return (
            <>
               <div className="class_register_container">
                   <div className="class_register_box_container">
                        <p className="class_register_p_title">Crie a sua conta</p>
                        <input
                            id="id_input_register_name"
                            type="text"
                            placeholder="Digite o seu nome"
                            className="class_register_text_input_name"></input><br/>
                        <input
                            id="id_input_register_email"
                            type="text"
                            placeholder="Digite o seu Email"
                            className="class_register_text_input_email"></input><br/>
                        <input
                            id="id_input_register_password"
                            type="text"
                            placeholder="Digite sua senha"
                            className="class_register_text_input_password"></input><br/>                        
                        <button 
                                className="class_register_button"
                                onClick={()=>register_check()}>Registrar</button>
                        <Link to="/">
                            <button 
                                className="class_temconta_button">Ja possui conta?</button></Link>
                   </div>
               </div>
            </>
        )
    }