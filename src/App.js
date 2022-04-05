import React, {useState, useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Spells from "./components/Spells";
import About from "./components/About";
import Classes from "./components/Classes";
import Monsters from "./components/Monsters";
import CombatTracker from "./components/CombatTracker";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginUser = () => setIsLoggedIn(!isLoggedIn);

  useEffect(() =>{
    if(localStorage.getItem('user')){
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='spells' element={<Spells />} />
        <Route path='classes' element={<Classes />} /> 
        <Route path='monsters' element={<Monsters />} />
        <Route path='about' element={<About />} />
        <Route path='combat-tracker' element={<CombatTracker/>} />
        <Route path='signin' element={<SignIn />} />
        <Route path='register' element={<Register />} />
      </Routes>

    </div>
  );
}


export default App;
