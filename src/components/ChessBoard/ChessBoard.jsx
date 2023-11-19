import {useState, useEffect} from 'react';
import './ChessBoard.scss';
import Square from '../Square/Square';
import { Chess } from 'chess.js';

export default function ChessBoard(props) {
    const [selectedSquare, setSelectedSquare] = useState(-1);
    const [chess, setChess] = useState();
    const [chessBoard, setChessBoard] = useState([]);
    const [turn, setTurn] = useState();
    const [playableSquares, setplayableSquares] = useState([]);
    useEffect(()=>{
        setChess(new Chess());
        window.chess = chess;
    },[])
    useEffect(()=>{
        if(chess){
            updateChessBoard();
        }
    },[chess])

    const updateChessBoard = () => {
        setChessBoard(chess.board());
        setTurn(chess.turn());
    }
    const handleSquareClick = (e) => {
        const { action } = e;
        const id = action.sid;
        if(action.type === 'select'){
            if(id === selectedSquare) {
                setSelectedSquare(null);
                setplayableSquares([]);
            }else{
                setSelectedSquare(id);
                const playable = chess.moves({square:id}).map(square => square.match(/[a-z][0-9]/i)[0]);
                console.log('playable::',playable)
                setplayableSquares(playable);
            }
        }
        if(action.type === 'move'){
            console.log('yoo',action);
            try{
                chess.move(selectedSquare+action.sid);
                setSelectedSquare(null);
                setplayableSquares([]);
            }catch(e){
                console.log('invalid')
            }
            updateChessBoard();
        }
    }
    return (
            <div className="chess-container">
            <ul className="chess-index chess-index__row" id="rowIndex">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
            </ul>
            <div className="chess-board" id="chessBoard">
            {
                chessBoard.map((row,rowIndex)=>{
                    return (<div className='row' key={rowIndex}>
                        { row.map((col,i)=>{
                            return (
                                <Square key={i} i={i} rowIndex={rowIndex} col={col} onClick={handleSquareClick} selectedSquare={selectedSquare} playable={playableSquares} turn={turn}/>
                            );
                        })}
                    </div>)
                })
            }
            </div>
            <ul className="chess-index chess-index__col" id="colIndex">
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
                <li>e</li>
                <li>f</li>
                <li>g</li>
                <li>h</li>
            </ul>
        </div>
    )
}
