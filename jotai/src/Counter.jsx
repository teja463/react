import {atom, useAtom} from 'jotai';
import { useAtomDevtools } from 'jotai-devtools/utils';

const countAtom = atom(0);
// const countAtom2 = countAtom;
if (process.env.NODE_ENV !== 'production') {
    countAtom.debugLabel = 'counterAtom';
  }

export default function Counter(){
    return (
        <div>
            <div>Counter Atom</div>
            <Counter1 />
            <Counter2 />
        </div>
    )
}

function Counter1(){
    const [count, setCount] = useAtom(countAtom);
    useAtomDevtools(countAtom)

    return (
        <div>{count} <button onClick={() => setCount(prev => prev + 1)}>+1</button></div>
    )    
}

function Counter2(){
    const [count, setCount] = useAtom(countAtom);
    return (
        <div>{count} <button onClick={() => setCount(prev => prev + 1)}>+1</button></div>
    )    
}