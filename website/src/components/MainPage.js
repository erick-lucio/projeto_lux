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
import urls from '../index';

export default function MainPage(){

    return(
        <>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <img >
                        </img>
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <h3>Promova sua Presença digital</h3>
                        <p>Nos oferecemos diversos serviços com o intuito de aumentar sua influencia na web</p>
                    </Col>
                    <Col sm="2"></Col>
                    
                </Row>
                <Row className="class_mainpage_row_services">
                    <Col sm="4" className="class_mainpage_col_each">
                       <img></img>
                       <h5>12</h5>
                       <p>as</p> 
                    </Col>  
                    <Col sm="4" className="class_mainpage_col_each">
                       <img></img>
                       <h5>34</h5>
                       <p>df</p> 
                    </Col> 
                    <Col sm="4" className="class_mainpage_col_each">
                       <img></img>
                       <h5>df</h5>
                       <p>df</p> 
                    </Col> 
                    <Col sm="4" className="class_mainpage_col_each">
                       <img></img>
                       <h5>df</h5>
                       <p>df</p> 
                    </Col> 
                    <Col sm="4" className="class_mainpage_col_each">
                       <img></img>
                       <h5>df</h5>
                       <p>44</p> 
                    </Col> 
                    <Col sm="4" className="class_mainpage_col_each">
                       <img></img>
                       <h5>34</h5>
                       <p>343</p> 
                    </Col>    
                </Row>
            </Container>
        </>
    );
}