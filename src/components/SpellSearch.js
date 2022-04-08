import axios from 'axios';
import React, { useState } from 'react'
import Searchables from './Searchables'

function Searches(props) {

    const [search, setSearch] = useState('')

    const [name, setName] = useState('Click a Spell on the right!');
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
        let searchWord = word.toLowerCase().replace(/[^a-z,/ ']/g, ' ').trim().replace(/['/]/g, '').replace(/[ ]/g, '-');
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
      <div className='spellStats'>
        <h2 className='center'>Spell Stats</h2>
        {name ? <h3>{name}</h3>: null}
        {desc ? <div><h4>Description</h4><p>{desc}</p></div>: null}
        {higherLevel ? <div><h4>At Higher Levels</h4><p>{higherLevel}</p></div> : null}
        <div className='row'>
        <div className='spellInfo'>
          {range ? <div className='spellCard'><p><b>Range: </b>{range}</p></div>: null}
          {components ? <div className='spellCard'><p><b>Components: </b>{components}</p></div>: null}
          {material ? <div className='spellCard'><p><b>Materials: </b>{material}</p></div>: null}
          {ritual ? <div className='spellCard'><p><b>Ritual: </b>{ritual}</p></div>: null}
          {duration ? <div className='spellCard'><p><b>Duration: </b>{duration}</p></div>: null}
          {concentration ? <div className='spellCard'><p><b>Concentration: </b>{concentration}</p></div>: null}

          {castingTime ? <div className='spellCard'><p><b>Casting Time: </b>{castingTime}</p></div>: null}
          {level ? <div className='spellCard'><p><b>Starting Level: </b>{level}</p></div>: null}
          {school ? <div className='spellCard'><p><b>School: </b>{school}</p></div>: null}
          {dndClass ? <div className='spellCard'><p><b>Available to: </b>{dndClass}</p></div>: null}
          {page ? <div className='spellCard'><p><b>Reference: </b>{page}</p></div>: null}
          {archetype ? <div className='spellCard'><p><b>Arcehtype: </b>{archetype}</p></div>: null}
          {circles ? <div className='spellCard'><p><b>Circles: </b>{circles}</p></div>: null}
        </div>
        </div>
        
      </div>

      <div className='border background'>
      <h2 className='center'>Available Spells</h2>
      <input type='text' placeholder= "Search Here" onChange={e=> setSearch(e.target.value)}></input>
        <button onClick={() => searchFunc(search)}>Search</button>
      <Searchables searchFor={props.searchFor} search={searchFunc} />
      </div>

    </div>
  )
}

export default Searches