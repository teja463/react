import {atom, useAtom} from 'jotai';

const countAtom = atom(0);
// const countAtom2 = countAtom;


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