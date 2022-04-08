import React from 'react'

function SavedCombats(props) {
  const userId = localStorage.getItem('id');


  return (
    <div >
      {props.combats && props.combats.map((obj)=>{
        return <div className='row savedCombats'><p key={obj.id} onClick={()=>props.setCombats(JSON.parse(obj.monsters))} >{obj.name} <button onClick={()=>props.deleteCombat(obj.id)}>x</button></p>
        
        </div>
      })}
    </div>
  )
}

export default SavedCombats