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
  return (   
    <div className='card m-4 border border-dark bg-dark text-white d-flex flex-column justify-content-end' style={{width: "18rem"}}>
        <img src={classMap.get(character.class)} className='card-img-top border border-dark' alt="" />
        <h2 className='hero-name text-center '>{character.name}</h2>
        <ul className='stats'>
            <li>Race: {character.class}</li>
            <li>Strength: {character.strength}</li>
            <li>HP: {character.hp}</li>
        </ul>     
    </div>
    
  )
}

export default Card