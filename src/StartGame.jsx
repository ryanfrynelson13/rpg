import React from "react";

const StartGame = ({startGame}) => {
  return (
    <div className="start-game">
      <button onClick={startGame} className="btn btn-lg btn-outline-light">Start New Game</button>
    </div>
  );
};

export default StartGame;
