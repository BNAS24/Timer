import "./styles.css";
import { useState } from "react";

export default function App() {
  let [timing, setTiming] = useState(0);

  const startTimer = () => {
    // Complete this function
    window.timer = setInterval(() => {
      setTiming((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    // Complete this function
    clearInterval(window.timer);
  };

  const resetTimer = () => {
    // Complete this function
    clearInterval(window.timer);
    setTiming(0);
  };

  const minutes = Math.floor(timing / 60);
  const seconds = timing % 60;

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {minutes} mins </span>
      <span> {seconds} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
