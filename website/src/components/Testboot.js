import React from 'react';

import { Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

/*import css */
import './Testboot.css';

/*import de imagens */
import space_gif_img from '../imgs/space_star_img.gif';

const styles = {
  
  container: {

  },
  box_form: {
    marginTop:"15%",
    marginLeft:'70%',
    padding: 0,
    border:'1px solid',
    width:'30%',
    
  },
  mainRow: {
   
    height: '80vh'

  },
  input_texts: {
     
    width:'80%'
  },
  footer:{
    
      width: '500px', 
      height: '100px',  
      border: 'solid 5px #000',
      borderColor: '#000 transparent transparent transparent',
      borderRadius: '50%/100px 100px 0 0'
    
  },
  Title_constructions:{
    fontSize:'50px'
  },
  center:{  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage:'url("/src/imgs/nstagram_icon.png")'
  }
}
const Example = (props) => {
  return (
    <>
    <Container fluid={true} className='main_container'>
      
        
        
          <h1  className='tittle1'>Em Desenvolvimento</h1>
        
        
    </Container>

    </>
  );
}

export default Example;
