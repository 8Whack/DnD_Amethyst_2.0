import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Searchables(props) {

    
    useEffect(()=>{
        let allRes = []
  
        axios.get(`https://api.open5e.com/${props.searchFor}/?limit=10000`)
      .then((res)=>{
          console.log(res.data)
          for(let i=0; i< res.data.results.length; i++){
              allRes.push(res.data.results[i].name)
          }
          setRes(allRes)
      })
      }, []);

    
      const [res, setRes] = useState([])


      const getRes= () =>{
          console.log(res)
      }
  return (
    <div>
        {res.map((results)=>{
            return <p key={res.indexOf(results)}>{results}</p>
        })}
    </div>
  )
}

export default Searchables