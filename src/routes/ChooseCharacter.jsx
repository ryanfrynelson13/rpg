import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import dwarf from '../img/heros/636271781394265550.png'
import human from '../img/heros/636271801914013762.png'
import elf from '../img/heros/636287075350739045.png'
import goblin from '../img/heros/638062024584880857.png'
import centaur from '../img/heros/dfae8441ec34f97d11fdf959000f1b7c.jpg'

import '../styles/game-init.css'

import Human from '../models/Heros/Human'
import Dwarf from '../models/Heros/Dwarf'
import Elf from '../models/Heros/Elf'
import Goblin from '../models/Heros/Goblin'
import Centaur from '../models/Heros/Centaur'

const classMap = new Map([
  ['human', Human],
  ['dwarf', Dwarf],
  ['elf', Elf],
  ['goblin', Goblin],
  ['centaur', Centaur],
])

const ChooseCharacter = () => {
    const [chosenHeroType, setChosenHeroType ] = useState('human')
    const [chosenHeroTypeImg, setChosenHeroTypeImg ] = useState(human)
    const [hasChosenHeroType, sethasChosenHeroType ] = useState(false)    
    const navigate = useNavigate()
    
    const selectHeroType = (event) => {
      const valuesArr = event.target.value.split(',')      
      setChosenHeroType(valuesArr[0])
      setChosenHeroTypeImg(valuesArr[1])
    }

    const confirmHeroType = () => {
      sethasChosenHeroType(true)
    }

    const submitHeroName = (event) => {
      event.preventDefault()
      if(event.target.name.value.length === 0) return     
      const newHero = new (classMap.get(chosenHeroType))(event.target.name.value) 
      navigate('/game-board', { state: newHero});
      
    }

    const selectHeroTypeHTML = () => {
      return <div className="d-flex justify-content-center w-100 align-items-center">
                <select onChange={(event) => selectHeroType(event)} className="form-select w-50">
                  <option value={['human', human]}>Human</option>
                  <option value={['dwarf',dwarf]}>Dwarf</option>
                  <option value={['elf',elf]}>Elf</option>
                  <option value={['goblin',goblin]}>Goblin</option>
                  <option value={['centaur',centaur]}>Centaur</option>
                </select>
                <button onClick={confirmHeroType} className="btn btn-outline-light">Confirm Class</button>
              </div>
    }

    const selectHeroName = () =>{
      return <div className="d-flex justify-content-center w-100 align-items-center">
                <form onSubmit={event => submitHeroName(event)}>
                  <label htmlFor="name" className="form-label text-white">Choose your name:</label>
                  <input type="text" className="form-control" name="name" id="name"  />
                  <button className="btn btn-outline-light mt-2">Confirm Name</button>
                </form>
              </div>
    }

  return (
    <div className="game-init shadow-lg bg-dark">
      <div className="d-flex mx-auto px-5">
        <div className="hero-img">
          <img className="img-fluid" src={chosenHeroTypeImg} alt="" />
        </div>
        { hasChosenHeroType ? selectHeroName() : selectHeroTypeHTML()}
      </div>
    </div>
  );
};

export default ChooseCharacter;
