import React from "react";
import { useState } from "react";
import "./styles/collapse.css";

function Collapse(props) {
  const [open, setOpen] = useState(false);

  const buttonHandler = () => {
    setOpen((current) => !current);
  };

  return (
    <div className={props.classFlex}>
      <div
        className={`${props.classTitle} classDefaultUseTitleCollapse`}
        onClick={buttonHandler}
      >
        <h3 className="collapse-title">{props.title}</h3>
        {open ? (
          <i className="fa-solid fa-chevron-up chevron"></i>
        ) : (
          <i className="fa-solid fa-chevron-down chevron"></i>
        )}
      </div>
      {open && (
        <p className={`${props.classText} classDefaultUseTextCollapse`}>
          {props.text}
        </p>
      )}
    </div>
  );
}

export default Collapse;
