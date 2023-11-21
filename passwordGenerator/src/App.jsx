import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    buttonRef.current.textContent = "Copy";
    buttonRef.current.style.backgroundColor = "blue";
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "~!@#$%^&*(()_+{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    buttonRef.current.textContent = "Copied";
    buttonRef.current.style.backgroundColor = "green";

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, setPassword, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto h-32 shadow-md rounded-lg px-4 m-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center py-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text" ref={passwordRef} value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly />
          <button ref={buttonRef} onClick={copyToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
              type="range"
              min={6}
              max={25}
              value={length}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numbersAllowed"
              defaultChecked={number}
              onChange={() => {
                setNumber(!number);
              }}
            />
            <label htmlFor="numbersAllowed">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charAllowed"
              defaultChecked={char}
              onChange={() => {
                setChar(!char);
              }}
            />
            <label htmlFor="charAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
