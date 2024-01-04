
import './App.css';

const audioClip = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];


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
        
          {audioClip.map(clip => (
              <Pad key={clip.id} clip={clip}/>
          ))}
        
        </div>
      </div>
    </div>
  );
}

function Pad({clip}) {
  return {
    

  };
}

export default App;
