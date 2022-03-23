import React, {useState} from 'react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

function MonsterSearch(props) {

    const [search, setSearch] = useState('')

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
    const [speed, setSpeed] = useState();
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
    const [actions, setActions] = useState([]);
    const [reactions, setReactions] = useState('');
    const [legDesc, setLegDesc] = useState('');
    const [legActions, setLegActions] = useState([]);
    const [specAbilities, setSpecAbilities] = useState([]);
    const [spellList, setSpellList] = useState([]);
    const [img, setImg] = useState('');



    function searchFunc() {
        let searchWord = search.toLowerCase().replace(/[^a-z, ']/g, ' ').trim().replace(/[']/g, '').replace(/[ ]/g, '-');
        console.log(searchWord)
        axios.get(`https://api.open5e.com/${props.searchFor}/${searchWord}`).then((res)=> {
            console.log(res.data);
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
            setSpeed('Come Back to This, speed');
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
            setSkills('Come Back to this, skills');
            setDmgVul(res.data.damage_vulnerabilities);
            setDmgRes(res.data.damage_resistances);
            setDmgImm(res.data.damage_immunities);
            setCondImm(res.data.condition_immunities);
            setSenses(res.data.senses);
            setLanguages(res.data.languages);
            setChalRating(res.data.challenge_rating);
            setActions('comeback to this, actions');
            setReactions(res.data.reactions);
            setLegDesc(res.data.legendary_desc);
            setLegActions('come back to this');
            setSpecAbilities('come back to this, special abilities');
            setSpellList('come back to this, spell list');
            setImg('come back to this, img')

          
        })
        setSearch('');
    }

  return (
    <div>
        <input type='text' placeholder= "Search Here" onChange={e=> setSearch(e.target.value)}></input>
        <button onClick={() => searchFunc()}>Search</button>
        {name ? <h3>{name}</h3>: null}
        {size ? <p>{size}</p>: null}
        {type ? <p>{type}</p>: null}
        {subtype ? <p>{name}</p>: null}
        {group ? <p>{group}</p>: null}
        {alignment ? <p>{alignment}</p>: null}
        {armorClass ? <p>{armorClass}</p>: null}
        {armorDesc ? <p>{armorDesc}</p>: null}
        {hitPoints ? <p>{hitPoints}</p>: null}
        {hitDice ? <p>{hitDice}</p>: null}
        {speed ? <p>{speed}</p>: null}
        {str ? <p>{str}</p>: null}
        {dex ? <p>{dex}</p>: null}
        {con ? <p>{con}</p>: null}
        {int ? <p>{int}</p>: null}
        {wis ? <p>{wis}</p>: null}
        {cha ? <p>{cha}</p>: null}
        {strSav ? <p>{strSav}</p>: null}
        {dexSav ? <p>{dexSav}</p>: null}
        {conSav ? <p>{conSav}</p>: null}
        {intSav ? <p>{intSav}</p>: null}
        {wisSav ? <p>{wisSav}</p>: null}
        {chaSav ? <p>{chaSav}</p>: null}
        {perception ? <p>{perception}</p>: null}
        {skills ? <p>{skills}</p>: null}
        {dmgVul ? <p>{dmgVul}</p>: null}
        {dmgRes ? <p>{dmgRes}</p>: null}
        {dmgImm ? <p>{dmgImm}</p>: null}
        {condImm ? <p>{condImm}</p>: null}
        {senses ? <p>{senses}</p>: null}
        {languages ? <p>{languages}</p>: null}
        {chalRating ? <p>{chalRating}</p>: null}
        {actions ? <p>{actions}</p>: null}
        {reactions ? <p>{reactions}</p>: null}
        {legDesc ? <p>{legDesc}</p>: null}
        {legActions ? <p>{legActions}</p>: null}
        {specAbilities ? <p>{specAbilities}</p>: null}
        {spellList ? <p>{spellList}</p>: null}
        {img ? <p>{img}</p>: null}

    </div>
  )
}

export default MonsterSearch