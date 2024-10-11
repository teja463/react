import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByValue, incrementByValueAsync, counterSelector } from "./counterSlice";
export default function Counter() {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(0);
  return (
    <>
      <div>
        <h2>Count is {count}</h2>
        <button className="btn btn-dark" onClick={() => dispatch(decrement())}>-</button>
        <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <input
          style={{'width': '50px'}}
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(+e.target.value)}
        />
        <button className="btn btn-danger" onClick={() => dispatch(incrementByValue(userInput))}>Increment by Value</button>
        <button className="btn btn-warning" onClick={() => dispatch(incrementByValueAsync(userInput))}>Increment by Value Async</button>
      </div>
    </>
  );
}
