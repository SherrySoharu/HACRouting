import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Landing from "./component/Landing";

function App() {
  
    return (
      <div>
        <NavBar />
        <Routes>
         <Route path="/Home" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route path="/" element={<Landing/>} />
        </Routes>
        <Footer/>
        
      </div>
    );

  }


export default App;
