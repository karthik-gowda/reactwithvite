import { useState } from "react";
import "./App.css";

function App() {
  let [counterVal, setCounterVal] = useState(5);

  const addValue = () => {
    setCounterVal(counterVal == 20 ? 20 : counterVal + 1);
    setCounterVal((prevState) => prevState + 1); //will have a call back from setter method
  };

  const removeValue = () => {
    setCounterVal(counterVal == 0 ? 0 : counterVal - 1);
  };
  return (
    <>
      <div>
        <h3>Counter Project All</h3>
        <h2>Counter Value {counterVal}</h2>
        <br />
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
