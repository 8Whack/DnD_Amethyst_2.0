import React from 'react'
import MonsterSearch from './MonsterSearch'
import Navigation from './Navigation'






function Monsters() {

  const searchFor = "monsters"
    
    
    


  return (
    <div className='monsters'>
    <Navigation />
    <h1>Monsters</h1>
    <div>
      <MonsterSearch searchFor={searchFor} />
    </div>
    </div>
  )
}



export default Monsters