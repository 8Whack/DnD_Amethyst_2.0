import React from 'react'
import Navigation from './Navigation'

function Home() {
  return (
    <div>
      <Navigation />
      <h2>Home</h2>
      
          <h2>Welcome to DnD Amethyst!</h2>
          <p>DnD Amethyst is an online tool for new players looking to get into Dungeons and Dragons: 5th Edition. 
          On this site you'll find all the tools you might need to run a successful DnD Campaign. Everything here is material that Wizards of the Coast has made available to the public.
          Use the menu on the left to navigate, and have fun! </p>
          <h3>Tools Currently Available</h3>
          <ul>
              <li>Spell Searching</li>
              <li>Monster Manual</li>
          </ul>
    </div>
  )
}

export default Home