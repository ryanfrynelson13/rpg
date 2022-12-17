import React from 'react'

import dwarf from '../../img/heros/636271781394265550.png'
import human from '../../img/heros/636271801914013762.png'
import elf from '../../img/heros/636287075350739045.png'
import goblin from '../../img/heros/638062024584880857.png'
import centaur from '../../img/heros/638061114013567234.png'
import dragonborn from '../../img/monsters/636272677995471928.png'
import orc from '../../img/monsters/636274570630462055.png'
import ghost from '../../img/monsters/638062023593120762.png'
import minotaur from '../../img/monsters/638063864308085049.png'
import wolf from '../../img/monsters/638064499491607044.png'

const classMap = new Map([
    ['human', human],
    ['dwarf', dwarf],
    ['elf', elf],
    ['goblin', goblin],
    ['centaur', centaur],
    ['dragonborn', dragonborn],
    ['orc', orc],
    ['ghost', ghost],
    ['minotaur', minotaur],
    ['wolf', wolf],
  ])

const Card = ({character}) => {
  const hpPercentage = (character.hp / character.maxHP *100).toFixed(0)
  const endurancePercentage = (character.endurance / character.maxEndurance *100).toFixed(0)  
  const manaPercentage = character.mana ?  (character.mana / character.maxMana *100).toFixed(0) : 0
  
  // const [hpPercentage, setHPPercentage] = useState('')

  // useEffect(() => {
  //   console.log('in');
  //   setHPPercentage(character.hp / character.maxHP *100)
  // }, [character])
  return (   
    <div className='card m-4 border border-dark bg-dark text-white d-flex flex-column justify-content-end' style={{width: "20rem"}}>
        <img src={classMap.get(character.class)} className='card-img-top border border-dark' alt="" />
        <h2 className='hero-name text-center '>{character.name}</h2>
        <ul className='stats'>
            <li>Race: {character.class}</li>
            <li>Strength: {character.strength}</li>
            <li>HP: {character.hp}</li>
            <li><div className="progress my-1 me-3" style={{height: "8px"}}><div className={hpPercentage >= 50 ? 'progress-bar bg-success' : hpPercentage >= 25 ? 'progress-bar bg-warning' : 'progress-bar bg-danger'} role="progressbar" aria-label="Example 1px high" style={{width: `${hpPercentage}%`}} aria-valuenow={hpPercentage} aria-valuemin="0" aria-valuemax="100"></div></div>
            </li>
            <li>Endurance: {endurancePercentage}%</li>
            <li><div className="progress my-1 me-3" style={{height: "8px"}}><div className='progress-bar' role="progressbar" aria-label="Example 1px high" style={{width: `${endurancePercentage}%`}} aria-valuenow={endurancePercentage} aria-valuemin="0" aria-valuemax="100"></div></div>
            </li>
            { 'mana' in character ? <li>Mana: {manaPercentage}%</li> : ''}
            { 'mana' in character ? 
              <li><div className="progress my-1 me-3" style={{height: "8px"}}><div className='progress-bar' role="progressbar" aria-label="Example 1px high" style={{width: `${manaPercentage}%`, backgroundColor : '#B660CD'}} aria-valuenow={manaPercentage} aria-valuemin="0" aria-valuemax="100"></div></div>
              </li>
              : ''
            }
        </ul>     
    </div>
    
  )
}

export default Card