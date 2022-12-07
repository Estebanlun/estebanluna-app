import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Explab from "./pages/Explab";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />    
        <Route exact path="/explab" element={<Explab/>} />    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
