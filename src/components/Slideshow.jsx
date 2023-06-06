import React from "react";
// import { useState } from "react";
// import data from "../data/logements.json";

// const [picture, setPicture] = useSate(0);

function Slideshow(props) {
  // const nextPicture = () => {
  //   if (picture === data.pictures.length - 1) {
  //     setPicture(0);
  //   } else {
  //     setPicture(picture + 1);
  //   }
  // };

  // const previousPicture = () => {
  //   if (picture === 0) {
  //     setPicture(data.pictures.length - 1);
  //   } else {
  //     setPicture(picture - 1);
  //   }
  // };

  return (
    <div>
      <img src={props.pictures} alt="places" />
      <div>
        <i className="fa-solid fa-chevron-left"></i>

        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div>
        <p>
          {props.number}/{props.total}
        </p>
      </div>
    </div>
  );
}

export default Slideshow;
