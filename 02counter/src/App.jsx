import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const deleteValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const moreValue = () => {
    return 20 - counter;
  };


  return (
    <>
      <h1>Hello Abinash</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={deleteValue}>Delete Value</button>
      <p>More values can be added: {moreValue()}</p>
      <p>More values can be deleted: {counter}</p>
    </>
  );
}

export default App;
