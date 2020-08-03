/*Component imports */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import Checkbox_end from "../material_ui/CheckBox";
import TextArea from "../material_ui/TextArea";

/*functions import */
import axios from "axios";

/*css imports */

export default function Admin() {
  const [render, setRender] = useState(0);
  const store_data = useSelector((state) => state);
  const dispatch_func = useDispatch();
  //id_admin_page_texturl
  function setUrlBackend() {
    dispatch_func({
      type: "SET_URL_",
      url: 2,
    });

    let url_id_value: string = (document.getElementById(
      "id_admin_page_texturl"
    ) as HTMLInputElement).value;
    //setRender(!render)
  }

  function setAuth() {
    dispatch_func({
      type: "LOGIN_",
      logstate: "true",
    });
  }
  return <></>;
}
