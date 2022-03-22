import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Searchables from './Searchables'
import Searches from './SpellSearch'




function Classes() {

  const searchFor = "classes"
    
    
    


  return (
    <div>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/about">About</Link>
      </nav>
    <h2>Classes</h2>
    <Searches />
    <Searchables searchFor={searchFor}/>

    </div>
  )
}



export default Classes