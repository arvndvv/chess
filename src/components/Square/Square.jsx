import { useEffect, useState } from 'react';
import './Square.scss';
import { Piece } from "@chessire/pieces";

export default function Square(props){
    const {i, rowIndex, onClick,col, selectedSquare, playable, turn} = props;
    const [sid,setSid] = useState(squareId(i, rowIndex));
    const [active,setActive] = useState(false);
    useEffect(()=>{
        console.log('changing active::',col, turn)
        setActive(col && col.color === turn)
    },[col, turn])
    const handleClick = (e) => {
        console.log('clicked::', col, sid, active, turn);
        // if(!active) return;
        onClick({...e,action:{sid,type: active ? 'select' : 'move'}})
    }
    return (
        <div data-square={sid} className={`square ${getClassNames(sid, i, rowIndex, active, playable, selectedSquare)}`} onClick={handleClick}>
            {col ? <Piece color={col.color === 'b' ? 'black' : 'white'} piece={col.type.toUpperCase()}  width={64}/> : ''}
        </div> 
    )

}
function squareId(i, row){
    const rowIdSwap = {
        1:8,
        2:7,
        3:6,
        4:5,
        5:4,
        6:3,
        7:2,
        8:1
    }
    return 'abcdefgh'.split('')[i]+(rowIdSwap[row+1]);
}

function getClassNames(sid, i, row, active, playable, selectedSquare){
    let classNames = ' ';
    classNames += squareColor(i, row);
    if(active){
        classNames += ' active';
    }
    if(playable.some(id=> id === sid)){
        classNames += ' playable';
    }
    if(selectedSquare === sid){
        classNames += ' selected'
    }
    return classNames;
}

function squareColor(i, row){
    if(row%2===0){
        return (i % 2 === 1) ? 'square--black' : 'square--white';
    }else{
        return (i % 2 === 0) ? 'square--black' : 'square--white';
    }
}