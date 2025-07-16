import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Button onClick={() => console.log('click')}>Click me</Button>
        <Button variant={"destructive"} size="sm">Click me</Button>
        <Button variant={"outline"} size="lg">Click me</Button>
        <Button variant={"secondary"} size="icon">I</Button>
        <Button variant={"ghost"}>Click me</Button>
        <Button variant={"link"}>Click me</Button>
    </>
  );
}

export default App;
