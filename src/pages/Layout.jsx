import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import { Navigate } from "react-router-dom";

function Layout() {
  return ( 
    <div>
      <Nav />
      <Footer></Footer>
      {/* <Navigate to="home" replace={true}/> */}
    </div>    
)
}

export default Layout;