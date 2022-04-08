import React from 'react'
import Navigation from './Navigation'
import Searches from './SpellSearch'




function Spells() {

  const searchFor = "spells"


  return (
    <div className='spells'>
    <Navigation />
    <h1>Spells</h1>
    <div>
      <Searches searchFor={searchFor} />
    </div>

    </div>
  )
}

export default Spells