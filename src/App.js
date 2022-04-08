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
import axios from "axios";

const LoginContext = createContext();

function App() {
  const [res, setRes] = useState([]);
  const [spellsRes, setSpellsRes] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() =>{
    if(localStorage.getItem('username')){
      setLoggedIn(true)
    }

    let allRes = [];
    let allSpells = [];
  
        axios.get(`https://api.open5e.com/monsters/?limit=10000`)
      .then((res)=>{
          console.log(res.data)
          for(let i=0; i< res.data.results.length; i++){
              allRes.push(res.data.results[i].name)
          }
          setRes(allRes)
      })

      axios.get(`https://api.open5e.com/spells/?limit=10000`)
      .then((res)=>{
          console.log(res.data)
          for(let i=0; i< res.data.results.length; i++){
              allSpells.push(res.data.results[i].name)
          }
          setSpellsRes(allSpells)
      })

  }, [])

  return (
    <div>
      <LoginContext.Provider value={{loggedIn,setLoggedIn, res, spellsRes}}>
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