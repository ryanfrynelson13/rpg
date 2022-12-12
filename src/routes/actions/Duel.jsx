import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../includes/Card'

const Duel = () => {
  useEffect(()=> {
    setTimeout(() => {

    }, 1000)
  },[])
  const {state} = useLocation()
  const {hero, duelMonster} = state
  const [monster, setMonster] = useState(duelMonster)
  const [currHero, setCurrHero] = useState(hero)

  return (
    <div className='d-flex justify-content-around'>
      <Card character={currHero} />
      <Card character={monster} />
    </div>
  )
}

export default Duel