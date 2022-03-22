import React from 'react'
import {Link} from 'react-router-dom'
import MonsterSearch from './MonsterSearch'
import Searchables from './Searchables'





function Monsters() {

  const searchFor = "monsters"
    
    
    


  return (
    <div>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/monsters">Monsters</Link>
        <Link to="/about">About</Link>
      </nav>
    <h2>Monsters</h2>
    <div className='row'>
      <MonsterSearch searchFor={searchFor} />
      <Searchables searchFor={searchFor}/>
    </div>
    </div>
  )
}



export default Monsters