import { useState } from 'react';

export default function LudoBoard() {
  // Initial state for moves
  const [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0
  });

  // Function to update the move count for each color
  const updateMoves = (color) => {
    // Update the state by creating a new object with updated move count
    setMoves(prevMoves => ({
      ...prevMoves, 
      [color]: prevMoves[color] + 1
    }));
  };

  return (
    <div>
      <p>Game Begins!</p>

      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button 
          style={{ backgroundColor: "blue" }} 
          onClick={() => updateMoves('blue')}
        >
          +1
        </button>

        <p>Yellow moves = {moves.yellow}</p>
        <button 
          style={{ backgroundColor: "yellow", color: "black" }} 
          onClick={() => updateMoves('yellow')}
        >
          +1
        </button>

        <p>Green moves = {moves.green}</p>
        <button 
          style={{ backgroundColor: "green", color: "white" }} 
          onClick={() => updateMoves('green')}
        >
          +1
        </button>

        <p>Red moves = {moves.red}</p>
        <button 
          style={{ backgroundColor: "red", color: "white" }} 
          onClick={() => updateMoves('red')}
        >
          +1
        </button>
      </div>
    </div>
  );
}
