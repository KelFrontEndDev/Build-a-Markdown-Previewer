import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <button className="drum-pad" id="kick">Q</button>
          <button className="drum-pad" id="snare">W</button>
          <button className="drum-pad" id="hihat">E</button>
          <button className="drum-pad" id="shaker">A</button>
          <button className="drum-pad" id="ride">S</button>
          <button className="drum-pad" id="clash">D</button>
          <button className="drum-pad" id="tom1">Z</button>
          <button className="drum-pad" id="tom2">X</button>
          <button className="drum-pad" id="tom3">C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
