import React from "react";
import { useState } from 'react';

function Collapse(props){
    const isOpen = useState(false);
    return isOpen ? (
        <div>
            <h3 onClick={() => isOpen(false)}>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    ) : (
        <div>
            <h3 onClick={() => isOpen(true)}>{props.title}</h3>
        </div>
    )
}

export default Collapse;