import React from "react";
import { useState } from 'react';
import "./styles/collapse.css";

function Collapse(props){
    //Stackoverflow
    const [open, setOpen] = useState(false)

    const buttonHandler = () => {
        setOpen(current => !current)
        console.log(open)
    }

    return (
        <div className="div-one-collapse">
            <div className="div-title-collapse" onClick={buttonHandler}>
                <h3 className="collapse-title">{props.title}</h3>
                <i class="fa-solid fa-chevron-up chevron-up"></i>
            </div>
            {open && (
                <p className="collapse-text">{props.text}</p>
            )}           
        </div>
    )
}

export default Collapse;