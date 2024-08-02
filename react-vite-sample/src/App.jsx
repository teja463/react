import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import C from './constants'

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env);
  console.log(import.meta.env.VITE_NAME);
  return (
    <>
      <div>
        <h3>{C.APP_BASE_URL}</h3>
        <h4>{JSON.stringify(import.meta.env)}</h4>
        <p className="text-3xl font-bold underline">Teja!</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p className="text-3xl font-bold underline">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
