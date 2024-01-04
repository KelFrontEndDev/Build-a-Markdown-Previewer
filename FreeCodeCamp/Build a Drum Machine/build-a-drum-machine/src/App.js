import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <button className="drum-pad" id="kick"><audio className="clip" id="Q" src="https://drive.google.com/file/d/1tYvZoovrpx8PSNAEGUJpmAEVH14JT2PV/view?usp=drive_link"></audio>Q</button>
          <button className="drum-pad" id="snare"><audio className="clip" id="W" src="https://drive.google.com/file/d/1HRYwh4rgQ_cOnSwDTgnWLRHZ4-AqXI3x/view?usp=drive_link"></audio>W</button>
          <button className="drum-pad" id="hihat"><audio className="clip" id="E" src="https://drive.google.com/file/d/1tBb7m1-27vBkOQiiDaos3cnx3mKBLTQB/view?usp=drive_link"></audio>E</button>
          <button className="drum-pad" id="shaker"><audio className="clip" id="A" src="https://drive.google.com/file/d/13xTN0rMBLVfdWf6fQJrzpd45DoQbKH4G/view?usp=drive_link"></audio>A</button>
          <button className="drum-pad" id="ride"><audio className="clip" id="S" src="https://drive.google.com/file/d/1YPY2IkM5BoI60buZm36KmsXY-PHP5qSV/view?usp=drive_link"></audio>S</button>
          <button className="drum-pad" id="tambourine"><audio className="clip" id="D" src="https://drive.google.com/file/d/1qEKMZEwbf4p-YNB4J56-7UdZx3gW-1cX/view?usp=drive_link"></audio>D</button>
          <button className="drum-pad" id="clap"><audio className="clip" id="Z" src="https://drive.google.com/file/d/1EJ2y10rlARSkqoyMS09ZoAQuknkZ18pV/view?usp=drive_link"></audio>Z</button>
          <button className="drum-pad" id="perc1"><audio className="clip" id="X" src="https://drive.google.com/file/d/168wDgQm6OUl0gXWX7RELbEIGZ5ODoN-B/view?usp=drive_link"></audio>X</button>
          <button className="drum-pad" id="perc2"><audio className="clip" id="C" src="https://drive.google.com/file/d/1b4JtZ9csGeB_QC1vZTE55UX7-QciDgix/view?usp=drive_link"></audio>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
