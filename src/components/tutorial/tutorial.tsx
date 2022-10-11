import React, { useState } from 'react';
import './tutorial.scss'

// <SquareComponent>

interface SquareComponentProps {
    value: string | null;
    onSquareClick: (event: React.MouseEvent) => void
}


function Square(props: SquareComponentProps) {
    return (
        <button className="square" onClick={props.onSquareClick}>
            {props.value}
        </button>
    );
}
// </SquareComponent>


// <BoardComponent>

const Board = () => {
    const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(true);

    let status
    const winner = calculateWinner(squares);
    if (winner) {
        status = `Winner! - ${winner}`;
    } else {
        status = `'Next player: ${xIsNext ? 'X' : 'O'}`;
    }


    const handleSquareClick = (i: number) => {
        const squaresSlice = squares.slice();
        squaresSlice[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresSlice);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i: number) => {
        return <Square
            value={squares[i]}
            onSquareClick={() => handleSquareClick(i)}
        />
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

// </BoardComponent>

// <GameComponent>

const TutorialGame = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
        </div>
    );
}

// </GameComponent>

// Helper Functions 

const calculateWinner = (squares: (string | null)[]): string | null => {
    //list the square index triples that can win. 
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

    // iterate through this list and check if each square is the same
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TutorialGame;