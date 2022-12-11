import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'

import '../styles/game-board.css'

import dwarf from '../img/heros/636271781394265550.png'
import human from '../img/heros/636271801914013762.png'
import elf from '../img/heros/636287075350739045.png'
import goblin from '../img/heros/638062024584880857.png'
import centaur from '../img/heros/dfae8441ec34f97d11fdf959000f1b7c.jpg'

const classMap = new Map([
    ['human', human],
    ['dwarf', dwarf],
    ['elf', elf],
    ['goblin', goblin],
    ['centaur', centaur],
  ])

const GameBoard = () => {
    const {state} = useLocation()
    const [hero, setHero]= useState(state)
   
  return (
    <div className='card m-4 border border-dark bg-dark text-white' style={{width: "18rem"}}>
        <img src={classMap.get(hero.class)} className='card-img-top border border-dark' alt="" />
        <h2 className='hero-name text-center '>{hero.name}</h2>
        <ul className='stats'>
            <li>Race: {hero.class}</li>
            <li>Strength: {hero.strength}</li>
            <li>HP: {hero.hp}</li>
        </ul>       
    </div>
  )
}

export default GameBoard