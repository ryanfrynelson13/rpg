import "../styles/game-init.css";
import { Link } from "react-router-dom";


const GameInit = () => {
   

  return (
    <div className="game-init shadow-lg">
      <div className="start-game">
        <Link to={'/game-init'} className="btn btn-lg btn-outline-light">Start New Game</Link>
      </div>
    </div>
  );
};

export default GameInit;
