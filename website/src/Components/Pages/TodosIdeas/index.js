import React from 'react';

import { Container ,TodosBoxes, Todos, TextH1, TextH2, TextH3, TextH4, TextH5, TextH6 ,ProgressBar} from './styles';
import Header from "../../Components/Header/index.js"
import Todo from "../../Components/Todo/index.js"

const TodosIdeas = () => {
  var progressTest = 100;
  return (
    <>
    <Container>
      <Header/>  
        <TextH1>
          Pagina onde deixarei conceitos e ideias futuras junto com o progresso das mesmas
        </TextH1>
      <TodosBoxes>
        <Todo progressTest={progressTest-15} tittle={"Criar Paginas Iniciais"} obs={"Atraves de ideias iniciar as paginas iniciais do site, como a pagina de todo, wow etc onde serao implementadas a conexao com o backend, apos isto iniciar o back end"}/>
        <Todo progressTest={progressTest} tittle={"Titulo milton"} obs={"Milton brabo"}/>
        <Todo progressTest={progressTest-25} tittle={"Criar Pagina de Admin"} obs={"Pagina de onde eu poderei acessar tudo e editar as coisas por la alem de poder por novos conteudos por la"}/>
        <Todo progressTest={progressTest-9} tittle={"Adicionar Sistema de Tradução"} obs={"Procurar sobre um sistema q permita a tradução do site para alguns idiomas"}/>
        <Todo progressTest={progressTest-80} tittle={"Docker"} obs={"Apos o sistemar ter uma base começar a Migrar ele todo p um docker"}/>
        <Todo progressTest={progressTest-56} tittle={"Fazer responsividade"} obs={"Obs2"}/>
        <Todo progressTest={progressTest} tittle={"Titulo 1"} obs={"Obs2"}/>
      </TodosBoxes>
    </Container>
    </>
  );
};

export default TodosIdeas;
