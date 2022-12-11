import React, {useState} from "react";
import dwarf from '../img/heros/636271781394265550.png'
import human from '../img/heros/636271801914013762.png'
import elf from '../img/heros/636287075350739045.png'
import goblin from '../img/heros/638062024584880857.png'
import centaur from '../img/heros/dfae8441ec34f97d11fdf959000f1b7c.jpg'

const ChooseCharacter = ({initHero}) => {
    const [chosenHeroType, setChosenHeroType ] = useState('human')
    const [chosenHeroTypeImg, setChosenHeroTypeImg ] = useState(human)
    const [hasChosenHeroType, sethasChosenHeroType ] = useState(false)

    const selectHeroType = (event) => {
      const valuesArr = event.target.value.split(',')
      console.log(valuesArr);
        setChosenHeroType(valuesArr[0])
        setChosenHeroTypeImg(valuesArr[1])
    }

    const confirmHeroType = () => {
      sethasChosenHeroType(true)
    }

    const submitHeroName = (event) => {
      event.preventDefault()
      const hero = {
        name: event.target.name.value,
        class: chosenHeroType
      }
      initHero(hero)
      event.target.name.value = ''
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
                <button onClick={confirmHeroType} className="btn btn-outline-dark">Confirm Class</button>
              </div>
    }

    const selectHeroName = () =>{
      return <div className="d-flex justify-content-center w-100 align-items-center">
                <form onSubmit={event => submitHeroName(event)}>
                  <label htmlFor="name" className="form-label">Choose your name:</label>
                  <input type="text" className="form-control" name="name" id="name"  />
                  <button className="btn btn-outline-dark mt-2">Confirm Name</button>
                </form>
              </div>
    }

  return (
    <div className="d-flex mx-auto px-5">
      <div className="hero-img">
        <img className="img-fluid" src={chosenHeroTypeImg} alt="" />
      </div>
      { hasChosenHeroType ? selectHeroName() : selectHeroTypeHTML()}
    </div>
  );
};

export default ChooseCharacter;
