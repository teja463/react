import { useState } from "react";

function useTimer() {
  const [time, setTime] = useState(new Date());
  console.log("hook render");

   useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)
    return () => {
      clearInterval(intervalId);
    }
  }, [])
  return time.toISOString();
}

export default function HookDemo() {
  const time = useTimer();
  console.log("component render");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hook Demo</h2>
      <p>{time}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count}
      </button>
    </div>
  );
}
