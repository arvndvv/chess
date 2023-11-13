import {useState} from 'react';
import './ChessBoard.scss';
import Square from '../Square/Square';

export default function ChessBoard(props) {
    const [selectedSquare, setSelectedSquare] = useState(-1);
    const handleSquareSelection = (id) => {
        if(id === selectedSquare) {
            setSelectedSquare(null);
        }else{
            setSelectedSquare(id);
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
                Array(8).fill(null).map((_,row)=>{
                    return (<div className='row' key={row}>
                        { Array(8).fill(null).map((_,i)=>{
                            return (
                                <Square key={i} i={i} row={row} onClick={(e)=>{handleSquareSelection(e.sid)}} selectedSquare={selectedSquare}/>
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
