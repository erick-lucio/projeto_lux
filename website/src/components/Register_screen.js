import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './Register_screen.css';

    export default function Register(){
        return (
            <>
               <div className="class_register_container">
                   <div className="class_register_box_container">
                        <p className="class_register_p_title">Crie a sua conta</p>
                        <input
                            type="text"
                            placeholder="Digite o seu nome"
                            className="class_register_text_input_name"></input><br/>
                        <input
                            type="text"
                            placeholder="Digite o seu Email"
                            className="class_register_text_input_email"></input><br/>
                        <input
                            type="text"
                            placeholder="Digite sua senha"
                            className="class_register_text_input_password"></input><br/>
                        <Link to="#">
                            <button 
                                className="class_register_button">Registrar</button></Link>
                        <Link to="/">
                            <button 
                                className="class_temconta_button">Ja possui conta?</button></Link>
                   </div>
               </div>
            </>
        )
    }