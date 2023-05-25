import React from "react";
import "./styles/placehost.css";

function PlaceHost(props){
    return(
        <div>
            <p className="place-host-name">{props.host.name}</p>
            <p className="place-host-picture">{props.host.picture}</p>
        </div>
    )
}

export default PlaceHost;