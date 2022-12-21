import React, {useState} from 'react'
import { useLocation, Outlet} from 'react-router-dom'
import Card from '../includes/Card'
import '../../styles/duel.css'
import _ from 'lodash'



const DuelBoard = () => {
  
//   const navigate = useNavigate()
  const {state} = useLocation()
  const {hero, duelMonster} = state

  const [currHero, setCurrHero] = useState(hero)
  const [monster, setMonster] = useState(duelMonster)

  const updateCharacters = (hero, monster) => {   
      const tempHero = _.cloneDeep(hero)
      const tempMonster = _.cloneDeep(monster)
      setCurrHero(tempHero)
      setMonster(tempMonster)
  } 

  return (
    <div className='d-flex justify-content-around'>
      <Card character={currHero} />
      <div className='duel-area'>
        <h2 className='text-center'>Duel</h2>        
        <Outlet context={{hero:currHero, monster: monster, updateCharacters: () => updateCharacters(hero, monster)}} />        
      </div>
      <Card character={duelMonster} />
    </div>
  )
}

export default DuelBoard