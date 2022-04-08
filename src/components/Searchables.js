import React, {useContext} from 'react'
import {LoginContext} from '../App';
function Searchables(props) {
    const {res} = useContext(LoginContext);
    
  return (
    <div className='overflow'>
        {res.map((results)=>{
            return <p onClick={(e)=> props.search(e.target.innerHTML)} key={res.indexOf(results)}>{results}</p>
        })}
    </div>
  )
}

export default Searchables