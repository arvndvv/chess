import './App.scss';
import ChessBoard from './components/ChessBoard/ChessBoard';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Chess</h1>
    </header>
    <main>
       <ChessBoard/>
    </main>
    </div>
  );
}

export default App;
