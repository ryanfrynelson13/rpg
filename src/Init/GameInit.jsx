import React, {useState} from "react";
import StartGameInit from "./StartGameInit";
import "../styles/game-init.css";
import ChooseCharacter from "./ChooseCharacter";

const Game = () => {
    const [isInitStarted, setIsInitStarted] = useState(false)

    const startGame = () => {
        setIsInitStarted(true)
    }

  return (
    <div className="game-init shadow-lg">
      { isInitStarted ? <ChooseCharacter /> : <StartGameInit startGame={startGame} />}
    </div>
  );
};

export default Game;
