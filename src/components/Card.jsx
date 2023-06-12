import React from "react";
import { Link } from "react-router-dom";
import "./styles/card.css";

function Card(props) {
  return (
    <Link
      to={`/places/${props.id}`}
      className="div-card"
      onClick={() => window.scroll(0, 0)}
    >
      {/* Accéder à la page de chaque logement grâce à l'id  */}
      <img src={props.cover} alt="logements" className="img-card" />
      <span className="card-title">{props.title}</span>
    </Link>
  );
}

export default Card;
