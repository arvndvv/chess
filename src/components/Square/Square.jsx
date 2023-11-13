import { useState } from 'react';
import './Square.scss';
export default function Square(props){
    const {i, row, onClick, selectedSquare, playable} = props;
    const [sid,setSid] = useState(squareId(i, row))
    return (
        <div data-square={sid} className={`square ${playable ? 'playable' : ''} ${squareColor(i, row)} ${selectedSquare===sid ? 'selected' : ''}`} onClick={e=>onClick({...e,sid})}>
        </div> 
    )

}
function squareId(i, row){
    return 'abcdefgh'.split('')[i]+(row+1);
}

function squareColor(i, row){
    if(row%2===0){
        return (i % 2 === 1) ? 'square--black' : 'square--white';
    }else{
        return (i % 2 === 0) ? 'square--black' : 'square--white';
    }
}