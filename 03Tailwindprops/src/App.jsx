import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Components/Crards";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl mb-4">abinash</h1>
      <div className="flex-row">
      <Cards username = "Abinash" />
      <Cards username = "Neelam"/>
      </div>
    </>
  );
}

export default App;
