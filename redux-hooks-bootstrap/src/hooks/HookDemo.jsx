import { useEffect, useState } from "react";
import useStorage from "./useStorage";
import useCounter from "./useCounter";
import useWindowSize from "./useWindowSize";

export default function HookDemo(props) {
  const [name, setName] = useStorage("name");
  const [timer, setTimer] = useState(new Date().toLocaleString());
  const size = useWindowSize();

  useEffect(() => {
    console.log("demo mounted");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [count, increment, decrement] = useCounter();
  return (
    <div style={{ border: "2px dashed", padding: "8px", marginBottom: "8px" }}>
      <h2>Hooks Demo</h2>
      <input
        type="text"
        id="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="text">Hook</label>

      <div>
        <h3>Count {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <br />

      <p>Timer {timer}</p>
      <p>Width {size.width}</p>
      <p>Height {size.height}</p>
    </div>
  );
}
