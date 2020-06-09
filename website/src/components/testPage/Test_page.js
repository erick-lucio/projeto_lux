import React from 'react';

import { Button,Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useSelector,useDispatch}from 'react-redux'
/*import css */
import './Test_page.css';
import saveLocal from '../../LocalStorage';


/*import de imagens */


///


import store  from '../../store/index';



const Test_page = (props) => {
    const store_data = useSelector(state => state)
    const dispatch_func= useDispatch();
    /*teste var */var car = [{key:"name", value:"micael"},{key:"id", value:"asds"},{key:"acc", value:"hjh545"}];
    
    saveLocal.getLocally("name")
    function criptografa(){
        let text = document.getElementById("text_input_test").value;
        let key = document.getElementById("text_input_test1").value
        

        
       
     
     
       
    }

    function teste1(){
      
      console.log(store_data) 
      
    }
    function teste2(){
      
  
      
    let object = [{key:"name",value:document.getElementById("text_input_test").value
    },{key:"id",value:"fdf44"},{key:"auth",value:"44g554g554g55"},]
      saveLocal.saveLocally(object)
      //console.log(Promise.resolve((saveLocal.getLocally("name"))))
      //console.log(saveLocal.getLocally("auth"))
      //console.log(saveLocal.getLocally("id"))
      var promise = Promise.resolve(saveLocal.getLocally("name")); 
      var promise = Promise.resolve(saveLocal.getLocally("id")); 
      var promise = Promise.resolve(saveLocal.getLocally("auth")); 
     
      promise.then(function(val) { 
        console.log(val); 
    }); 
    }
    function teste3(){

  }
  if (store_data.auth.name != "adminErick"){
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
  }else{
      return(
        <>
          <Container fluid={true} className='class_test_page_container1'>
              <h3>Usuario não  autorizado</h3>

          </Container>
        </>
      
      )
    }

}

export default Test_page