
import './App.css';



function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <button className="drum-pad" id="kick"><audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</button>
          <button className="drum-pad" id="snare"><audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</button>
          <button className="drum-pad" id="hihat"><audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</button>
          <button className="drum-pad" id="shaker"><audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</button>
          <button className="drum-pad" id="ride"><audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</button>
          <button className="drum-pad" id="tambourine"><audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</button>
          <button className="drum-pad" id="clap"><audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</button>
          <button className="drum-pad" id="perc1"><audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</button>
          <button className="drum-pad" id="perc2"><audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</button>
        </div>
      </div>
    </div>
  );
}



export default App;
