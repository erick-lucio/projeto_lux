/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Header.css';

/* import urls*/
import urls from '../index';

export default function Header(){

    return(
        <>
            <Container fluid={true}>
                <Row className="class_header_row">
                    <Col sm="7">
                        <Link to="/" className="class_header_title_link">
                            Pagina
                        </Link>
                    </Col>
                    <Col sm="5" className="class_header_menu">
                        Menu
                    </Col>
                </Row>
            </Container>
        </>
    );
}