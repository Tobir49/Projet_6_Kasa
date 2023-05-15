import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";


/////////Routes pour les différentes pages\\\\\\\\\\ 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/////////On place les routes créées plus haut, à la place de la <div id='root'> dans le HTML\\\\\\\\\\ 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);