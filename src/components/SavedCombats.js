import React from 'react'

function SavedCombats(props) {
  const userId = localStorage.getItem('id');


  return (
    <div>
      {props.combats && props.combats.map((obj)=>{
        return <p key={obj.id} onClick={()=>props.updateCombats(JSON.parse(obj.monsters))} >{obj.name}</p>
      })}
    </div>
  )
}

export default SavedCombats