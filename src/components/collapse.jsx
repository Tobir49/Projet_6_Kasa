import React from "react";
import { useState } from 'react';
import "./styles/collapse.css";

function Collapse(props){
    //Stackoverflow
    const [isLoading, setIsLoading] = useState(false)

    const buttonHandler = () => {
        setIsLoading(current => !current)
        console.log(isLoading)
    }

    return (
        <div className="div-one-collapse">
            <h3 onClick={buttonHandler} className="collapse-title">{props.title}</h3>
            <p className="collapse-text">{props.text}</p>
        </div>
    )
}

export default Collapse;