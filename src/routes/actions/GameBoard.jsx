import React, {useRef, useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Card from '../includes/Card'

import '../../styles/game-board.css'

import BoardSquare from './BoardSquare'
import '../../styles/board.css'
import swamp from '../../img/heros/pq61m18mmzp51.webp'

import Dragonborn from '../../models/Monsters/Dragonborn'
import Orc from '../../models/Monsters/Orc'
import Ghost from '../../models/Monsters/Ghost'
import Minotaur from '../../models/Monsters/Minotaur'
import Wolf from '../../models/Monsters/Wolf'



const GameBoard = () => {
  const navigate = useNavigate()
  const {state} = useLocation()
  const hero = state

  const monstersArr = [Dragonborn,Orc,Ghost,Minotaur,Wolf]
  const divElement = useRef(null)

  const [boardSquares, setBoardSquares] = useState([])
  const [currentSquare, setCurrentSquare] = useState(85)
  const [positionX, setPositionX] = useState(30)
  const [positionY, setPositionY] = useState(30)

  useEffect(()=> {
    divElement.current.focus()
    const tempArr = []
    for(let i = 0; i <200; i++){
      tempArr.push('')
      setBoardSquares(tempArr)
    }
  }, [])

  const moveHero = (event) => {
    if(event.key === 'ArrowRight' ){
      if(currentSquare % 20 === 19 && positionX < 100){
        setPositionX(positionX +5)
      } else if(currentSquare % 20 !== 0) {
        setCurrentSquare(currentSquare +1)
        setBoardSquares(boardSquares)
      }
    }
    if(event.key === 'ArrowLeft' ){
      if(currentSquare % 20 === 2 && positionX > 0){
        setPositionX(positionX -5)
      } else if(currentSquare % 20 !== 1){
        setCurrentSquare(currentSquare -1)
        setBoardSquares(boardSquares)
      }
    }
    if(event.key === 'ArrowUp' ){
      if(currentSquare <= 40 && positionY > 0) {
        setPositionY(positionY - 5)
      } else if(currentSquare > 20){
        setCurrentSquare(currentSquare -20)
        setBoardSquares(boardSquares)
      }
    }
    if(event.key === 'ArrowDown' ){
      if(currentSquare > 160 && positionY < 100 ){
        setPositionY(positionY + 5)
      } else if (currentSquare <= 180){
        setCurrentSquare(currentSquare +20)
        setBoardSquares(boardSquares)
      }
    }
    let random = Math.floor(Math.random()*100 + 1)
    if(random > 40 && random <= 55) {
      random = Math.floor(Math.random()*5)
      const duelMonster = new monstersArr[random]()
      navigate('/game-board/duel', {state: {hero,duelMonster}})
    }
 
  }
  return (
      <div className='d-flex justify-content-around' ref={divElement} tabIndex={0} onKeyDown={(event) => {moveHero(event);}}>
        <Card character={hero} />
        <div >
            <h2 className='text-center'>Board</h2>
            <div className='board' style={{  
                backgroundImage: `url(${swamp})`,
                backgroundPosition: `${positionX}% ${positionY}%`,            
                backgroundSize: '150%',
                backgroundRepeat: 'no-repeat'
            }}>
              {
                boardSquares.map((el, i) => {
                  let curr = i+1 === currentSquare
                  return (
                    <div key={i} className='board-square'>
                      <BoardSquare curr={curr}/>
                    </div>
                  )
                })
              }
            </div>
        </div>       
      </div>
    )
}

export default GameBoard