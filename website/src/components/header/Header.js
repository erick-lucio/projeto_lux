/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button,Collapse, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Header.css';

/* import urls*/
import urls from '../../index';

export default function Header(){
    function open_sidebar() {
        document.getElementById("id_header_sidebar").style.width = "auto";
        //setProperty('--width-sidebar', "25%");
        //document.getElementById("main").style.marginLeft = "250px";
      }
      
      function close_sidebar() {
        document.getElementById("id_header_sidebar").style.width = "0%";
        //setProperty('--width-sidebar', "0%");
        //document.getElementById("main").style.marginLeft= "0";
      }
    return(
        <>
            <Container fluid={true}>
                <Row className="class_header_row">
                    <Col sm="2" xs="2">
                        <Link to="/" className="class_header_title_link">
                           <span>KonohaDev</span>
                            
                        </Link>
                    </Col>
                    <Col sm="10" xs="10" className="class_header_menu_xs d-none d-md-block" >
                        <Link to="/main" className="class_header_menu_xs_each_content">home</Link>
                        <Link to="/login" className="class_header_menu_xs_each_content">login</Link>
                        <Link to="/signin" className="class_header_menu_xs_each_content">signin</Link>
                        <Link to="/pagina_teste" className="class_header_menu_xs_each_content">pagina teste</Link>
                        <Link to="/logs" className="class_header_menu_xs_each_content">registros</Link>
                      
                    
                    </Col>
                    <Col sm="10" xs="10" className="class_header_menu d-md-none d-lg-none d-xl-none" onClick={()=>open_sidebar()}>
                        <span>☰ Menu</span>
                    
                    </Col>
                </Row>
                <Container className="class_header_sidebar d-sm-none d-md-none d-lg-none d-xl-none" id="id_header_sidebar">
                    <Row>                     
                        <Col sm="12" xs="12"
                          className="class_header_close_sidebar_button"
                          onClick={()=>close_sidebar()}>
                            <span>x</span>
                        </Col>
                    </Row>
                    Obs : Menu temporario
                    <Row>
                        <Col className="class_header_each_content">
                            <Link to="/main"
                                onClick={()=>close_sidebar()}> 
                                Home
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="class_header_each_content">
                            <Link to="/login"
                                onClick={()=>close_sidebar()}> 
                                Log In 
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="class_header_each_content">
                            <Link to="/signin"
                                onClick={()=>close_sidebar()}> 
                                Sign in
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="class_header_each_content">
                            <Link to="/pagina_teste"
                                onClick={()=>close_sidebar()}> 
                                Test page
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="class_header_each_content">
                            <Link to="/logs"
                                onClick={()=>close_sidebar()}> 
                                 Logs
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="class_header_each_content">
                            <Link to="#"
                               onClick={()=>close_sidebar()}> 
                              Nao implementado
                            </Link>
                        </Col>
                    </Row>
                    
                </Container>
            </Container>
            
        </>
    );
}