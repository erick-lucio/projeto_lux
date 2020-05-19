/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom'

/*css imports */
import './Login_Screen.css';

    export default function Login() {
        /*Funçoes do componente */
        function login_check(){
            let email_login = document.getElementById('id_input_login_email').value;
            let password_login = document.getElementById('id_input_login_password').value;
            console.log(password_login,email_login)
            //aplicar regex p gerenciamento das palavras inseridas
            
        };
        /* */
        document.title = 'Erick';
        window.scrollTo({ top: 0});//vai pro inicio da page
        return (
            <>
               <div className="class_login_container">
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

