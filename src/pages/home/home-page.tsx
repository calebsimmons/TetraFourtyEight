import React, { ChangeEvent, useState } from 'react';
import './home-page.scss';

const HomePage = () => {
    return (
        <div className="HomePage">
           <Game/>
        </div>
    );
}

// <SquareComponent>

interface SquareProps {
    value: string | null;
    onSquareClick: (event: React.MouseEvent) => void 
}


function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onSquareClick}>
            {props.value}
        </button>
    );
}
// </SquareComponent>


// <BoardComponent>

const Board = () => {
    const status = `'Next player: X`;
    
    const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
    
    const handleSquareClick = (i:number) => {
        const squaresSlice = squares.slice();
        squaresSlice[i] = 'X';
        setSquares(squaresSlice);
    }

    const renderSquare = (i: number) => {
        return <Square 
                    value = {squares[i]}
                    onSquareClick = {() => handleSquareClick(i)}
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

const Game = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

// </GameComponent>

export default HomePage;
