import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/monsters">Monsters</Link>
        <Link to="/combat-tracker">Combat Tracker</Link>

        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

export default Navigation