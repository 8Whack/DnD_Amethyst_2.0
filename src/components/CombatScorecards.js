import axios from 'axios';
import React, {useEffect, useState} from 'react'

function CombatScorecards(props) {

  return (
    <div onClick={()=> props.search(props.info.name)}>
        <h3>{props.info.name}</h3>
        <p><b>Hit Points: </b><button onClick={()=>props.modHp(props.index, '-')}>-</button> {props.info.HP} <button onClick={()=>props.modHp(props.index, '+')}>+</button></p>
        <p><b>Armor Class: </b>{props.info.AC}</p>
        <button onClick={()=>props.delete(props.index)}>x</button>
        
        <p>--------------</p>
    </div>
  )
}

export default CombatScorecards