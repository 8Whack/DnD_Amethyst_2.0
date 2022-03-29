import React from 'react'
import CombatSearch from './CombatSearch';
import Navigation from './Navigation'

function CombatTracker() {
    const searchFor = 'monsters';
  return (
    <div>
        <Navigation />
        <h1>Combat tracker</h1>
        <CombatSearch searchFor={searchFor} />
    </div>
  )
}

export default CombatTracker