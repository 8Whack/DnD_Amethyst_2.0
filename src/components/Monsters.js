import React from 'react'
import MonsterSearch from './MonsterSearch'
import Navigation from './Navigation'
import Searchables from './Searchables'





function Monsters() {

  const searchFor = "monsters"
    
    
    


  return (
    <div>
    <Navigation />
    <h2>Monsters</h2>
    <div className='row'>
      <MonsterSearch searchFor={searchFor} />
      <Searchables searchFor={searchFor}/>
    </div>
    </div>
  )
}



export default Monsters