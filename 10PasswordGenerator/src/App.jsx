import { useState, useCallback, useRef, useEffect } from "react";
// import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [CharacterAllowed, setCharacterallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (CharacterAllowed) str += "~!@#$%^&*()_+-={}[]<>?:'.,/`;";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);

      setPassword(pass);
    }
  }, [length, numberallowed, CharacterAllowed, setPassword]);
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //To show the user what they have selected
    passwordRef.current?.setSelectionRange(0, 999);//When we want User to select a paticular length
    window.navigator.clipboard.writeText(password)//Copy the password to the clipboard
  }, [password])

  useEffect(()=> {
    PasswordGenerator();
  },[length, numberallowed, CharacterAllowed, setPassword]) 
  //This useEffect will run for the first time when the website is being rendered. Until its dependancies are used.




  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-pink-50">
    <h1 className="text-purple-900 text-2xl text-center my-3">
      Password Generator
    </h1>
    
    <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-purple-100">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-2 px-3 bg-indigo-100 text-indigo-900 text-xl placeholder-indigo-400"
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />
      <button
    onClick={copyPasswordToClipboard}
        className="outline-none bg-pink-200 text-pink-900 px-3 py-0.5 shrink-0 hover:bg-pink-300 transition"
      >
        copy
      </button>
    </div>

    <div className="flex text-sm gap-x-4 text-purple-900">
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          className="cursor-pointer accent-purple-400"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={() => setNumberallowed((prev) => !prev)}
          className="accent-purple-400"
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={CharacterAllowed}
          id="characterInput"
          onChange={() => setCharacterallowed((prev) => !prev)}
          className="accent-purple-400"
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  </div>
);

}

export default App;
