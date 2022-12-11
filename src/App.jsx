import React, {useState} from "react";
import GameInit from "./Init/GameInit";

import Human from './models/Heros/Human'
import Dwarf from './models/Heros/Dwarf'
import Elf from './models/Heros/Elf'
import Goblin from './models/Heros/Goblin'
import Centaur from './models/Heros/Centaur'

const classMap = new Map([
  ['human', Human],
  ['dwarf', Dwarf],
  ['elf', Elf],
  ['goblin', Goblin],
  ['Centaur', Centaur],
])


function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [hero, setHero] = useState(false)

  const getHeroInit = (heroInit) => {
    const newHero = new (classMap.get(heroInit.class))(heroInit.name)
    setHero(newHero)
    setHasGameStarted(true)
  }
  return (
    <div className="App">
      <header className="text-center bg-secondary p-4 text-white">
        <h1>Ryan's RPG</h1>
      </header>
      <main>
        { !hasGameStarted ?  <GameInit getHeroInit={getHeroInit} />: ''}       
        <h2>{hero? 'Nom: '+ hero.name: ''}</h2>
        <h2>{hero? 'Classe: '+ hero.class: ''}</h2>
      </main>
    </div>
  );
}

export default App;
