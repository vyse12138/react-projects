import React, { useState } from 'react'
import Board from '../components/TicTacToe/Board'
import '../style/TicTacToe.css'
function TicTacToe() {

    const [stepNumber, setStepNumber] = useState(0);

    const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const handleOnClick = (i) => {
        
        
        

        if (calculateWinner(currentBoard) || currentBoard[i]){
            return;
        }
        const currentBoardTemp = currentBoard.slice();
        currentBoardTemp[i] = xIsNext ? 'X' : 'O';
        setCurrentBoard(currentBoardTemp);
        setXIsNext(!xIsNext);
        setStepNumber(stepNumber => stepNumber + 1);
 
    }

    const handleOnReset = () =>{
        setCurrentBoard(Array(9).fill(null));
        setXIsNext(true);
        setStepNumber(0);
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
    
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if(
                squares[a] && 
                squares[a] === squares[b] && 
                squares[a] === squares[c]
            ){
                return squares[a];
            }
    
        }
        return null;
    }

    const info = calculateWinner(currentBoard) ? `Winner is ${calculateWinner(currentBoard)}` : 
    stepNumber === 9 ? 'Draw' :
    (`Next player: ${xIsNext? 'X' : 'O'}`);
    return (
    <div className='container bg-light text-center border-top-0 shadow pb-3'>
        <Board onClick={(handleOnClick)} currentBoard={currentBoard}/>
        
        <div className='my-4 alert alert-primary'>{info}</div>
        <button className='btn btn-primary px-5 py-2' onClick={handleOnReset}>Reset</button>
    </div>
    );
}

export default TicTacToe
