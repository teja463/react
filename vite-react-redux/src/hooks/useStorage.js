import {useState, useEffect} from 'react';
import useLogger from './useLogger';

function getSavedValue(key, initialValue){
    const saved = JSON.parse(localStorage.getItem(key));
    if(!saved){
        return initialValue;
    }
    return saved;
}

export default function useStorage(key, initialValue=''){

    const [name, setName] = useState(getSavedValue(key, initialValue));
    useLogger(name);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(name));
    }, [name])

    useEffect(() => {
        console.log('hook mounted');
    }, [])

    return [name, setName]
}