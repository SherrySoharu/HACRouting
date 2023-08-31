import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact-us" element={<Contact />} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
