import React from 'react'
import CombatSearch from './CombatSearch';
import Navigation from './Navigation'

function CombatTracker() {
    const searchFor = 'monsters';
  return (
    <div className='combat'>
        <Navigation />
        <h1>Combat Tracker</h1>
        <CombatSearch searchFor={searchFor} />
    </div>
  )
}

export default CombatTracker