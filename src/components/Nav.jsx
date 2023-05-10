import "./nav.css";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <nav className="header-nav">
          <ul className="nav-banner">
            <li className="li-banner">
                <Link to="/home" className="a-header">Home</Link>
            </li>
            <li className="li-banner">
                <Link to="/about" className="a-header">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
};

export default Nav;