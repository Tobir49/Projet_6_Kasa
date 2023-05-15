import React from "react";
import Card from "./Card";
import { galleryLogements } from "../data/logements";

function Cards (){
    return (
        <div>
        {galleryLogements.map((e) => (
            <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
        ))}
    </div>
    );
}

export default Cards();