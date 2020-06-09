/*Component imports */
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button,Collapse, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useSelector,useDispatch}from 'react-redux'


/*functions import */
import axios from 'axios';


/*css imports */
import './Header.css';



export default function Header(){
    const dispatch_func = useDispatch();
    const store_data = useSelector(state => state)
    const [re_render, setre_render] = useState(0);
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

      useEffect(() => {
        
        setre_render(!re_render);
      }, [store_data.auth.logged]);
    return(
        <>
            <Container fluid={true}>
                <Row className="class_header_row">
                    <Col xs="2" sm="2" md="2">
                        <Link to="/" className="class_header_title_link">
                           <span>KonohaDev</span>
                            
                        </Link>
                    </Col>
                    
                 
                    <Col sm="10" xs="10" className="class_header_menu_xs d-none d-md-block" >
                    {store_data.auth.name == "adminErick"?
                        <Link to="/admin" className="class_header_menu_xs_each_content">AdminPage</Link> :""}
                        <Link to="/main" className="class_header_menu_xs_each_content">Home</Link>
                        {store_data.auth.logged === "true"?
                        <>
                        <Link to="/pagina_teste" className="class_header_menu_xs_each_content">Testes</Link>
                        <Link to="#" className="class_header_menu_xs_each_content">Perfil</Link>
                        </>
                        :
                        <> 
                        <Link to="/login" className="class_header_menu_xs_each_content">Login</Link>
                        <Link to="/signin" className="class_header_menu_xs_each_content">SignIn</Link>                        
                        </>}

                         
                     
                        
                        <Link to="/logs" className="class_header_menu_xs_each_content">Registros</Link>
                      
                    
                    </Col>
                    <Col sm="10" xs="10" className="class_header_menu d-md-none d-lg-none d-xl-none" onClick={()=>open_sidebar()}>
                        <span>☰ Menu</span>
                    
                    </Col>
                </Row>
                <Container className="class_header_sidebar d-md-none d-lg-none d-xl-none" id="id_header_sidebar">
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
                    {store_data.auth.logged === "true"? 
                    <>
                    <Row>
                        <Col className="class_header_each_content">
                            <Link to="/pagina_teste"
                                onClick={()=>close_sidebar()}> 
                                Testes
                            </Link>
                        </Col> 
                    </Row>
                    <Row>
                        <Col className="class_header_each_content">
                            <Link to="#"
                                onClick={()=>close_sidebar()}> 
                                Perfil
                            </Link>
                        </Col> 
                    </Row>
                    </>
                    :
                    <>
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
                    </>
                    }
                    <Row>
                    


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