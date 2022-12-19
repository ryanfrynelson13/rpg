import React, { useRef, useState, useEffect}  from 'react'
import Dice from 'react-dice-roll'

const RollDice = ({changeDiceValue}) => {
    let temp;
    const [diceValue, setDiceValue] = useState(0)

    useEffect(()=> {
        // eslint-disable-next-line
        temp = 0
        if(diceValue !== 0){
            changeDiceValue(diceValue)
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
        


    return (
        <div className='dice w-100 d-flex flex-column align-items-center p-5'>
            <div className='d-flex w-100 justify-content-around p-5'>
                <Dice ref={dice1} className='m-2' disabled={true} onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
                <Dice ref={dice2} className='m-2' disabled={true} onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
                <Dice ref={dice3} className='m-2' disabled={true} onRoll={(value) => storeDiceValue(value)}  size={100} faceBg={'#343a40'}  />
            </div>
            {
                diceValue ? '': <button onClick={throwDice} className='btn btn-outline-light'>Throw Dice</button>
            }
            
        </div>
    )
}

export default RollDice