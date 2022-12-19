import React, {useState, useEffect} from 'react'
import RollDice from '../../includes/RollDice'
import { useOutletContext, useNavigate } from 'react-router-dom'




const HeroTurn = () => {

    const navigate = useNavigate()

    const {hero, monster, updateCharacters} = useOutletContext()    
    const [damage, setDamage] = useState(0)  
    const [isChoosingAttack, setIsChoosingAttack] = useState(false)
    const [isRollingDice, setIsRollingDice] = useState(false)
    const [typeOfAttack, setTypeOfAttack] = useState('')
    const [diceValue, setDiceValue] = useState(0) 

    useEffect(()=> {          
      if(diceValue !== 0)  {
        attack()      
      }
    // eslint-disable-next-line
    }, [diceValue])

    const changeDiceValue = (newDiceValue) => {
        setDiceValue(newDiceValue)
    }  

    const chooseToAttack = () => {
        setIsChoosingAttack(true)
      }
    
      const goToRollDice = (event) => {
        setTypeOfAttack(event.target.dataset.attack)
        setIsRollingDice(true)
        setIsChoosingAttack(false)
    
      }
      
    
      const attack =  () => {    
        let attackDamage;
        switch (typeOfAttack) {
            case 'strength':
                attackDamage = hero.strongAttack(monster, diceValue)
                setDamage(attackDamage)
                updateCharacters(hero, monster)
                break;
            case 'speed':
                attackDamage = hero.speedAttack(monster, diceValue)
                setDamage(attackDamage)
                updateCharacters(hero, monster)
                break;
            case 'magic':
                attackDamage = hero.magicAttack(monster, diceValue)
                setDamage(attackDamage)
                updateCharacters(hero, monster)
                break;
            default:
                break
            }             
      }
    



    const startMonsterTurn =  () => {
        navigate('/game-board/duel/monster-turn', {state: {hero: hero, duelMonster: monster}})
    }
    
    return (
        <div className='duel-board bg-dark d-flex align-items-center justify-content-center'>
                        
                {
                    !isChoosingAttack && !isRollingDice ?
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
                    <div className='d-flex flex-column justify-content-center align-items-center w-100' style={{height: '40%'}}>
                         <RollDice changeDiceValue={changeDiceValue}/>
                         {diceValue ? 
                            <div>
                                <p className='text-white'>Roll: {diceValue}</p>
                                <p className='text-white'>{monster.name} loses {damage} HP</p>
                                <button onClick={startMonsterTurn} className='btn btn-outline-light'>End your turn</button>
                            </div> :''
                        }
                    </div> : ''
                }            
            
         
        </div>
    )
}

export default HeroTurn