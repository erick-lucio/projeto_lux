import React from 'react';

import { Button,Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useSelector,useDispatch}from 'react-redux'
/*import css */
import './Test_page.css';
import * as security from '../../Security';


/*import de imagens */


///


import store  from '../../store/index';



const Test_page = (props) => {
    const store_data = useSelector(state => state.login)
    const dispatch_func= useDispatch();
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
    function teste1(){
      let teste5 = store.getState()
      console.log(teste5.login.name) 
      
    }
    function teste2(){
      dispatch_func({
        type:'LOGIN_',
        logged:"true" ,
        key_auth:"marcarath d_ f'",
        name:document.getElementById("text_input_test").value
      })
    
    }
    function teste3(){

  }
  return (
    <>
    <Container fluid={true} className='class_test_page_container1'>
        <Input type="text" id="text_input_test">
        
        </Input>
        <Button onClick={()=>teste1()}>LISTA ESTADOS

        </Button>
        <Button onClick={()=>teste2()}>pega o nome do input
        </Button>

        
        
    </Container>

    </>
  );
}

export default Test_page