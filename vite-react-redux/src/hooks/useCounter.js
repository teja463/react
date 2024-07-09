import {useState, useEffect} from 'react';

export default function useCounter(intialValue = 0){
    const [value, setValue] = useState(intialValue);

    const increment = () => setValue(prevValue => prevValue + 1);
    const decrement = () => setValue(prevValue => prevValue - 1);

    return [value, increment, decrement];
}