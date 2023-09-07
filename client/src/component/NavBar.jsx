import { NavLink } from "react-router-dom";
import "../Styles/Style.css";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
const navigate = useNavigate();

const logout = () => {
  localStorage.clear();
  navigate("/");
}
  return (
    <>
      {/* <Style /> */}
      {
        localStorage.getItem("name")? <nav>
        <NavLink to="/">ISRO</NavLink>
        <NavLink to="/Home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/Contact-us">Contact</NavLink>
      <button onClick={logout}>LogOut</button>
        </nav> : 
        <nav id="login">
        <NavLink to="/">ISRO</NavLink>
      <button  className="btnn" onClick={()=>navigate("/login")}>Login</button>
        </nav>
      }
    </>
  );
};
export default NavBar;
