import { useEffect, useState } from "react";
import useStorage from "./useStorage";
import useCounter from "./useCounter";

export default function HookDemo(props) {
  const [name, setName] = useStorage("name");
  const [timer, setTimer] = useState(new Date().toLocaleString());

  useEffect(() => {
    console.log("demo mounted");
  }, []);

  useEffect(() => {
    const interval =  setInterval(() => {
      setTimer(new Date().toLocaleString())
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])

  const [count, increment, decrement] = useCounter();
  return (
    <div>
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
      <br/>

      <div>
        Timer {timer}
      </div>
    </div>
  );
}
