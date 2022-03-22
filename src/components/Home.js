import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/about">About</Link>
      </nav>
      <h2>Home</h2>
      
          <h2>Welcome to DnD Amethyst!</h2>
          <p>DnD Amethyst is an online tool for new players looking to get into Dungeons and Dragons: 5th Edition. 
          On this site you'll find all the tools you might need to run a successful DnD Campaign. Everything here is material that Wizards of the Coast has made available to the public.
          Use the menu on the left to navigate, and have fun! </p>
          <h3>Tools Currently Available</h3>
          <ul>
              <li>Character Builder</li>
              <li>Spell Searching</li>
              <li>Races</li>
              <li>Classes</li>
              <li>Monster Manual</li>
          </ul>
    </div>
  )
}

export default Home