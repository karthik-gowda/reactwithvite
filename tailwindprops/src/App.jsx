import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-5">
        <Card name="Delba" />
        <Card name="Chai" />
      </div>
    </>
  );
}

export default App;
