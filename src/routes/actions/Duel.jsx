import React, {useState, useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../includes/Card'
import '../../styles/duel.css'
import Dice from 'react-dice-roll'

const Duel = () => {
  let temp;
  const {state} = useLocation()
  const {hero, duelMonster} = state
  const [monster, setMonster] = useState(duelMonster)
  const [currHero, setCurrHero] = useState(hero)
  
  const [diceValue, setDiceValue] = useState(0)

  // const [diceHasBeenThrown, setDiceHasBeenThrown] = useState(false)
  
  useEffect(()=> {
    // eslint-disable-next-line
    temp = 0;
  }, [diceValue])

  const dice1 = useRef(null)
  const dice2 = useRef(null)
  const dice3 = useRef(null)

  const throwDice = () => {
    dice1.current.rollDice()
    dice2.current.rollDice()
    dice3.current.rollDice()
  }

  const storeDiceValue = (value) => {
    temp += value
    setDiceValue(temp)
  }

  const attack =  (event) => {
    if(event.target.dataset.key === 'hero'){
      console.log(hero)
      console.log(monster);
      hero.hit(duelMonster)
      setMonster(duelMonster)
    } else {
      console.log(hero)
      console.log(monster);
      monster.hit(hero)
      setCurrHero(hero)
    }
  }

  return (
    <div className='d-flex justify-content-around'>
      <Card character={currHero} />
      <div className='duel-area'>
        <h2 className='text-center'>Duel</h2>
        <div className='duel-board bg-dark'>
          <div className='dice d-flex justify-content-around p-5'>
            <Dice ref={dice1} className='m-2' onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
            <Dice ref={dice2} className='m-2' onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
            <Dice ref={dice3} className='m-2' onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            {diceValue === 0 ? <button onClick={throwDice} className='btn btn-outline-light'>Throw Dice</button> : <p className='text-white'>Roll: {diceValue}</p>}        
              {diceValue > 0 && diceValue >= monster.initiative ? <div className='d-flex flex-column'><p className='text-white'>Vous Esquivez l'attaque d'un monstre</p><button data-key={'hero'} onClick={event => attack(event)} className='btn btn-outline-light'>Commencer votre tour</button></div> : diceValue > 0 ? <div className='d-flex flex-column'><p className='text-white'>Vous Tentez d'esquiver l'attaque d'un monstre mais echouez</p><button data-key={'monster'} onClick={event => attack(event)} className='btn btn-outline-light'>Commencer votre tour</button></div> : ''}
          </div>
        </div>
      </div>
      <Card character={monster} />
    </div>
  )
}

export default Duel