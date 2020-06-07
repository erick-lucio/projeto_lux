/*Component imports */
import React,{useState,useEffect} from 'react';
import { render } from 'react-dom';
import {Link,Redirect} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Checkbox_end from '../material_ui/CheckBox';
import TextArea from '../material_ui/TextArea';
import {useSelector,useDispatch}from 'react-redux'

/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './SignIn_Screen.css';

/* import urls*/
import urls from '../../index';



/* */
    export default function Signin() {        
        const [sucessfull_signin,setsucessfull_signin]= useState();
        const store_data = useSelector(state => state)
        const dispatch_func = useDispatch();
        const [cookies, setCookie] = useCookies([]);
        //console.log(urls.server_url_port_https,urls.server_url_port_http)
        /*Funçoes do componente */
        function login_create(){
            
            let name = document.getElementById('signin_name_input').value;
            let email = document.getElementById('signin_email_input').value;
            let password = document.getElementById('signin_password_input').value;
            let data_to_send = {name,email,password};
            //console.log(data_to_send)
            let date = new Date();
            //setCookie('email', email_login, { path: '/' });
            //setCookie('password', password_login, { path: '/' });
            //aplicar regex p gerenciamento das palavras inseridas
           
            let url_ = store_data.hosts.state.backend_url+"users";
            //console.log(url_)
            if((name != "" && name != " " && name.length >=5 &&
                email != "" && email != " " && email.length >=5 &&
                password != "" && password != " " && password.length >=5))
            {
                axios({
                    method: 'post',
                    url: url_,//"http://localhost:3100/users",
                    data: data_to_send,
                    //headers: {'Content-type': 'aplication/json'}
                    })
                    .then(function (response) {
                        //console.log(response)
                        if(response.data[0].succes==true){
                            
                              alert("Usuario criado com Sucesso")
                              setsucessfull_signin(true)
                        }else{
                            alert("Usuario Ja existe")  
                        }
                        
    
                    })
                    .catch(function (response) {
                        //handle error
                       // console.log(response);
                       alert("Usuario Ja existe")  
                    });
            }else{
                alert("Por Favor Preencha os campo corretamente minimo de 5 caracteres")
            }

            
        };
        /* */
        
        function check_redirect(){          
            if(sucessfull_signin){
                return <Redirect to="/login"/>
            }                       
        }
      

       
        window.scrollTo({ top: 0});//vai pro inicio da page
        return (
            <>
                {check_redirect()}
                <Container className="class_signin_container" fluid={true}>
                    <Row className="class_signin_first_row">
                        <Col sm="12" className="class_signin_img_col">
                          
                            
                        </Col>
                        <Col sm="12">
                            <Form className="class_signin_form">      
                                <span className="class_signin_Tittle">Sign In </span>
                                <TextArea  label={'Insira Nome'} className="class_signin_text_input_name" id="signin_name_input"/>              
                                <TextArea  label={'Insira seu Email'} className="class_signin_text_input_email" id="signin_email_input"/>
                                <TextArea  label={'Insira sua Senha'} className="class_signin_text_input_password" id="signin_password_input"/>
                                
                                <FormGroup>
                                      
                                      <Col className="class_signin_formgroup_link_dont_has">
                                            <Link to="/login" className="class_signin_donthaveaccoutb">Possui uma conta?</Link>
                                      </Col>   
                                       <Col className="class_signin_signin_button_col">
                                            <Button onClick={()=>login_create()}>
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

