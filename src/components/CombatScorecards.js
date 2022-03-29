import axios from 'axios';
import React, {useEffect, useState} from 'react'

function CombatScorecards(props) {
  useEffect(()=>{
    let searchWord = props.name.toLowerCase().replace(/[,'()]/g, '').replace(/[^a-z ]/g, ' ').trim().replace(/[ ]/g, '-');
        console.log(searchWord)
    axios.get(`https://api.open5e.com/monsters/${searchWord}`).then((res)=>{
      setInfo({
        name: res.data.name,
        AC: res.data.armor_class
      })
      setHp(res.data.hit_points)
    })
  }, [])

  const [info, setInfo] = useState({
    name: '',
    AC: ''
  });

  const [hp, setHp] = useState('');




  return (
    <div onClick={()=> props.search(info.name)}>
        <h3>{info.name}</h3>
        <p><b>Hit Points: </b><button onClick={()=>setHp(hp-1)}>-</button> {hp} <button onClick={()=>setHp(hp+1)}>+</button></p>
        <p><b>Armor Class: </b>{info.AC}</p>
        
        <p>--------------</p>
    </div>
  )
}

export default CombatScorecards