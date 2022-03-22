import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Searchables from './Searchables'
import Searches from './SpellSearch'




function Spells() {

  const searchFor = "spells"


  return (
    <div>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/about">About</Link>
      </nav>
    <h2>Spells</h2>
    <div className='row'>
      <Searches searchFor={searchFor} />
      <Searchables searchFor={searchFor}/>
    </div>

    </div>
  )
}

export default Spells