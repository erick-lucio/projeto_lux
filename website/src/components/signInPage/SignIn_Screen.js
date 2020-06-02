/*Component imports */
import React,{useState} from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Checkbox_end from '../material_ui/CheckBox';
import TextArea from '../material_ui/TextArea';
/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './SignIn_Screen.css';

/* import urls*/
import urls from '../../index';



/* */
    export default function Signin() {
        const [cookies, setCookie] = useCookies([]);
        //console.log(urls.server_url_port_https,urls.server_url_port_http)
        /*Funçoes do componente */
        function login_create(){
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
        //document.title = 'Personal Website';
        window.scrollTo({ top: 0});//vai pro inicio da page
        return (
            <>
                <Container className="class_signin_container" fluid={true}>
                    <Row className="class_signin_first_row">
                        <Col sm="12" className="class_signin_img_col">
                            <Col sm="12" className="class_signin_opacity_back_img">
                                 <span className="class_signin_img_col_text">Sign In </span>
                            </Col>
                            
                        </Col>
                        <Col sm="12">
                            <Form className="class_signin_form">                
                                <TextArea  label={'Insira Nome'} className="class_signin_text_input_name"/>              
                                <TextArea  label={'Insira seu Email'} className="class_signin_text_input_email"/>
                                <TextArea  label={'Insira sua Senha'} className="class_signin_text_input_password"/>
                                
                                <FormGroup>
                                      
                                      <Col className="class_signin_formgroup_link_dont_has">
                                            <Link to="/login" className="class_signin_donthaveaccoutb">Possui uma conta?</Link>
                                      </Col>   
                                       <Col className="class_signin_signin_button_col">
                                            <Button onClick={()=>alert('Login realizado')}>
                                            Sign In
                                            </Button>
                                       </Col>  
                                    
                                    
                                         
                                </FormGroup>
                                
              
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )

    }

