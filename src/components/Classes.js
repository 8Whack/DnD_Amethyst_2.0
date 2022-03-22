import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ClassSearch from './ClassSearch'
import Searchables from './Searchables'





function Classes() {

  const searchFor = "classes"
    
    
    


  return (
    <div>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/monsters">Monsters</Link>
        <Link to="/about">About</Link>
      </nav>
    <h2>Classes</h2>
    <div className='row'>
      <ClassSearch searchFor={searchFor} />
      <Searchables searchFor={searchFor}/>
    </div>
    </div>
  )
}



export default Classes