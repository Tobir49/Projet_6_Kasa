import React from "react";
import Card from "./Card";
import data from "../data/logements.json";

function Cards(){
    return (
        <div>
            {data.map((e) => (
                <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
            ))}   
        </div>
    );
}

export default Cards;