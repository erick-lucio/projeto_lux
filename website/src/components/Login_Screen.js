import React,{useState} from 'react';
import {Link} from 'react-router-dom'

import './Login_Screen.css';


    export default function Login() {
        document.title = 'Erick';
        return (
            <>
               <div className="class_login_container">
                    <div className="class_login_box_container">                        
                        <p className="class_login_p_title" >Faça Login na sua conta</p><br/>
                        <input 
                            type="text" 
                            placeholder="Digite o seu email" 
                            className="class_login_text_input_email"></input><br/>
                        <input 
                            type="text" 
                            placeholder="Digite o seu nome"
                            className="class_login_text_input_name"></input><br/>
                        <Link to="#">
                            <button 
                                className="class_login_button">Login</button></Link>
                        <Link to="/register">
                            <button 
                                className="class_naotemconta_button">Não tem uma Conta?</button></Link>
                        
                        
                    </div>
               </div>
            </>
        )

    }

