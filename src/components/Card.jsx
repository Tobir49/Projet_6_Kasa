import React from 'react';
import { Link } from  "react-router-dom";

function Card(props) {
    return (
        <div>
            <Link to={`/logements/${props.id}`}>
                <div className='figure-card'>
                    <img src={props.cover} alt="logements"/>
                    <span className='card-title'>{props.title}</span>
                </div>
            </Link>
        </div>
    );
  }
  
  export default Card;