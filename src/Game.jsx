import React, {useState} from "react";
import StartGame from "./StartGame";
import "./styles/game.css";

const Game = () => {
    const [isGameStarted, updateIsGameStarted] = useState(false)

    const startGame = () => {
        updateIsGameStarted(true)
    }

  return (
    <div className="game shadow-lg">
      { isGameStarted ? '' : <StartGame startGame={startGame} />}
    </div>
  );
};

export default Game;
