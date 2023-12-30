import { useState } from 'react'
import Counter from './counter/Counter'
import Posts from './posts/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter />
     <Posts />
    </>
  )
}

export default App
