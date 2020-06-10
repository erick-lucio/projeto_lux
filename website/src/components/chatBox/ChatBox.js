/*Component imports */
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button,Collapse, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useSelector,useDispatch}from 'react-redux'
import Checkbox_end from '../material_ui/CheckBox';
import TextArea from '../material_ui/TextArea';

/*functions import */
import axios from 'axios';


/*css imports */
import './ChatBox.css';

export default function ChatBox(){
    
    const [render, setRender] = useState(0);
    const store_data = useSelector(state => state)    
    const dispatch_func= useDispatch();
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </>
    );
}