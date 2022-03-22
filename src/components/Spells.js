import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Searchables from './Searchables'
import Searches from './SpellSearch'




function Spells() {

  const searchFor = "spells"


  return (
    <div>
    <Navigation />
    <h2>Spells</h2>
    <div className='row'>
      <Searches searchFor={searchFor} />
      <Searchables searchFor={searchFor}/>
    </div>

    </div>
  )
}

export default Spells