import './Square.scss';
export default function Square(props){
    const {i, onClick, selectedSquare, playable} = props;
    return (
        <div className={`square ${playable ? 'playable' : ''} ${squareColor(i)} ${selectedSquare===i ? 'selected' : ''}`} onClick={onClick}>
        </div> 
    )

}

function squareColor(i){
    const row = Math.floor(i /8);
    if(row%2===0){
        return (i % 2 === 1) ? 'square--black' : 'square--white';
    }else{
        return (i % 2 === 0) ? 'square--black' : 'square--white';
    }
}