import React from "react";
import "./styles/chevron.css";

function Chevron(props) {
  return <i className={props.classChevron} onClick={props.onClick}></i>;
}

export default Chevron;
