import React, {useState, useEffect} from 'react'
import RollDice from '../../includes/RollDice'
import { useOutletContext, useNavigate } from 'react-router-dom'




const StartDuel = () => {

    const navigate = useNavigate()

    const {hero, monster, updateCharacters} = useOutletContext()    
    const [damage, setDamage] = useState(0)  
    const [diceValue, setDiceValue] = useState(0) 

    useEffect(()=> {          
      if(diceValue !== 0)  {
        if(hero.getInitiative(diceValue) < monster.initiative){   
          const damage =  monster.strongAttack(hero, diceValue)
          setDamage(damage)         
          if(damage === 0 )  monster.endurance -= 2
        }  else {
          monster.endurance -= 2
        }    
        updateCharacters(hero, monster)        
      }
    // eslint-disable-next-line
    }, [diceValue])

    const changeDiceValue = (newDiceValue) => {
        setDiceValue(newDiceValue)
    }  

    const startHeroTurn =  () => {
        navigate('/game-board/duel/hero-turn', {state: {hero: hero, duelMonster: monster}})
    }
    
    return (
        <div className='duel-board bg-dark d-flex flex-column justify-content-center'>
          <div className='dice d-flex justify-content-around p-5'>            
            <RollDice changeDiceValue={changeDiceValue}/>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            {diceValue === 0 ? '': <p className='text-white'>Roll: {diceValue}</p>}        
              {diceValue > 0 && hero.getInitiative(diceValue) >= monster.initiative ? <div className='d-flex flex-column'><p className='text-white'>You manage to dodge a monsters attack</p><button data-key={'hero'} onClick={startHeroTurn} className='btn btn-outline-light'>Choose your next move</button></div> : diceValue > 0 ? <div className='d-flex flex-column'><p className='text-white'>You try to block but fail to dodge the monsters attack</p><p className='text-white text-center'>You lose {damage} HP</p><button data-key={'monster'} onClick={startHeroTurn} className='btn btn-outline-light'>Choose your next move</button></div> : ''}
          </div>
        </div>
    )
}

export default StartDuel