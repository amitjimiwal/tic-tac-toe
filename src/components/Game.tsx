import {useState} from 'react';
import Board from './Board'
export default function Game() {
  const [history, setHistory] = useState<Array<string>>([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  function handlePlay(nextSquares) {
   const nextHistory=[...history.slice(0,currentMove+1),nextSquares]
   setHistory(nextHistory);
   setCurrentMove(nextHistory.length - 1);
  }
  function JumpTo(nextMove : number){
    setCurrentMove(nextMove);
  }
  const moves=history.map((squares,move)=>{
    let description:string;
    if(move>0){
      description='Go to move'+move
    }
    else{
      description='Start the game';
    }
    return (
      <li key={move}>
      <button onClick={() => JumpTo(move)}>{description}</button>
    </li>
    )
  })
  return (
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ul>{moves}</ul>
      </div>
    </div>
  );
}
