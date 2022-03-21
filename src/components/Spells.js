import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'




function Spells() {


    let allSpells = []
    

    const [spells, setSpells] = useState(['Hi', 'How Are You'])

    axios.get('https://www.dnd5eapi.co/api/spells')
    .then((res)=>{
        console.log(res.data)
        for(let i=0; i< res.data.count; i++){
            allSpells.push(res.data.results[i].name)
        }
        //setSpells(allSpells)
    })

    const getSpells= () =>{
        console.log(allSpells)
        console.log(spells)
    }

  return (
    <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <h2>Spells</h2>
    <div>
        {spells.map((spell)=>{
            return <p key={spell.length}>{spell}</p>
        })}
        <button onClick={()=>getSpells()}> Get Spells</button>
    </div>
    </div>
  )
}

export default Spells