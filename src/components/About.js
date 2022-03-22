import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/about">About</Link>
      </nav>
    <h2>About</h2>
    <p>Hi! My name is Calvin and I love DnD. I've been playing 5th edition for a few years  now and wanted to make the game more accessible for others- all while staying free to the consumer. That's why you'll find only the base classes and info on this site. Eventually, I decided that just having a character builder wasn't enough. After DMing for a bit, I decided to make every DM's lives easier by building the Combat Tracker on this site. I hope you find the website useful! 
    </p>
    </div>
  )
}

export default About