/*Component imports */
import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import Checkbox_end from "../material_ui/CheckBox";
import TextArea from "../material_ui/TextArea";
import { useSelector, useDispatch } from "react-redux";

/*functions import */
import axios from "axios";
import { useCookies } from "react-cookie";

/*css imports */



export default function Logs() {
  return (
    <>
      <Container className="class_logs_container">
        <h3>Esta pagina e so p me lembrar das coisa</h3>
        <ul>
          <li>Iniciado Backend</li>
          <li>Iniciado Front</li>
          <li>Upado backend heroku,fornt end no server la</li>
          <li>
            criado algumas rotas e sistema basicao de usuario c criptografia
          </li>
          <li>criado de layouts iniciais</li>
          <li>Implementar botao e Loggof</li>
          <li>.</li>
          <li>.</li>
          <li>Fazer mais telas [perfil,chat]</li>
          <li>
            Criar mais rotas p essas telas e pensar em novas funcionalidades
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Container>
    </>
  );
}
