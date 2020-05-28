/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Login_Screen.css';

/* import urls*/
import urls from '../index';



/* */
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
                method: 'get',
                url: urls.server_url_https,
                //data: 'formData',
                //headers: {'Content-type': 'multipart/form-data'}
                })
                .then(function (response) {
                    //handle success
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    //console.log(response);
                });

        };
        /* */
        document.title = 'Personal Website';
        window.scrollTo({ top: 0});//vai pro inicio da page
        return (
            <>
                <Container className="class_login_container" fluid={true}>
                    <Row className="class_login_row_form">
                       
                        <Col sm="12" className="class_login_col_form">
                            <Form className="class_login_form">
                                <p className="class_login_text_big_tittle">Faço Login na sua Conta</p>
                                <FormGroup>
                                    <Label className="class_login_texts">Email</Label>
                                    <Input
                                    type="email"
                                    placeholder="Insira seu email"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="class_login_texts">Senha</Label>
                                    <Input
                                    type="password"
                                    placeholder="Insira sua senha"></Input>
                                </FormGroup>
                                <Row className="class_login_row_insideform">
                                    <Col sm="6" xs="6">
                                    <Button                                     
                                        onClick={()=>alert("botao login pressionado")}
                                        className="class_login_button"
                                        >Login</Button>
                                    </Col>
                                    <Col sm="6" xs="6">
                                        <Link                                     
                                        className="btn btn-secondary class_naotemconta_button"
                                        to="/register">Não possuo uma conta</Link>
                                    </Col>
                                   
                                   
                                </Row>

                            </Form>
                        </Col>
                       
                    </Row>
                </Container>
            </>
        )

    }

