import React from "react";
import { useState } from "react";
import "./styles/collapse.css";

function Collapse(props) {
  const [open, setOpen] = useState(false);
  //L'état initial de la variable 'open' est 'false'
  // La variable 'setOpen' sert à 'mettre à jour' l'état de la variable 'open'

  const buttonHandler = () => {
    setOpen((current) => !current);
    //Passer de 'open=false' à 'open=true' à chaque appel de cette constante
  };

  return (
    <div className={props.classFlex}>
      <div
        className={`${props.classTitle} classDefaultUseTitleCollapse`}
        onClick={buttonHandler}
      >
        <h3 className="collapse-title">{props.title}</h3>
        {open ? (
          <i className="fa-solid fa-chevron-up chevron"></i>
        ) : (
          <i className="fa-solid fa-chevron-down chevron"></i>
        )}
        {/* Cette partie avec {open ? <i> : <i>} permet de passer d'une flèche à une autre selon l'état de la variable */}
      </div>

      {/* Ici, si open=true alors on va afficher le code entre () */}
      {open && (
        <div className={`${props.classText} classDefaultUseTextCollapse`}>
          {props.isList ? (
            // On va avoir soit une liste s'il y a un tableau :
            <ul>
              {props.text.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
              {/* On crée autant de <li> qu'il y a d'éléments grâce à .map */}
            </ul>
          ) : (
            // Soit un simple texte :
            props.text
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
