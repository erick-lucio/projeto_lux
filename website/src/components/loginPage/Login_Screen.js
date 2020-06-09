/*Component imports */
import React,{useState} from 'react';
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
import './Login_Screen.css';

/* import urls*/
import urls from '../../index';



/* */
    export default function Login() {
        
        const store_data = useSelector(state => state)
        //console.log(store_data)
        const dispatch_func= useDispatch();
        const [cookies, setCookie] = useCookies([]);
        //console.log(urls.server_url_port_https,urls.server_url_port_http)
        /*Funçoes do componente */
        //normalização
  
        function login_check(){
            let email = document.getElementById('login_email_input').value;
            let password = document.getElementById('login_password_input').value;
            let data_to_send = {email,password};
            //console.log(data_to_send)
            let date = new Date();
            //setCookie('email', email_login, { path: '/' });
            //setCookie('password', password_login, { path: '/' });
            //aplicar regex p gerenciamento das palavras inseridas
           
            let url_ = store_data.hosts.state.backend_url+"userslogin";
            //console.log(url_)
            if((email != "" && email != " " && email.length >=5 &&
            password != "" && password != " " && password.length >=5))
            {
                axios({
                    method: 'post',
                    url: url_,//"http://localhost:3100/userslogin",
                    data: data_to_send,
                    //headers: {'Content-type': 'aplication/json'}
                    })
                    .then(function (response) {
                        
                        if(response.data[2].succes==true){
                           
                            dispatch_func({
                                type:'LOGIN_',
                                logged:"true" ,
                                key_auth:response.data[1].auth_id,
                                name:response.data[0].name
                              })
                              alert("Login Realizado")
                             
                        }else{
                            alert("Login Incorreto")
                        }
        
    
                    })
                    .catch(function (response) {
                        //handle error
                        //console.log(response);
                        alert("Login Incorreto")
                    });
            }else{
                alert("Por Favor Preencha os campo corretamente minimo de 5 caracteres")
            }


                
        };

        function check_redirect(){
            if(store_data.auth.key_auth != "none"){
                return <Redirect to="/main"/>
            }
        }
        /* */
        //document.title = 'Personal Website';
        window.scrollTo({ top: 0});//vai pro inicio da page
        return (
            <>  
                {check_redirect()}
                <Container className="class_login_container" fluid={true}>
                    <Row className="class_login_first_row">
                        <Col sm="12" className="class_login_img_col">
                            
                            
                        </Col>

                        <Col sm="12">
                            <Form className="class_login_form">  
                                <span className="class_login_Tittle">Login</span>                            
                                <TextArea  label={'Insira seu Email'} className="class_login_text_input_email" id={'login_email_input'}/>
                                <TextArea  label={'Insira seu Senha'} className="class_login_text_input_password" id={'login_password_input'}/>
                                
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

