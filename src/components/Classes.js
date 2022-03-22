import React, { useEffect, useState } from 'react'
import ClassSearch from './ClassSearch'
import Navigation from './Navigation'
import Searchables from './Searchables'





function Classes() {

  const searchFor = "classes"
    
    
    


  return (
    <div>
    <Navigation />
    <h2>Classes</h2>
    <div className='row'>
      <ClassSearch searchFor={searchFor} />
      <Searchables searchFor={searchFor}/>
    </div>
    </div>
  )
}



export default Classes