import React, {useState} from 'react';
import axios from 'axios';
import Searchables from './Searchables'
import { act } from 'react-dom/test-utils';

function MonsterSearch(props) {

    const [monsterSearch, setMonsterSearch] = useState('')

    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [type, setType] = useState('');
    const [subtype, setSubtype] = useState('');
    const [group, setGroup] = useState('');
    const [alignment, setAlignment] = useState('');
    const [armorClass, setArmorClass] = useState('');
    const [armorDesc, setArmorDesc] = useState('');
    const [hitPoints, setHitPoints] = useState('');
    const [hitDice, setHitDice] = useState('');
    const [speed, setSpeed] = useState('');
    const [str, setStr] = useState('');
    const [dex, setDex] = useState('');
    const [con, setCon] = useState('');
    const [int, setInt] = useState('');
    const [wis, setWis] = useState('');
    const [cha, setCha] = useState('');
    const [strSav, setStrSav] = useState('');
    const [dexSav, setDexSav] = useState('');
    const [conSav, setConSav] = useState('');
    const [intSav, setIntSav] = useState('');
    const [wisSav, setWisSav] = useState('');
    const [chaSav, setChaSav] = useState('');
    const [perception, setPerception] = useState('');
    const [skills, setSkills] = useState();
    const [dmgVul, setDmgVul] = useState('');
    const [dmgRes, setDmgRes] = useState('');
    const [dmgImm, setDmgImm] = useState('');
    const [condImm, setCondImm] = useState('');
    const [senses, setSenses] = useState('');
    const [languages, setLanguages] = useState('');
    const [chalRating, setChalRating] = useState('');
    const [actions, setActions] = useState('');
    const [reactions, setReactions] = useState('');
    const [legDesc, setLegDesc] = useState('');
    const [legActions, setLegActions] = useState('');
    const [specAbilities, setSpecAbilities] = useState('');
    const [spellList, setSpellList] = useState('');
    const [img, setImg] = useState('');



    function searchFunc(word) {
        let searchWord = word.toLowerCase().replace(/[,'()]/g, '').replace(/[^a-z ]/g, ' ').trim().replace(/[ ]/g, '-');
        console.log(searchWord)
        axios.get(`https://api.open5e.com/${props.searchFor}/${searchWord}`).then((res)=> {
            console.log(res.data);
            let speedText = []
            for(let key in res.data.speed){
              speedText.push(key + ' : ' + res.data.speed[key])
            } 

            let skillsText = []
            for(let key in res.data.skills){
              skillsText.push(key + ' : ' + res.data.skills[key])
            } 


            setName(res.data.name);
            setSize(res.data.size);
            setType(res.data.type);
            setSubtype(res.data.subtype);
            setGroup(res.data.group);
            setAlignment(res.data.alignment);
            setArmorClass(res.data.armor_class);
            setArmorDesc(res.data.armor_desc);
            setHitPoints(res.data.hit_points);
            setHitDice(res.data.hit_dice);
            setSpeed(speedText);
            setStr(res.data.strength);
            setDex(res.data.dexterity);
            setCon(res.data.constitution);
            setInt(res.data.intelligence);
            setWis(res.data.wisdom);
            setCha(res.data.charisma);
            setStrSav(res.data.strength_save);
            setDexSav(res.data.dexterity_save);
            setConSav(res.data.constitution_save);
            setIntSav(res.data.intelligence_save);
            setWisSav(res.data.wisdom_save);
            setChaSav(res.data.charisma_save);
            setPerception(res.data.perception);
            setSkills(skillsText);
            setDmgVul(res.data.damage_vulnerabilities);
            setDmgRes(res.data.damage_resistances);
            setDmgImm(res.data.damage_immunities);
            setCondImm(res.data.condition_immunities);
            setSenses(res.data.senses);
            setLanguages(res.data.languages);
            setChalRating(res.data.challenge_rating);
            setActions('comeback to this, actions');
            setReactions('come back to this, reactions');
            setLegDesc(res.data.legendary_desc);
            setLegActions('come back to this');
            setSpecAbilities('come back to this, special abilities');
            setSpellList('come back to this, spell list');
            setImg('come back to this, img')

          
        })
        setMonsterSearch('');
    }

  return (
    <div  className='row'>
      <div>
        <input type='text' placeholder= "Search Here" onChange={e=> setMonsterSearch(e.target.value)}></input>
        <button onClick={() => searchFunc(monsterSearch)}>Search</button>
        {name ? <h3>{name}</h3>: null}
        {size ? <div><h4>Size</h4><p>{size}</p></div>: null}
        {type ? <div><h4>Type</h4><p>{type}</p></div>: null}
        {subtype ? <div><h4>Subtype</h4><p>{subtype}</p></div>: null}
        {group ? <div><h4>Group</h4><p>{group}</p></div>: null}
        {alignment ? <div><h4>Alignment</h4><p>{alignment}</p></div>: null}
        {armorClass ? <div><h4>Armor Class</h4><p>{armorClass}</p></div>: null}
        {armorDesc ? <div><h4>Armor Description</h4><p>{armorDesc}</p></div>: null}
        {hitPoints ? <div><h4>Hit Points</h4><p>{hitPoints}</p></div>: null}
        {hitDice ? <div><h4>Hit Dice</h4><p>{hitDice}</p></div>: null}
        {speed ? <div><h4>Speed</h4>{speed.map(obj => <p>{obj}</p>)}</div>: null}
        {(str || dex || con || int || wis || cha)? <h4>Ability Scores</h4> : null }
        {str ? <p>Str: {str}</p>: null}
        {dex ? <p>Dex: {dex}</p>: null}
        {con ? <p>Con: {con}</p>: null}
        {int ? <p>Int: {int}</p>: null}
        {wis ? <p>Wis: {wis}</p>: null}
        {cha ? <p>Cha: {cha}</p>: null}
        {(strSav || dexSav || conSav || intSav || wisSav || chaSav)? <h4>Saving Throws</h4> : null} 
        {strSav ? <p>Str: {strSav}</p>: null}
        {dexSav ? <p>Dex: {dexSav}</p>: null}
        {conSav ? <p>Con: {conSav}</p>: null}
        {intSav ? <p>Int: {intSav}</p>: null}
        {wisSav ? <p>Wis: {wisSav}</p>: null}
        {chaSav ? <p>Cha: {chaSav}</p>: null}
        {perception ? <div><h4>Perception</h4><p>{perception}</p></div>: null}
        {skills ? <div><h4>Skills</h4>{skills.map(obj => <p>{obj}</p>)}</div>: null}
        {dmgVul ? <div><h4>Vulnerabilities</h4><p>{dmgVul}</p></div>: null}
        {dmgRes ? <div><h4>Resistances</h4><p>{dmgRes}</p></div>: null}
        {dmgImm ? <div><h4>Damage Immunities</h4><p>{dmgImm}</p></div>: null}
        {condImm ? <div><h4>Condition Immunities</h4><p>{condImm}</p></div>: null}
        {senses ? <div><h4>Senses</h4><p>{senses}</p></div>: null}
        {languages ? <div><h4>Languages</h4><p>{languages}</p></div>: null}
        {chalRating ? <div><h4>Challenge Rating</h4><p>{chalRating}</p></div>: null}
        {actions ? <div><h4>Actions</h4><p>{actions}</p></div>: null}
        {reactions ? <div><h4>Reactions</h4><p>{reactions}</p></div>: null}
        {legDesc ? <div><h4>Legendary Actions</h4><p>{legDesc}</p></div>: null}
        {legActions ? <div><h4>Legendary Actions</h4><p>{legActions}</p></div>: null}
        {specAbilities ? <div><h4>Special Abilities</h4><p>{specAbilities}</p></div>: null}
        {spellList ? <div><h4>Spells</h4><p>{spellList}</p></div>: null}
        {img ? <p>{img}</p>: null}
      </div>
        <Searchables searchFor={props.searchFor} search={searchFunc} />
    </div>
  )
}

export default MonsterSearch