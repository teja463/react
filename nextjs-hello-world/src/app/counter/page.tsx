import { Metadata } from "next"
import { Counter } from "./counter"

export const metadata: Metadata = {
  title:"Counter Page"
}

export default function CounterPage(){
  
  return <div>
    <h1>Counter page</h1>
    <Counter />
  </div>
}