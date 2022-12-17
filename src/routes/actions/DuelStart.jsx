import React, {useState, useRef, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../includes/Card'
import '../../styles/duel.css'
import Dice from 'react-dice-roll'


const DuelStart = () => {
  let temp;
  const navigate = useNavigate()
  const {state} = useLocation()
  const {hero, duelMonster} = state

  const [currHero, setCurrHero] = useState(hero)

  const [damage, setDamage] = useState(0)
  
  const [diceValue, setDiceValue] = useState(0)

  // const [diceHasBeenThrown, setDiceHasBeenThrown] = useState(false)
  
  useEffect(()=> {
    // eslint-disable-next-line
    temp = 0;
    if(hero.getInitiative(diceValue) < duelMonster.initiative && diceValue !== 0){      
      setDamage(duelMonster.strongAttack(hero, 20))
      setCurrHero({...hero})
    }

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
  

  const startHeroTurn =  () => {
    navigate('/game-board/duel', {state: {hero,duelMonster}})
  }

  return (
    <div className='d-flex justify-content-around'>
      <Card character={currHero} />
      <div className='duel-area'>
        <h2 className='text-center'>Duel</h2>
        <div className='duel-board bg-dark d-flex flex-column justify-content-center'>
          <div className='dice d-flex justify-content-around p-5'>
            <Dice ref={dice1} className='m-2' onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
            <Dice ref={dice2} className='m-2' onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
            <Dice ref={dice3} className='m-2' onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            {diceValue === 0 ? <button onClick={throwDice} className='btn btn-outline-light'>Throw Dice</button> : <p className='text-white'>Roll: {diceValue}</p>}        
              {diceValue > 0 && hero.getInitiative(diceValue) >= duelMonster.initiative ? <div className='d-flex flex-column'><p className='text-white'>You manage to dodge a monsters attack</p><button data-key={'hero'} onClick={startHeroTurn} className='btn btn-outline-light'>Choose your next move</button></div> : diceValue > 0 ? <div className='d-flex flex-column'><p className='text-white'>You try to block but fail to dodge the monsters attack</p><p>You lose {damage}HP</p><button data-key={'monster'} onClick={startHeroTurn} className='btn btn-outline-light'>Choose your next move</button></div> : ''}
          </div>
        </div>
      </div>
      <Card character={duelMonster} />
    </div>
  )
}

export default DuelStart