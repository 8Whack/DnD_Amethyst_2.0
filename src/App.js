import React, {useState, useEffect, createContext} from "react";
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

const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() =>{
    if(localStorage.getItem('username')){
      setLoggedIn(true)
    }
  }, [])

  return (
    <div>
      <LoginContext.Provider value={{loggedIn,setLoggedIn}}>
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
      </LoginContext.Provider>
    </div>
  );
}


export default App;
export {LoginContext};