import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Spells from "./components/Spells";
import About from "./components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='spells' element={<Spells />} />
        <Route path='about' element={<About />} />
      </Routes>

    </div>
  );
}


export default App;
