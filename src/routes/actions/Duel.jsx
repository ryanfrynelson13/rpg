import React, {useState, useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../includes/Card'
import '../../styles/duel.css'
import Dice from 'react-dice-roll'


const Duel = () => {
  let temp =0;  
  const {state} = useLocation()
  const {hero, duelMonster} = state
  const [monster, setMonster] = useState(duelMonster)
  const [currHero, setCurrHero] = useState(hero)
  const [isChoosingAttack, setIsChoosingAttack] = useState(false)
  const [isHeroTurn, setIsHeroTurn] = useState(true)
  const [isRollingDice, setIsRollingDice] = useState(false)
  const [typeOfAttack, setTypeOfAttack] = useState('')  
  const [diceValue, setDiceValue] = useState(0)
  const [round, setRound] = useState(0)

  // const [diceHasBeenThrown, setDiceHasBeenThrown] = useState(false)
  
  useEffect(()=> {
    // eslint-disable-next-line    
    temp = 0;
    if(round % 2 === 1 && round !== 0){
        attack ('hero')
    }
    setRound(round +1)

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

  const chooseToAttack = () => {
    setIsChoosingAttack(true)
  }

  const goToRollDice = (event) => {
    setTypeOfAttack(event.target.dataset.attack)
    setIsRollingDice(true)
    setIsChoosingAttack(false)

  }
  

  const attack =  (target) => {
    if(target === 'hero') {
        switch (typeOfAttack) {
            case 'strength':
                hero.strongAttack(duelMonster, 20)
                setMonster({...duelMonster})
                break;
            case 'speed':
                hero.speedAttack(duelMonster, 20)
                setMonster({...duelMonster})
                break;
            case 'magic':
                hero.magicAttack(duelMonster, 20)
                setMonster({...duelMonster})
                break;
            default:
                break
            }
    }
    // switch (event.target.dataset.attack) {
    //     case 'strength':
    //         hero.strongAttack(duelMonster, diceValue)
    //         setMonster({...duelMonster})
    //         break;
    
    //     default:
    //         break;
    // }
    // if(event.target.dataset.key === 'hero'){
    //   console.log(hero)
    //   console.log(monster);
    //   hero.strongAttack(duelMonster, diceValue)
    //   setMonster({...duelMonster})
    // } else {
    //   console.log(hero)
    //   console.log(monster);
    //   monster.strongAttack(hero, diceValue)
    //   setCurrHero({...hero})
    // }
  }

  return (
    <div className='d-flex justify-content-around'>
      <Card character={currHero} />
      <div className='duel-area'>
        <h2 className='text-center'>Duel</h2>
        <div className='duel-board bg-dark d-flex align-items-center justify-content-center'>
                        
                {
                    isHeroTurn && !isChoosingAttack && !isRollingDice ?
                    <div className='d-flex flex-column justify-content-around align-items-center' style={{height: '40%'}}>
                        <button onClick={chooseToAttack} className="btn btn-outline-light">Choose to attack</button>
                        <button className="btn btn-outline-light">Drink a potion</button>
                    </div> : isChoosingAttack ?
                    <div className='d-flex flex-column justify-content-around align-items-center' style={{height: '40%'}}>
                        <button onClick={(event) => goToRollDice(event) } data-attack='strength' className="btn btn-outline-light">Strength Attack</button>
                        <button onClick={(event) => goToRollDice(event) } data-attack='speed' className="btn btn-outline-light">Speed Attack</button>
                        { hero.mana ?  <button onClick={(event) => goToRollDice(event) } data-attack='magic' className="btn btn-outline-light">Magic Attack</button> : ''}
                    </div> : ''
                }
                {
                    isRollingDice ? 
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '40%'}}>
                        <div className='dice d-flex justify-content-around p-5'>
                            <Dice ref={dice1} className='m-2' onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
                            <Dice ref={dice2} className='m-2' onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
                            <Dice ref={dice3} className='m-2' onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
                        </div> 
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            {diceValue === 0 ? <button onClick={throwDice} className='btn btn-outline-light'>Throw Dice</button> : <p className='text-white'>Roll: {diceValue}</p>}  
                        </div>
                    </div> : ''
                }            
            
         
        </div>
      </div>
      <Card character={monster} />
    </div>
  )
}

export default Duel