import {useState, useEffect} from 'react';
import useLogger from './useLogger';

function getSavedValue(key, intialValue){
    const saved = JSON.parse(localStorage.getItem(key));
    if(!saved){
        return intialValue;
    }
    return saved;
}

export default function useStorage(key, intialValue=''){

    const [name, setName] = useState(getSavedValue(key, intialValue));
    useLogger(name);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(name));
    }, [name])

    useEffect(() => {
        console.log('hook mounted');
    }, [])

    return [name, setName]
}