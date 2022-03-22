import React, {useState} from 'react';
import axios from 'axios';

function ClassSearch(props) {

    const [search, setSearch] = useState('')

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');


    function searchFunc() {
        let searchWord = search.toLowerCase().replace(/[^a-z, ']/g, ' ').trim().replace(/[']/g, '').replace(/[ ]/g, '-');
        console.log(searchWord)
        axios.get(`https://api.open5e.com/${props.searchFor}/${searchWord}`).then((res)=> {
            console.log(res.data);
            setName(res.data.name);
            setDesc(res.data.desc);
          
        })
        setSearch('');
    }

  return (
    <div>
        <input type='text' placeholder= "Search Here" onChange={e=> setSearch(e.target.value)}></input>
        <button onClick={() => searchFunc()}>Search</button>
        {name ? <h3>{name}</h3>: null}
        {desc ? <p>{desc}</p>: null}
    </div>
  )
}

export default ClassSearch