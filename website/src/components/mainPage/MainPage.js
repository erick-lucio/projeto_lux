/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './MainPage.css';

/* import urls*/
import urls from '../../index';

/*import imgs */
import mobile_icon from '../../imgs/mobile_img_icon.png';
import payment_icon from '../../imgs/payment_img_icon.png';
import systems_icon from '../../imgs/gears_img_icon.png';
import code_icon from '../../imgs/code_img_icon.png';
import img_banner1 from '../../imgs/img_main_banner.png';


export default function MainPage(){

    return(
        <>
            <Container fluid={true} className="class_mainpage_container">
                <Row>
                   
                        <img src={img_banner1} className="class_main_banner1_img">
                        </img>
                    
                   
                </Row>
                <Row>
                    <Col sm="2"></Col>
                    <Col sm="8" className="class_mainpage_main_text">
                        <h2>Promova sua Presença no mundo digital</h2>
                        <p>Nos oferecemos os melhores serviços baseado em suas necessidades.</p>
                    </Col>
                    <Col sm="2"></Col>
                    
                </Row>
                <Row className="class_mainpage_row_services">
                    <Col sm="3" className="class_mainpage_col_each" >
                       <img src={code_icon}></img>
                       <h3>Websites</h3>
                       <p>Desenvolvemos websites modernos e intuitivos.</p> 
                    </Col>  
                    <Col sm="3" className="class_mainpage_col_each">
                       <img src={systems_icon}></img>
                       <h3>Sistemas</h3>
                       <p>Desenvolvimento de sistemas locais ou hospedados, como foco na valocidade e segurança dos seus dados.</p> 
                    </Col> 
                    <Col sm="3" className="class_mainpage_col_each">
                       <img src={mobile_icon}></img>
                       <h3>Aplicativos Mobile</h3>
                       <p>Criação de aplicativos mobile para diversas plataformas.</p> 
                    </Col> 
            
                    <Col sm="3" className="class_mainpage_col_each">
                       <img src={payment_icon}></img>
                       <h3>E-Commerce</h3>
                       <p>Amplia sua marca na web,sistemas de transação online oferecendo facilidade e comodidade para seus clientes.</p> 
                    </Col> 
                 
                </Row>
            </Container>
            
        </>
    );
}