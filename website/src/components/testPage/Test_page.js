import React from 'react';

import { Button,Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

/*import css */
import './Test_page.css';
import * as security from '../../Security';


/*import de imagens */



const Test_page = (props) => {
    //sec.encrypt()

    //sec.decrypt()
    function criptografa(){
        let text = document.getElementById("text_input_test").value;
        let key = document.getElementById("text_input_test1").value
        

        
       
     
        document.getElementById("text_input_test2").value = security.encrypt(text,key);
       
    }
    function descriptografa(){
        let text1 = document.getElementById("text_input_test2").value
        let key1 = document.getElementById("text_input_test1").value;// document.getElementById("text_input_test13").value
        
        document.getElementById("text_input_test14").value = security.decrypt(text1,key1);
    }
  return (
    <>
    <Container fluid={true} className='class_test_page_container1'>
        <Input type="text" id="text_input_test">
        
        </Input>
        <Input type="text" id="text_input_test1">
        
        </Input>
        <Input type="text" id="text_input_test2">
        
        </Input>
        <Button onClick={()=>criptografa()}>

        </Button>

        <Input type="text" id="text_input_test13">
        
        </Input>
        <Input type="text" id="text_input_test14">
        
        </Input>
        <Button onClick={()=>descriptografa()}>

        </Button>
        
          
        
        
    </Container>

    </>
  );
}

export default Test_page;
