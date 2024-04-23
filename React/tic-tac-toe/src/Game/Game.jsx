import React from 'react'
import { useState } from 'react'
import Board from '../field/Field';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const IsNext =  currentMove %2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
         setHistory(nextHistory) ;
         setCurrentMove(nextHistory.length -1)
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares,move)=>{
        let description;
        if(move>0){
            description = 'Go to move #'+ move;
        }
        else{
            description = "Go to game start";
        }

        return (
           <li key={move}>
                <button onClick={()=>jumpTo(move)}>{description}</button>
           </li>
        )
    })
        return(
            <div className="game">
            <div className="game-board">
                <Board xIsNext={IsNext} squares={currentSquares} onPlay={handlePlay}></Board>
            </div>
            <div className='game-info'>
                <ol>{moves}</ol>
            </div>
            </div>
        )
    }



export default Game


