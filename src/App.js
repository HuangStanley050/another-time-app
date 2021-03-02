import logo from "./logo.svg";
import PlayButton from "./components/playButton";
import PauseButton from "./components/PauseButton";
import InputDuration from "./components/InputDuration";
import TimerText from "./components/TimeText";
import CircleDisplay from "./components/CircleDisplay";
import { TimerProvider, useTimer } from "./contexts/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Another pointless timer app</h1>
      <TimerProvider>
        <div>
          <TimerText />
        </div>

        <CircleDisplay />

        <div>
          <InputDuration />
          <PlayButton />
          <PauseButton />
        </div>
      </TimerProvider>
    </div>
  );
}

export default App;
