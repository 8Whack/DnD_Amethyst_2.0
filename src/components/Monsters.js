import React from 'react'
import MonsterSearch from './MonsterSearch'
import Navigation from './Navigation'






function Monsters() {

  const searchFor = "monsters"
    
    
    


  return (
    <div>
    <Navigation />
    <h2>Monsters</h2>
    <div>
      <MonsterSearch searchFor={searchFor} />

    </div>
    </div>
  )
}



export default Monsters