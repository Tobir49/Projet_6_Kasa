import React from "react";
import "./styles/slideshow.css";

// function Slideshow(props) {

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

function Slideshow(props) {
  return <img className={props.className} src={props.src} alt="slideshow" />;
}

export default Slideshow;
