import React, {useState} from 'react';
import axios from 'axios';
import Searchables from './Searchables'

function ClassSearch(props) {

    const [search, setSearch] = useState('')

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');


    function searchFunc(word) {
        let searchWord = word.toLowerCase().replace(/[^a-z, ']/g, ' ').trim().replace(/[']/g, '').replace(/[ ]/g, '-');
        console.log(searchWord)
        axios.get(`https://api.open5e.com/${props.searchFor}/${searchWord}`).then((res)=> {
            console.log(res.data);
            setName(res.data.name);
            //setDesc(res.data.desc);

            let wanted = ['name', 'hit_dice', 'prof_armor'];

            let keys = Object.keys(res.data);

            console.log(wanted.map(word => keys.filter(key => key === word)))

          
            console.log(keys)
          
        })
        setSearch('');
    }

  return (
    <div>
      <div>
        <input type='text' placeholder= "Search Here" onChange={e=> setSearch(e.target.value)}></input>
        <button onClick={() => searchFunc(search)}>Search</button>
        {name ? <h3>{name}</h3>: null}
        {desc ? <p>{desc}</p>: null}
        </div>
        <Searchables searchFor={props.searchFor}  search={searchFunc} />
    </div>
  )
}

export default ClassSearch