import { NavLink } from "react-router-dom";
import "../Styles/Style.css";
const NavBar = () => {
  return (
    <nav>
      {/* <Style /> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/Contact-us">Contact</NavLink>
    </nav>
  );
};
export default NavBar;
