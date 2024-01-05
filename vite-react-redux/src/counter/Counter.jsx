import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByValue, incrementByValueAsync, counterSelector } from "./counterSlice";
export default function Counter() {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(0);
  return (
    <>
      <div className="card">
        <h2>Count is {count}</h2>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <input
          style={{'width': '30px'}}
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(+e.target.value)}
        />
        <button onClick={() => dispatch(incrementByValue(userInput))}>Increment by Value</button>
        <button onClick={() => dispatch(incrementByValueAsync(userInput))}>Increment by Value Async</button>
      </div>
    </>
  );
}
