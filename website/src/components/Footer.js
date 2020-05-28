/*Component imports */
import React,{useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';

/*css imports */
import './Footer.css';

/* Img imports*/
import Instagram from '../imgs/Instagran_icon.png';

    export default function Footer() {
      document.title = 'Personal Website';
        return (
            <>
              <Container className="class_footer_container" fluid={true}>
                  <Row>
                    <Col sm="1"></Col>
                    <Col sm="5" >
                        <h3 className="white_color">Sobre este Projeto</h3>
                        <p>Este website foi desenvolvido utilizando através da junção entre React Html Js e bootstrap.
                          Todos os componentes atuais estão sujeitos a mudanças tanto na parte de design ou funcionalidade,caso possua alguma dúvida ou sugestão entre em contato 
                          atraves das redes sociais ou atraves do E-mail <strong className="class_footer_email">ericklucio-suv@hotmail.com</strong>.
                        </p>
                    </Col>
                    <Col sm="3" >
                        <h4 className="white_color">Informações</h4>
                            <ul>
                              <li className="class_footer_lists_elements"><Link to="/about">Sobre.</Link></li>
                              <li className="class_footer_lists_elements"><a href="#">Contato.</a></li>
                              <li className="class_footer_lists_elements"><a href="#">Felis enim feugiat viverra.</a></li>
                              <li className="class_footer_lists_elements_no_border"><a href="#">Dolor pulvinar magna etiam.</a></li>
                            </ul>
                    </Col>
                    <Col sm="1" >
                        <h4 className="white_color">Redes Sociais</h4>
                            <ul >
                              <li className="class_footer_lists_social_media"><a href="https://www.facebook.com/erick.lucio.758/" target="_blank">Facebook</a></li>
                              <li className="class_footer_lists_social_media"><a href="https://www.instagram.com/erick_lucioo/" target="_blank">Instagram</a></li>
                              <li className="class_footer_lists_social_media"><a href="https://github.com/erick-lucio" target="_blank">Github</a></li>
                              <li className="class_footer_lists_social_media"><a href="https://www.linkedin.com/in/erick-lucio-04351715b/" target="_blank">Linkedin</a></li>
                            </ul>
                    </Col>
                    <Col sm="2"></Col>
                  </Row>   
                  <Row>
                      <Col sm="1"></Col>
                      <Col className="class_footer_copyright_div" sm="10">
                          &copy; Erick Dev.
                      </Col>
                      <Col sm="1"></Col>
                    </Row>          
                </Container>
            </>
        )

    }

