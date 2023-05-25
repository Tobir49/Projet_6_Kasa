import React from "react";

function PlaceTitle(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.location}</h3>
        </div>
    )
}

export default PlaceTitle;