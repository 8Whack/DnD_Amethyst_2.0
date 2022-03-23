import React from 'react'
import ClassSearch from './ClassSearch'
import Navigation from './Navigation'






function Classes() {

  const searchFor = "classes"
    
    
    


  return (
    <div>
    <Navigation />
    <h2>Classes</h2>
    <div className='row'>
      <ClassSearch searchFor={searchFor} />

    </div>
    </div>
  )
}



export default Classes