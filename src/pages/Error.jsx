 import "./error.css";
 import { Link } from "react-router-dom";

 
 const Error = () => {
    return (
    <div className="div-error">
      <h1 className="error-title">404</h1>
      <p className="error-subtitle">Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/home" className="error-link">Retourner sur la page d'accueil</Link>
    </div>
    );
  };
  
  export default Error;