import React, { useState } from 'react'
import Searchables from './Searchables'
import axios from 'axios';

function CombatSearch(props) {
    const [monsterSearch, setMonsterSearch] = useState('');
    const [stats, setStats] = useState({
        name: '',
        hp: '',
        hitDice: '',
        armorClass: '',
        armorDesc: '',
        size: '',
        type: '',
        subtype: '',
        alignment: '',
        speed: [],
        str: '',
        dex: '',
        con: '',
        int: '',
        wis: '',
        cha: '',
        strSav: '',
        dexSav: '',
        conSav: '',
        intSav: '',
        wisSav: '',
        chaSav: '',
        percep: '',
        skills: [],
        dmgVul: '',
        dmgRes: '',
        dmgImm: '',
        condImm: '',
        senses: '',
        languages: '',
        chalRat: '',
        actions: [],
        reactions: '',
        legDesc: '',
        legAct: [],
        specAct: [],
        spells: [],
        img: ''
    })
    const enemies = [];

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

            setStats({
                name: res.data.name,
                armorClass: res.data.armor_class,
                hp: res.data.hit_points,
                armorDesc: res.data.armor_desc,
                size: res.data.size,
                type: res.data.type,
                subtype: res.data.subtype,
                alignment: res.data.alignment,
                speed: speedText,
                str: res.data.strength,
                dex: res.data.dexterity,
                con: res.data.constitution,
                int: res.data.intelligence,
                wis: res.data.wisdom,
                cha: res.data.charisma,
                strSav: res.data.strength_save,
                dexSav: res.data.dexterity_save,
                conSav: res.data.constitution_save,
                intSav: res.data.intelligence_save,
                wisSav: res.data.wisdom_save,
                chaSav: res.data.charisma_save,
                percep: res.data.perception,
                skills: skillsText,
                dmgVul: res.data.damage_vulnerabilities,
                dmgRes: res.data.damage_resistances,
                dmgImm: res.data.damage_immunities,
                condImm: res.data.condition_immunities,
                senses: res.data.senses,
                languages: res.data.languages,
                chalRat: res.data.challenge_rating,
                actions: res.data.actions,
                reactions: res.data.reactions,
                legDesc: res.data.legendary_desc,
                legAct: res.data.legendary_actions,
                specAct: res.data.special_abilities,
                spells: res.data.spell_list,
                img: res.data.img_main
            });
        })
    }
  return (
    <div className='row'>
        <Searchables searchFor={props.searchFor} search={searchFunc} />
        <div>
            <input type='text' placeholder= "Search Here" onChange={e=> setMonsterSearch(e.target.value)}></input>
            <button onClick={() => searchFunc(monsterSearch)}>Search</button>
            
            <div>
                {stats.name && <h3>{stats.name}</h3>}
                <div className='row'>
                    {stats.armorClass && <p><b>AC</b> {stats.armorClass}</p>}
                    {stats.hp && <p><b>HP</b> {stats.hp}</p>}
                </div>
                {stats.armorDesc && <p><b>Armor Type</b> {stats.armorDesc}</p>}
                <div className='row'>
                
                {stats.size && <p><b>Size</b> {stats.size}</p>}
                {stats.type && <p><b>Type</b> {stats.type}</p>}
                {stats.subtype && <p><b>Subtype</b> {stats.subtype}</p>}
                </div>
                <div className='row'>
                {stats.alignment && <p><b>Alignment</b> {stats.alignment}</p>}
                {stats.chalRat && <p><b>Challenge Rating</b> {stats.chalRat}</p>}
                </div>
                {stats.str && 
                    <div className='row'>
                        <div>
                            <h4>Ability Scores</h4>
                            <p><b>Str</b> {stats.str}</p>
                            <p><b>Dex</b> {stats.dex}</p>
                            <p><b>Con</b> {stats.con}</p>
                            <p><b>Int</b> {stats.int}</p>
                            <p><b>Wis</b> {stats.wis}</p>
                            <p><b>Cha</b> {stats.cha}</p>
                        </div>
                        <div>
                            <h4>Saving Throws</h4>
                            {stats.strSav && <p><b>Str</b> {stats.strSav}</p>}
                            {stats.dexSav && <p><b>Dex</b> {stats.dexSav}</p>}
                            {stats.conSav && <p><b>Con</b> {stats.conSav}</p>}
                            {stats.intSav && <p><b>Int</b> {stats.intSav}</p>}
                            {stats.wisSav && <p><b>Wis</b> {stats.wisSav}</p>}
                            {stats.chaSav && <p><b>Cha</b> {stats.chaSav}</p>}
                        </div>

                    </div>}
            </div>
            
        </div>
        
    </div>
    
  )
}

export default CombatSearch