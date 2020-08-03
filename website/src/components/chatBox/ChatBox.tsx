/*Component imports */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

/*functions import */
import axios from "axios";

/*css imports */

export default function ChatBox() {
  const [render, setRender] = useState(0);
  const store_data = useSelector((state) => state);
  const dispatch_func = useDispatch();
  return <></>;
}
