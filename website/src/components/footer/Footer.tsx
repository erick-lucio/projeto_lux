/*Component imports */
import React, { useState, useEffect } from "react";

import { render } from "react-dom";
import { Link, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

/*css imports */

/* Img imports*/
import Instagram from "../../imgs/Instagran_icon.png";

export default function Footer() {
  const dispatch_func = useDispatch();
  const store_data = useSelector((state) => state);
  document.title = "Personal Website";
  const footer_emater = true;
  function LogOFF() {
    dispatch_func({
      type: "LOGIN_",
      logstate: "false",
    });
  }

  return <></>;
}
