import React, { useState, useContext } from 'react'
import Searchables from './Searchables'
import axios from 'axios';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import CombatScorecards from './CombatScorecards';
import {arrayMoveImmutable} from 'array-move';
import SavedCombats from './SavedCombats';
import {LoginContext} from '../App'

function CombatSearch(props) {
    const {loggedIn} = useContext(LoginContext);

    const userId = localStorage.getItem('id');

    const [monsterSearch, setMonsterSearch] = useState('');

    const [monsterAdd, setMonsterAdd] = useState('');

    const [combatList, setCombatList] = useState([]);
    const [combatName, setCombatName] = useState('');
    const [savedCombats, setSavedCombats] = useState([]);
    const [visibleCombats, setVisibleCombats] = useState(false);

    const [playerName, setPlayerName] = useState('');
    const [playerHp, setPlayerHp] = useState('');
    const [playerAc, setPlayerAc] = useState('');

    const [stats, setStats] = useState({
        name: 'Monster Stats',
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
        }).catch((err)=>{
            console.log(err)
            setStats({
                name: word,
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
        })
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
    .catch((err)=>{
        alert(err + '. Did you mistype the name?')
    })
}

    function addPlayer() {
        let info = {
            name: playerName,
            AC: playerAc,
            HP: playerHp,
            id: Math.floor(100000 + Math.random() * 900000)
          }
          setCombatList([...combatList, info ])
          setPlayerName('');
          setPlayerAc('');
          setPlayerHp('');
    }

    function removeFromList(index){
         let newArray = combatList;
        newArray.splice(index, 1)
        setCombatList(newArray)

    }

    function modHp(index, mod){
        console.log(typeof combatList[index].HP )
        if(mod === '-'){
            combatList[index].HP = parseInt(combatList[index].HP) - 1;
        } else {
            combatList[index].HP = parseInt(combatList[index].HP) + 1;
        }
    }

    const SortableItem = SortableElement(({value, i}) =>{

        return (
        <CombatScorecards key={value.id} info={value} search={searchFunc} index={i} delete={removeFromList} modHp={modHp}/>)
    })

    const SortContainer = SortableContainer(({combatArray}) => { 

        return (<div>{combatArray.map((value, index) => (
            <SortableItem key={value.id} i={index} index={index} value={value}/>
    ))}</div>)

    })

    const onSortEnd = ({oldIndex, newIndex}) => {
        const arr = arrayMoveImmutable(combatList, oldIndex, newIndex)

        setCombatList(arr)
    }
    
    const saveCombat = () =>{
        let arr = JSON.stringify(combatList)
        console.log(arr)

        let combatToSave = {
            userid: userId,
            name: combatName,
            combats: arr
        }
        axios.post('http://localhost:4000/combats', combatToSave).then((res) =>{
            console.log(res.data)
            setSavedCombats(res.data)
        })
        .catch(err => console.log(err))
    }

    const allSavedCombats = () =>{
        let obj = {
            userid: userId
        }
        axios.post('http://localhost:4000/allSavedCombats', obj).then((res) =>{
            console.log(res.data)
            setSavedCombats(res.data)
        })
        .catch(err => console.log(err))
    }

    const deleteCombat = (id) =>{
        let obj = {
            id: id,
            userid: userId
        }

        console.log(id);
        axios.delete(`http://localhost:4000/allSavedCombats/${id}/${userId}`, ).then((res) =>{
            console.log(res.data)
            setSavedCombats(res.data)
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='row'>
        <div className='monstersearch'>
            <h2 className='center'>Available Monsters</h2>
        <input type='text' placeholder= "Search Here" onChange={e=> setMonsterSearch(e.target.value)}></input>
            <button onClick={() => searchFunc(monsterSearch)}>Search</button>
            <Searchables searchFor={props.searchFor} search={searchFunc} />
        </div>
        
        <div className='enlist'>
            <h2 className='center'>Enlist to Battle</h2>
            <div className='overflow'>
            {loggedIn && <div>
                <button onClick={()=>{
                    allSavedCombats()
                    setVisibleCombats(true)
                    }}>See Saved Combats</button>
                    </div>
                }
                {visibleCombats && <div>
                    <button onClick={()=> setVisibleCombats()}>Hide Saved Combats</button>
                    <SavedCombats combats={savedCombats} setCombats={setCombatList} deleteCombat={deleteCombat}/>
                </div>}
                <div className='combatList'>
                    <div className='activeCombat'>
                    <SortContainer distance={5} onSortEnd = {onSortEnd} combatArray={combatList}/>
                    </div>
                </div>  
            <input value={monsterAdd} placeholder='Add Monsters' onChange={e=> setMonsterAdd(e.target.value)}></input>
            <button onClick={()=> {
                addToList(monsterAdd) 
                setMonsterAdd('')}
                } >Enlist</button>
            
            <div>
                <input value={playerName} type={'text'} placeholder={'Add Player Name'} onChange={(e)=>setPlayerName(e.target.value)} />
                <input value={playerHp} type='number' placeholder='HP' onChange={(e)=>setPlayerHp(e.target.value)} /> 
                <input value={playerAc} type='number' placeholder='AC' onChange={(e)=>setPlayerAc(e.target.value)} />
                <button onClick={addPlayer}>Enlist</button>
            </div>
            
            {loggedIn && <div>
                <input input value={combatName} type={'text'} placeholder={'Add Combat Name'} onChange={(e)=>setCombatName(e.target.value)} />
                <button onClick= {()=>saveCombat()}>Save This Combat</button>
            </div>}
            
            </div>
        </div>

        

        <div className='monsterStats'>
            <div className='monsterOverflow'>
                
                {stats.name && <h2 className='center'>{stats.name}</h2>}

                <div className='row'>
                
                
                </div>

                
                
                {stats.actions[0] && <div>
                        <h2>Actions</h2>
                        <div className='actions'>
                            {stats.actions.map((action, index)=>{
                                return (
                                    <div className='border'>
                                    {action.name &&<h3>{action.name}</h3> }
                                    {action.desc &&<p><b>Description:</b> {action.desc}</p>}
                                    {action.attack_bonus && <p><b>Attack Bonus:</b> {action.attack_bonus}</p>}
                                    {action.damage_dice && <p><b>Damage Dice:</b> {action.damage_dice}</p>}
                                    {action.damage_bonus && <p><b>Damage Bonus:</b> {action.damage_bonus} </p>}
                                    </div>
                                )})}
                        </div>
                </div>}

                {stats.reactions && <div>
                    <h2>Reactions</h2>
                    <div className='actions'>
                        {stats.reactions.map((action, index)=>{
                            return (
                                <div className='border'>
                                {action.name &&<h3>{action.name}</h3> }
                                {action.desc &&<p><b>Description:</b> {action.desc}</p>}

                                </div>
                            )
                        })}
                    </div>
                </div>}

                {stats.legDesc && <div>
                    <h2>Legendary Actions</h2>
                    <p>{stats.legDesc}</p>
                    </div>}
                
                    {stats.legAct[0] && <div className='actions'>
                        {stats.legAct.map((action, index)=>{
                        return (
                            <div className='border'>
                            {action.name &&<h3>{action.name}</h3> }
                            {action.desc &&<p><b>Description:</b> {action.desc}</p>}

                            </div>
                        )
                    })}
                </div>}

                {stats.specAbilities && <div>
                    <h2>Special Abilities</h2>
                    <div className='actions'>
                    {stats.specAbilities.map((action, index)=>{
                        return (
                            <div className='border'>
                            {action.name &&<h3>{action.name}</h3> }
                            {action.desc &&<p><b>Description:</b> {action.desc}</p>}

                            </div>
                        )
                    })}
                    </div>
                </div>}

                {stats.dmgVul && <div className='border'>
                    {stats.dmgVul && <div><h4>Vulnerabilities</h4><p>{stats.dmgVul}</p></div>}
                    {stats.dmgRes && <div><h4>Resistances</h4><p>{stats.dmgRes}</p></div>}
                    {stats.dmgImm && <div><h4>Damage Immunities</h4><p>{stats.dmgImm}</p></div>}
                    {stats.condImm && <div><h4>Condition Immunities</h4><p>{stats.condImm}</p></div>}
                </div>}

                {stats.spells.length !== 0 && <div><h2>Spells:</h2>
                    <ul>{stats.spells.map((item, index)=>{
                    return(
                        <li><a href={item} key={index} target='_blank'>{item}</a></li>
                    )
                    })}</ul>
                    
                    </div>}

                

                <div className='row'>
                {stats.str && 
                    <div className='fiftyPercent'>
                    <h2>Abilities</h2>
                    <div className='row border'>
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
                            {stats.strSav || stats.dexSav || stats.conSav || stats.wisSav || stats.intSav || stats.chaSav && <h4>Saving Throws</h4>}
                            {stats.strSav && <p><b>Str</b> {stats.strSav}</p>}
                            {stats.dexSav && <p><b>Dex</b> {stats.dexSav}</p>}
                            {stats.conSav && <p><b>Con</b> {stats.conSav}</p>}
                            {stats.intSav && <p><b>Int</b> {stats.intSav}</p>}
                            {stats.wisSav && <p><b>Wis</b> {stats.wisSav}</p>}
                            {stats.chaSav && <p><b>Cha</b> {}</p>}
                        </div>
                        
                        <div>
                        {stats.skills.length !== 0  && <div><h4>Skills</h4>{stats.skills.map(obj => <p>{obj}</p>)}</div>}
                        </div>

                    </div>
                    </div>}

                    {stats.chalRat &&
                    <div className='fiftyPercent'>
                    <h2>Other Info</h2>
                    <div className='monsterInfo border'>
                    {stats.chalRat && <p><b>Challenge Rating: </b> {stats.chalRat}</p>}   
                    {stats.percep && <div><p><b>Perception: </b>{stats.percep}</p></div>}
                    {stats.senses && <div><p><b>Senses: </b>{stats.senses}</p></div>}
                    {stats.armorDesc && <p><b>Armor Type: </b> {stats.armorDesc}</p>}
                    {stats.alignment && <p><b>Alignment: </b> {stats.alignment}</p>}
                    {stats.size && <p><b>Size: </b> {stats.size}</p>}
                    {stats.type && <p><b>Type: </b> {stats.type}</p>}
                    {stats.subtype && <p><b>Subtype: </b> {stats.subtype}</p>}
                    {stats.languages && <div><p><b>Languages: </b>{stats.languages}</p></div>} 

                </div>

                </div>}
                </div>

                    {stats.image && <img src={stats.image} />}
            </div>
            
        </div>
        
    </div>
    
  )
}

export default CombatSearch