import logo from "./logo.svg";
import PlayButton from "./components/playButton";
import PauseButton from "./components/PauseButton";
import InputDuration from "./components/InputDuration";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Another pointless timer app</h1>
      <InputDuration />
      <PlayButton />
      <PauseButton />
    </div>
  );
}

export default App;
