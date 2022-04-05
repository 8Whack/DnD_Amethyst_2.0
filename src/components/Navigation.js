import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {LoginContext} from '../App'

function Navigation() {
  const {loggedIn, setLoggedIn} = useContext(LoginContext);
  console.log(loggedIn)
  return (
    <div className='row'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/combat-tracker">Combat Tracker</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/monsters">Monsters</Link>
        

        <Link to="/about">About</Link>
      </nav>
      <div>
      {loggedIn ? <h3>Welcome, {localStorage.getItem('username')}</h3> : <Link to="/signin">Sign In</Link>}
      </div>
    </div>
  )
}

export default Navigation