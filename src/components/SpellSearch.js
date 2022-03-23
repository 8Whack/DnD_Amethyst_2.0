import axios from 'axios';
import React, { useState } from 'react'
import Searchables from './Searchables'

function Searches(props) {

    const [search, setSearch] = useState('')

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [higherLevel, setHigherLevel] = useState('');
    const [page, setPage] = useState('');
    const [range, setRange] = useState('');
    const [components, setComponents]= useState('');
    const [material, setMaterial] = useState('');
    const [ritual, setRitual] = useState('');
    const [duration, setDuration] = useState('');
    const [concentration, setConcentration] = useState('');
    const [castingTime, setCastingTime] = useState('');
    const [level, setLevel] = useState('');
    const [levelInt, setLevelInt] = useState('');
    const [school, setSchool] = useState('');
    const [dndClass, setDndClass] = useState('');
    const [archetype, setArchetype] = useState('');
    const [circles, setCircles] = useState('');

    function searchFunc(word) {
        let searchWord = word.toLowerCase().replace(/[^a-z, ']/g, ' ').trim().replace(/[']/g, '').replace(/[ ]/g, '-');
        console.log(searchWord)
        axios.get(`https://api.open5e.com/${props.searchFor}/${searchWord}`).then((res)=> {
            console.log(res.data);
            setName(res.data.name);
            setDesc(res.data.desc);
            setHigherLevel(res.data.higher_level);
            setPage(res.data.page);
            setRange(res.data.range);
            setComponents(res.data.components);
            setMaterial(res.data.material);
            setRitual(res.data.ritual);
            setDuration(res.data.duration);
            setConcentration(res.data.concentration);
            setCastingTime(res.data.casting_time);
            setLevel(res.data.level);
            setLevelInt(res.data.level_int);
            setSchool(res.data.school);
            setDndClass(res.data.dnd_class);
            setArchetype(res.data.archetype);
            setCircles(res.data.circles);
        })
        setSearch('');
    }

  return (
    <div  className='row'>
      <div>
        <input type='text' placeholder= "Search Here" onChange={e=> setSearch(e.target.value)}></input>
        <button onClick={() => searchFunc(search)}>Search</button>
        {name ? <h3>{name}</h3>: null}
        {desc ? <div><h4>Description</h4><p>{desc}</p></div>: null}
        {higherLevel ? <div><h4>At Higher Levels</h4><p>{higherLevel}</p></div> : null}
        {range ? <div><h4>Range</h4> <p>{range}</p></div>: null}
        {components ? <div><h4>Components</h4><p>{components}</p></div>: null}
        {material ? <div><h4>Materials</h4><p>{material}</p></div>: null}
        {ritual ? <div><h4>Ritual</h4><p>{ritual}</p></div>: null}
        {duration ? <div><h4>Duration</h4><p>{duration}</p></div>: null}
        {concentration ? <div><h4>Concentration</h4><p>{concentration}</p></div>: null}
        {castingTime ? <div><h4>Casting Time</h4><p>{castingTime}</p></div>: null}
        {level ? <div><h4>Starting Level</h4><p>{level}</p></div>: null}
        {school ? <div><h4>School</h4><p>{school}</p></div>: null}
        {dndClass ? <div><h4>Available to</h4><p>{dndClass}</p></div>: null}
        {page ? <div><h4>Reference</h4><p>{page}</p></div>: null}
        {archetype ? <div><h4>Archetype</h4><p>{archetype}</p></div>: null}
        {circles ? <div><h4>Circles</h4><p>{circles}</p></div>: null}
      </div>
      <Searchables searchFor={props.searchFor} search={searchFunc} />

    </div>
  )
}

export default Searches