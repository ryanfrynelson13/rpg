import React, {useState} from "react";
import dwarf from '../img/heros/636271781394265550.png'
import human from '../img/heros/636271801914013762.png'
import elf from '../img/heros/636287075350739045.png'
import goblin from '../img/heros/638062024584880857.png'
import centaur from '../img/heros/dfae8441ec34f97d11fdf959000f1b7c.jpg'

const ChooseCharacter = () => {
    const [chosenHeroType, setChosenHeroType ] = useState(human)

    const selectHeroType = (event) => {
        console.log('hi');
        setChosenHeroType(event.target.value)
    }

  return (
    <div className="d-flex mx-auto px-5">
      <div className="hero-img">
        <img className="img-fluid" src={chosenHeroType} alt="" />
      </div>
      <div className="d-flex justify-content-center w-100 align-items-center">
        <select onChange={(event) => selectHeroType(event)} className="form-select w-50">
          <option value={human}>Human</option>
          <option value={dwarf}>Dwarf</option>
          <option value={elf}>Elf</option>
          <option value={goblin}>Goblin</option>
          <option value={centaur}>Centaur</option>
        </select>
      </div>
    </div>
  );
};

export default ChooseCharacter;
