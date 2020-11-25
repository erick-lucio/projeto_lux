import React from 'react';

import { Container ,TodosBoxes, Todos, TextH1, TextH2, TextH3, TextH4, TextH5, TextH6 ,ProgressBar} from './styles';
import Header from "../../Components/Header/index.js"
import Todo from "../../Components/Todo/index.js"

const TodosFrontEnd = () => {
  var progressTest = 100;
  return (
    <>
    <Container>
      <Header/>   
      <TextH1>
          Pagina onde deixarei conceitos mais tecnicos do front end
        </TextH1> 
      <TodosBoxes>
        <Todo progressTest={progressTest-15} tittle={"Usar react"} obs={"Atraves de react + hooks to criando isso aqui + node e no futuro docker"}/>
        <Todo progressTest={progressTest-25} tittle={"Titulo 1"} obs={"Obs2"}/>
        <Todo progressTest={progressTest-9} tittle={"Titulo 1"} obs={"Obs2"}/>
        <Todo progressTest={progressTest-80} tittle={"Titulo 1"} obs={"Obs2"}/>
        <Todo progressTest={progressTest-56} tittle={"Titulo 1"} obs={"Obs2"}/>
        <Todo progressTest={progressTest} tittle={"Titulo 1"} obs={"Obs2"}/>
      </TodosBoxes>
    </Container>
    </>
  );
};

export default TodosFrontEnd;
