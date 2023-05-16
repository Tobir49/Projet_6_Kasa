import React from "react";
import Card from "./Card";
import data from "../data/logements.json";
import "./styles/card.css";

function Cards(){
    return (
        <div className='div-cards'>
            {data.map((e) => (
                <Card key={e.id} id={e.id} title={e.title} cover={e.cover}/>
            ))}   
        </div>
    );
}

export default Cards;