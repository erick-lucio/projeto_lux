import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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
  red:{
    backgroundColor:'red'
  },
  blue:{
    backgroundColor:'blue'
  }
}
const Example = (props) => {
  return (
    <>
    <Container  style={styles.mainRow}>
      <Row> 
        <Col xl="12">
            <Form style={styles.box_form}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" style={styles.input_texts}/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" style={styles.input_texts} />
                </FormGroup>
                <Button onClick={()=>alert('a')}>Login</Button>

            </Form>
        </Col>

      </Row>
     
    </Container>
    <Container fluid={true}>
          <Row>
              <Col xl="10" style={styles.red}>
                  fgf
              </Col>
              <Col xl="2" style={styles.blue}>
                  fdf
              </Col>
          </Row>

        </Container>
    </>
  );
}

export default Example;
