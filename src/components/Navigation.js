import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {LoginContext} from '../App'

function Navigation() {
  const {loggedIn, setLoggedIn} = useContext(LoginContext);
  console.log(loggedIn)

  const logOut = () =>{
    window.localStorage.clear();
    setLoggedIn(false)
    window.location.reload();
  }
  return (
    <div className='navigation'>
      <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/combat-tracker">Combat Tracker</Link>
          <Link to="/spells">Spells</Link>
          <Link to="/monsters">Monsters</Link>
      </div>

      <div >
      {loggedIn ? <div className='login-in'>
        <h3>Welcome, {localStorage.getItem('username')}</h3>
        <button onClick={()=>logOut()} >Log Out</button>
        </div> : <Link to="/signin">Sign In</Link>}
      </div>
    </div>
  )
}

export default Navigation