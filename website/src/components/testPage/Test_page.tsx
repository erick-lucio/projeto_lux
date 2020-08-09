import React from "react";

import { useSelector, useDispatch } from "react-redux";
/*import css */

/*import de imagens */

///

//import store from "../../store/index";
import { combinedInterface } from '../../store/Store';

const Test_page = () => {
  const dispatch = useDispatch();
  const state:any = useSelector<combinedInterface>((state:combinedInterface) => state.auth.name) 
  const insert = (variable1?: string) => {
    dispatch({type:"T1",name:variable1})
  }
  console.log(state)
  return (
    <>
      <button onClick={() => insert("lucao")}>Mudar nomee</button>  
      <br></br>
      <h1>{state}</h1>
    </>);

};

export default Test_page;
