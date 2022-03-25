import React from 'react'
import CombatSearch from './CombatSearch';
import Navigation from './Navigation'

function CombatTracker() {
    const searchFor = 'monsters';
  return (
    <div>
        <Navigation />
        <h2>Combat tracker</h2>
        <CombatSearch searchFor={searchFor} />
    </div>
  )
}

export default CombatTracker