import React from 'react';
import { Link } from "react-router-dom";
import "./styles/card.css";

function Card(props) {
    return (
        <div>
            <Link to={`/places/${props.id}`} className='link'>
                <div className='div-card'>
                    <img src={props.cover} alt="logements" className='img-card'/>
                    <span className='card-title'>{props.title}</span>
                </div>
            </Link>
        </div>
    );
  }
  
  export default Card;