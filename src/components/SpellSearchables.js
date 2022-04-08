import React, {useContext} from 'react'
import {LoginContext} from '../App';
function SpellSearchables(props) {
    const {spellsRes} = useContext(LoginContext);
    
  return (
    <div className='overflow'>
        {spellsRes.map((results)=>{
            return <p onClick={(e)=> props.search(e.target.innerHTML)} key={spellsRes.indexOf(results)}>{results}</p>
        })}
    </div>
  )
}

export default SpellSearchables