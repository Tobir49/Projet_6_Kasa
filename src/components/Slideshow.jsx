import React from "react";
// import { useState } from "react";
import "./styles/slideshow.css";
// // import data from "../data/logements.json";

// function Slideshow(props) {
//   const [picture, setPicture] = useState(0);

//   const buttonHandler = () => {
//     setPicture((current) => !current);
//   };
//   // const nextPicture = () => {
//   //   if (picture === data.pictures.length - 1) {
//   //     setPicture(0);
//   //   } else {
//   //     setPicture(picture + 1);
//   //   }
//   // };

//   // const previousPicture = () => {
//   //   if (picture === 0) {
//   //     setPicture(data.pictures.length - 1);
//   //   } else {
//   //     setPicture(picture - 1);
//   //   }
//   // };

//   return (
//     <div className="div-slideshow">
//       <img src={props.pictures} alt="places" className="picture-slideshow" />
//       <div>
//         <i
//           className="fa-solid fa-chevron-left arrow-left"
//           onClick={buttonHandler}
//         ></i>
//         {/* {picture && setPictures(0)} */}
//         <i
//           className="fa-solid fa-chevron-right arrow-right"
//           onClick={buttonHandler}
//         ></i>
//       </div>
//       <div>
//         <p className="number-slideshow">
//           {props.number}/{props.total}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Slideshow;
function Slideshow(props) {
  return <img className={props.className} src={props.src} alt="slideshow" />;
}

export default Slideshow;
