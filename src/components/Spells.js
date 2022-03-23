import React from 'react'
import Navigation from './Navigation'
import Searches from './SpellSearch'




function Spells() {

  const searchFor = "spells"


  return (
    <div>
    <Navigation />
    <h2>Spells</h2>
    <div>
      <Searches searchFor={searchFor} />
    </div>

    </div>
  )
}

export default Spells