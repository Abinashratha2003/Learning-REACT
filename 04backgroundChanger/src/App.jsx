import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-around py-4">
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 bg-red-600 rounded"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="px-4 py-2 bg-green-600 rounded"
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 bg-blue-600 rounded"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("white")}
          className="px-4 py-2 bg-gray-200 text-black rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
