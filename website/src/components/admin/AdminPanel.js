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
import './AdminPanel.css';

export default function Admin(){
    
    const [render, setRender] = useState(0);
    const store_data = useSelector(state => state)    
    const dispatch_func= useDispatch();


    function setUrlBackend(urlData){
        dispatch_func({
            type:'SET_URL_',
            url: document.getElementById("id_admin_page_texturl").value
          })
          document.getElementById("id_admin_page_texturl").value = "";
          //setRender(!render)
    }
    function setAuth(){
        dispatch_func({
            type:'LOGIN_',
            logstate:"true"
          })
    }
    return(
        <>
        <Container fluid={true} className="class_adminpage_main_container">
            <Row className="class_ladminpage_main_row">
                <Col xs="12" sm="12" className="">
                    <h1 className="">Admin Page</h1 >
                </Col>           
                
                <Col className="">
                <TextArea  label={"Url do Backend, Url atual : "+store_data.hosts.backend_url} placeholder="Insira a url do servidor backend" className="class_adminpage_disabletexts" id="id_admin_page_texturl"></TextArea>                
                <Button onClick={()=>setUrlBackend()}>Set</Button>
                </Col>
                <Button onClick={()=>setAuth()}>SetLooged</Button>
            </Row>

        </Container>
        </>
    );
}