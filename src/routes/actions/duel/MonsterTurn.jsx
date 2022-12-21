import React, {useState, useEffect} from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'

const MonsterTurn = () => {

    const navigate = useNavigate()
    const {hero, monster, updateCharacters} = useOutletContext() 
    const [dialog, setDialog] = useState('Monsters Turn')
    const [round, setRound] = useState(0)
    const [damage, setDamage] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            switch (round) {
                case 0:
                    setDialog('Le monstre tente une attaque')
                    setRound(round + 1)
                    monsterAttack()
                    break;
                case 1:
                    setDialog('Le monstre fini son attaque')
                    setRound(round + 1)
                    break      
                case 2:
                    navigate('/game-board/duel/hero-turn', {state: {hero: hero, duelMonster: monster}})
                    break        
                default:
                    break;
            }
            
        }, 3000)
    }, [dialog, round])

    const monsterAttack = () => {
        let randomAttack
        if('mana' in monster) {
            randomAttack = Math.floor(Math.random()*3)
        } else {
            randomAttack = Math.floor(Math.random()*2)
        }

        const randomRoll = Math.floor(Math.random()*18 +1)

        switch (randomAttack) {
            case 0:
                setDamage(monster.strongAttack(hero, randomRoll))
                updateCharacters(hero, monster)
                break;
            case 1:
                setDamage(monster.speedAttack(hero, randomRoll))
                updateCharacters(hero, monster)
                break;
            case 2:
                setDamage(monster.magicAttack(hero, randomRoll))
                updateCharacters(hero, monster)
                break;
        
            default:
                break;
        }
    }

  return (
    <div className='duel-board bg-dark d-flex align-items-center justify-content-center'>
        <p className='text-white'>
            {dialog}
        </p>
        {
            damage ? <p className='text-white text-center'>You lose {damage}HP</p> :''
        }
        
    </div>
  )
}

export default MonsterTurn