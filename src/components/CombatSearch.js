import React, { useState } from 'react'
import Searchables from './Searchables'
import axios from 'axios';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import CombatScorecards from './CombatScorecards';
import {arrayMoveImmutable} from 'array-move';

function CombatSearch(props) {
    const [monsterSearch, setMonsterSearch] = useState('');

    const [monsterAdd, setMonsterAdd] = useState('');

    const [combatList, setCombatList] = useState([]);

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

    

    function searchFunc(word) {
        let searchWord = word.toLowerCase().replace(/[,'()]/g, '').replace(/[^a-z ]/g, ' ').trim().replace(/[ ]/g, '-');
        console.log(searchWord)
        axios.get(`https://api.open5e.com/${props.searchFor}/${searchWord}`).then((res)=> {

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
                specAbilities: res.data.special_abilities,
                spells: res.data.spell_list,
                image: res.data.img_main
            });
        }).catch(err=>console.log(err))
    }

    function addToList(name) {
        let searchWord = name.toLowerCase().replace(/[,'()]/g, '').replace(/[^a-z ]/g, ' ').trim().replace(/[ ]/g, '-');
        console.log(searchWord)
    axios.get(`https://api.open5e.com/monsters/${searchWord}`).then((res)=>{
      let info = {
        name: res.data.name,
        AC: res.data.armor_class,
        HP: res.data.hit_points,
        id: Math.floor(100000 + Math.random() * 900000)
      }
      setCombatList([...combatList, info ])
    })
    .catch(()=>{
        let info = {
            name: name,
            AC: 'ask player',
            HP: 'ask player',
            id: Math.floor(100000 + Math.random() * 900000)
          }
          setCombatList([...combatList, info ])
    })
}

    function removeFromList(index){
         let newArray = combatList;
         console.log(combatList[index].hp)
        console.log(index)
        newArray.splice(index, 1)
        console.log(newArray)
        setCombatList(newArray)
        console.log(combatList)

    }

    function modHp(index, mod){
        if(mod === '-'){
            combatList[index].HP -= 1;
        } else {
            combatList[index].HP += 1;
        }
    }

    const SortableItem = SortableElement(({value, i, shoe}) =>{

        return (
        <CombatScorecards key={value.id} info={value} search={searchFunc} index={i} delete={removeFromList} modHp={modHp}/>)
    })

    const SortContainer = SortableContainer(({combatArray}) => { 

        return (<div>{combatArray.map((value, index) => (
            
            <SortableItem key={value.id} i={index} index={index} value={value}  shoe={'shoe'} />
    ))}</div>)

    })

    const onSortEnd = ({oldIndex, newIndex}) => {
        const arr = arrayMoveImmutable(combatList, oldIndex, newIndex)

        setCombatList(arr)
    }

  return (
    <div className='row'>
        <div>
            <h2>Available Monsters</h2>
        <input type='text' placeholder= "Search Here" onChange={e=> setMonsterSearch(e.target.value)}></input>
            <button onClick={() => searchFunc(monsterSearch)}>Search</button>
            <Searchables searchFor={props.searchFor} search={searchFunc} />
        </div>
        
        <div>
            <h2>Enlist to Battle</h2>
            <input value={monsterAdd} placeholder='Add Monsters' onChange={e=> setMonsterAdd(e.target.value)}></input>
            <button onClick={()=> {
                addToList(monsterAdd) 
                setMonsterAdd('')}
                } >Enlist</button>

            <button onClick={(()=>console.log(combatList))}>testing</button>
            <button onClick={()=>console.log(combatList)}>list</button>
            <div className='combatList'>
                <div>
                <SortContainer distance={5} onSortEnd = {onSortEnd} combatArray={combatList}/>
                </div>
        </div>
        </div>

        

        <div>
            <h2>Monster Stats</h2>
            <div>
                
                {stats.name && <h3>{stats.name}</h3>}
                <div className='row'>
                    {stats.armorClass && <p><b>AC</b> {stats.armorClass}</p>}
                    {stats.hp && <p><b>HP</b> {stats.hp}</p>}
                </div>
                <div>
                    {stats.chalRat && <p><b>Challenge Rating</b> {stats.chalRat}</p>}   
                    
                    {stats.percep && <div><h4>Perception</h4><p>{stats.percep}</p></div>}
                    {stats.armorDesc && <p><b>Armor Type</b> {stats.armorDesc}</p>}
                </div>
                
                <div className='row'>
                    {stats.alignment && <p><b>Alignment</b> {stats.alignment}</p>}
                    {stats.size && <p><b>Size</b> {stats.size}</p>}
                    {stats.type && <p><b>Type</b> {stats.type}</p>}
                    {stats.subtype && <p><b>Subtype</b> {stats.subtype}</p>}

                </div>
                <div className='row'>
                
                
                </div>

                <div>
                    {stats.dmgVul && <div><h4>Vulnerabilities</h4><p>{stats.dmgVul}</p></div>}
                    {stats.dmgRes && <div><h4>Resistances</h4><p>{stats.dmgRes}</p></div>}
                    {stats.dmgImm && <div><h4>Damage Immunities</h4><p>{stats.dmgImm}</p></div>}
                    {stats.condImm && <div><h4>Condition Immunities</h4><p>{stats.condImm}</p></div>}
                </div>
                
                {stats.actions[0] && <div>
                        <h3>Actions</h3>
                        <div className='row'>
                            {stats.actions.map((action, index)=>{
                                return (
                                    <div>
                                    {action.name &&<h4>{action.name}</h4> }
                                    {action.desc &&<p><b>Description:</b> {action.desc}</p>}
                                    {action.attack_bonus && <p><b>Attack Bonus:</b> {action.attack_bonus}</p>}
                                    {action.damage_dice && <p><b>Damage Dice:</b> {action.damage_dice}</p>}
                                    {action.damage_bonus && <p><b>Damage Bonus:</b> {action.damage_bonus} </p>}
                                    </div>
                                )})}
                        </div>
                </div>}

                {stats.reactions && <div>
                    <h3>Reactions</h3>
                        {stats.reactions.map((action, index)=>{
                            return (
                                <div>
                                {action.name &&<h4>{action.name}</h4> }
                                {action.desc &&<p><b>Description:</b> {action.desc}</p>}

                                </div>
                            )
                        })}
                </div>}

                {stats.legDesc && <div>
                    <h3>Legendary Actions</h3>
                    <p><b>Description:</b> {stats.legDesc}</p>
                    </div>}
                
                    {stats.legAct[0] && <div><h4>Legendary Actions:</h4>
                        {stats.legAct.map((action, index)=>{
                        return (
                            <div>
                            {action.name &&<h4>{action.name}</h4> }
                            {action.desc &&<p><b>Description:</b> {action.desc}</p>}

                            </div>
                        )
                    })}
                </div>}

                {stats.specAbilities && <div><h3>Special Abilities</h3>
                    {stats.specAbilities.map((action, index)=>{
                        return (
                            <div>
                            {action.name &&<h4>{action.name}</h4> }
                            {action.desc &&<p><b>Description:</b> {action.desc}</p>}

                            </div>
                        )
                    })}
                </div>}

                {stats.spells.length !== 0 && <div><h4>Spells:</h4>
                    <ul>{stats.spells.map((item, index)=>{
                    return(
                        <li><a href={item} target='_blank'>{item}</a></li>
                    )
                    })}</ul>
                    
                    </div>}

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
                    <div>
                        {stats.skills.length !== 0  && <div><h4>Skills</h4>{stats.skills.map(obj => <p>{obj}</p>)}</div>}
                    </div>
                    <div>
                        {stats.senses && <div><h4>Senses</h4><p>{stats.senses}</p></div>}
                        {stats.languages && <div><h4>Languages</h4><p>{stats.languages}</p></div>} 
                    </div>
                    {stats.image && <img src={stats.image} />}
            </div>
            
        </div>
        
    </div>
    
  )
}

export default CombatSearch