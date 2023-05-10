import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
        <nav>
            <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
};

export default Layout;