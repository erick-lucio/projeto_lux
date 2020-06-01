/*Component imports */
import React,{useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

/*css imports */
import './About.css';

/* Img imports*/
import me_img_developer from '../imgs/me_img_developer.png';
import me_img_designer from '../imgs/me_img_designer.png';
import me_img_manager from '../imgs/me_img_manager.png';

export default function About(){
    window.scrollTo({ top: 0});//vai pro inicio da page
    return(
        <>
            <Container className="class_about_container" fluid={true}>
                <Row className="class_about_title_row">
                    <Col sm="12" className="class_about_tittle_col">
                        <h1>Conheça nossa equipe</h1>
                        <span>Contamos com os mais habilidosos profissionais para alcançar os melhorer resultados.</span>
                    </Col>
                </Row>
                <Row className="class_about_main_row">
                    <Col sm="4" className="class_about_each_col">
                        <div className="class_about_text_info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </div>
                        <div><img src={me_img_developer} className="class_about_imgs"></img><span className="class_about_peope_describe">Erick  <strong className="class_about_each_profission"> Developer</strong></span></div>
                    </Col>                 
                    <Col sm="4" className="class_about_each_col" >
                        <div className="class_about_text_info"> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre.</div>
                        <div><img src={me_img_designer} className="class_about_imgs"></img><span className="class_about_peope_describe">Erick  <strong className="class_about_each_profission">Designer</strong></span></div>
                    </Col>   
                    <Col sm="4" className="class_about_each_col">
                        <div className="class_about_text_info">Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</div>
                        <div><img src={me_img_manager} className="class_about_imgs"></img><span className="class_about_peope_describe">Erick  <strong className="class_about_each_profission"> Manager</strong></span></div>
                    </Col>   
                </Row>
            </Container>
        </>
    );
}