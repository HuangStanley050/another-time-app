import logo from "./logo.svg";
import PlayButton from "./components/playButton";
import PauseButton from "./components/PauseButton";
import InputDuration from "./components/InputDuration";
import { TimerProvider, useTimer } from "./contexts/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Another pointless timer app</h1>
      <TimerProvider>
        <InputDuration />
        <PlayButton />
        <PauseButton />
      </TimerProvider>
    </div>
  );
}

export default App;
