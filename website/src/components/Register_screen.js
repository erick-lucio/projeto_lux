/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*css imports */
import './Register_screen.css';
   
/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/* import urls*/
import urls from '../index';

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
                <Container className="class_register_container" fluid={true}>
                    <Row className="class_register_row_form">
                       
                        <Col sm="12" className="class_register_col_form">
                            <Form className="class_register_form">
                                <p className="class_register_text_big_tittle">Faço Login na sua Conta</p>
                                <FormGroup>
                                    <Label className="class_register_texts">Nome</Label>
                                    <Input
                                    type="name"
                                    placeholder="Insira seu nome"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="class_register_texts">Email</Label>
                                    <Input
                                    type="email"
                                    placeholder="Insira seu email"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label 
                                        className="class_register_texts">Senha</Label>
                                    <Input
                                        type="password"
                                        placeholder="Insira sua senha"></Input>
                                </FormGroup>
                                <Button 
                                onClick={()=>alert("botao Registrar pressionado")}
                                className="class_register_button"
                                >Registrar</Button>
                                <Link 
                                className="btn btn-secondary class_temconta_button"
                                to="/login">Ja possuo uma conta</Link>
                        
                            </Form>
                        </Col>
                       
                    </Row>
                </Container>
            </>
        )
    }