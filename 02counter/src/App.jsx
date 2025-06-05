import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    // console.log(counter);
    if (counter >= 20) {
      setCounter(counter);
    } else {
      counter = counter + 1;
      setCounter(counter);
    }
    console.log(counter);
  };
  const deleteValue = () => {
    if (counter <= 0) {
      setCounter(counter);
    } else {
      counter = counter - 1;
      setCounter(counter);
    }
    console.log(counter);
  };

  return (
    <>
      <h1> hello Abinash</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value {counter}</button>
      <button onClick={deleteValue}>delete value {counter}</button>
    </>
  );
}

export default App;
