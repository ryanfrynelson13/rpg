import React from 'react'

import dwarf from '../../img/heros/636271781394265550.png'
import human from '../../img/heros/636271801914013762.png'
import elf from '../../img/heros/636287075350739045.png'
import goblin from '../../img/heros/638062024584880857.png'
import centaur from '../../img/heros/dfae8441ec34f97d11fdf959000f1b7c.jpg'

const classMap = new Map([
    ['human', human],
    ['dwarf', dwarf],
    ['elf', elf],
    ['goblin', goblin],
    ['centaur', centaur],
  ])

const Card = ({character}) => {
  return (   
    <div className='card m-4 border border-dark bg-dark text-white' style={{width: "18rem"}}>
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