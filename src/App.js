import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Explab from "./pages/Explab";
import Expacd from "./pages/Expacd";
import Softsk from "./pages/Softsk";
import Techsk from "./pages/Techsk";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import UnderConstruction from "./pages/UnderConstruction"



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />    
        <Route exact path="/work-experience" element={<Explab/>} />    
        <Route exact path="/academic-experience" element={<Expacd/>} />    
        <Route exact path="/tech-skills" element={<Techsk/>} />    
        <Route exact path="/soft-skills" element={<Softsk/>} />    
        <Route exact path="/contact" element={<UnderConstruction/>} />    
        <Route exact path="/lenguage" element={<UnderConstruction/>} />    
        <Route exact path="/cv" element={<UnderConstruction/>} />    
        <Route exact path="/more-projects" element={<UnderConstruction/>} />    
        <Route exact path="/blog" element={<UnderConstruction/>} />    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
