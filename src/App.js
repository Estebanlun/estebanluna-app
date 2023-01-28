import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Explab from "./pages/Explab";
import Expacd from "./pages/Expacd";
import Softsk from "./pages/Softsk";
import Techsk from "./pages/Techsk";
import Contact from "./pages/Contact";
import Idioma from "./pages/Idioma";
import Cv from "./pages/Cv";
import MoreProj from "./pages/MoreProj";
import GaleryMarvel from "./projects/GaleryMarvel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/work-experience" element={<Explab />} />
        <Route exact path="/academic-experience" element={<Expacd />} />
        <Route exact path="/tech-skills" element={<Techsk />} />
        <Route exact path="/soft-skills" element={<Softsk />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/lenguage" element={<Idioma />} />
        <Route exact path="/cv" element={<Cv />} />
        <Route exact path="/more-projects" element={<MoreProj />} />
        <Route exact path="/marvel-gallery" element={<GaleryMarvel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
