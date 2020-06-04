/*Component imports */
import React,{useState} from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Checkbox_end from '../material_ui/CheckBox';
import TextArea from '../material_ui/TextArea';
import {useSelector,useDispatch}from 'react-redux'
/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Login_Screen.css';

/* import urls*/
import urls from '../../index';



/* */
    export default function Login() {
        const store_data = useSelector(state => state.login)
        const dispatch_func= useDispatch();
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
                    dispatch_func({
                        type:'LOGIN_',
                        logged:"true" ,
                        key_auth:"S7YHFD786YF7'",
                        name:""
                      })
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
                <Container className="class_login_container" fluid={true}>
                    <Row className="class_login_first_row">
                        <Col sm="12" className="class_login_img_col">
                            
                            
                        </Col>

                        <Col sm="12">
                            <Form className="class_login_form">  
                                <span className="class_login_Tittle">Login</span>                            
                                <TextArea  label={'Insira seu Email'} className="class_login_text_input_email" id={'login_email_input'}/>
                                <TextArea  label={'Insira seu Senha'} className="class_login_text_input_password"/>
                                
                                      <Col  className="class_login_formGroup_checkbox">
                                            <Checkbox_end label={'Salvar login'}/> 
                                      </Col>
                                      <Col className="class_login_formgroup_link_dont_has">
                                            <Link to="/signin" className="class_login_donthaveaccoutb">Nao possui uma conta?</Link>
                                      </Col>   
                                       <Col className="class_login_login_button_col">
                                            <Button onClick={()=>login_check()}>
                                            Login
                                            </Button>
                                       </Col>  
                                    
                                    
                                         
                               
                                
              
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )

    }

