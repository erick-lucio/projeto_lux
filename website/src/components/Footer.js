/*Component imports */
import React,{useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                        <h3 className="white_color">Accumsan montes viverra</h3>
                        <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
                    </Col>
                    <Col sm="3" >
                        <h4 className="white_color">Informações</h4>
                            <ul>
                              <li className="class_footer_lists_elements"><a href="#">Sobre.</a></li>
                              <li className="class_footer_lists_elements"><a href="#">Contato.</a></li>
                              <li className="class_footer_lists_elements"><a href="#">Felis enim feugiat viverra.</a></li>
                              <li className="class_footer_lists_elements_no_border"><a href="#">Dolor pulvinar magna etiam.</a></li>
                            </ul>
                    </Col>
                    <Col sm="1" >
                        <h4 className="white_color">Redes Sociais</h4>
                            <ul >
                              <li className="class_footer_lists_social_media"><a href="#">Twitter</a></li>
                              <li className="class_footer_lists_social_media"><a href="#">Facebook</a></li>
                              <li className="class_footer_lists_social_media"><a href="#">Instagram</a></li>
                              <li className="class_footer_lists_social_media"><a href="#">Github</a></li>
                              <li className="class_footer_lists_social_media"><a href="#">Linkedim</a></li>
                            </ul>
                    </Col>
                    <Col sm="2"></Col>
                  </Row>   
                  <Row>
                      <Col sm="1"></Col>
                      <Col className="class_footer_copyright_div" sm="10">
                          &copy; Erick.
                      </Col>
                      <Col sm="1"></Col>
                    </Row>          
                </Container>
            </>
        )

    }

