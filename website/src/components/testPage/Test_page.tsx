import React from "react";

import { useSelector, useDispatch } from "react-redux";
/*import css */

/*import de imagens */

///

//import store from "../../store/index";

const Test_page = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  console.log(state)
  const insert = (variable1?: string) => {
    dispatch({type:"T1",name:variable1})
  }
  return (
    <>
      <button onClick={()=>insert()}>click me</button>
    </>);

};

export default Test_page;
