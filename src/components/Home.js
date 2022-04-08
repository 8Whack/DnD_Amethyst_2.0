import React from 'react'
import Navigation from './Navigation'

function Home() {
  return (
    <div className='home'>
      <Navigation />
      <div className='center'>
      <div className='background hometext'>
      <h1>Home</h1>
      
      <h2>Welcome to DnD Amethyst!</h2>
      <p>DnD Amethyst is an online tool designed to help DMs run smoother, simpler combats.
      </p>
      <h3>Tools Currently Available</h3>
      <ul>
          <li>Combat Tracker</li>
          <li>Spell Searching</li>            
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Home