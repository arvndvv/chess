import {useState} from 'react';
import './ChessBoard.scss';
import Square from '../Square/Square';

export default function ChessBoard(props) {
    const [selectedSquare, setSelectedSquare] = useState(-1);
    const handleSquareSelection = (i) => {
        if(i === selectedSquare) {
            setSelectedSquare(-1);
        }else{
            setSelectedSquare(i);
        }
    }
    return (
            <div class="chess-container">
            <ul class="chess-index chess-index__row" id="rowIndex">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
            </ul>
            <div class="chess-board" id="chessBoard">
            {
                Array(64).fill(null).map((_,i)=>{
                    return (
                        <Square key={i} i={i} onClick={()=>{handleSquareSelection(i)}} selectedSquare={selectedSquare}/>
                    )
                })
            }
            </div>
            <ul class="chess-index chess-index__col" id="colIndex">
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
