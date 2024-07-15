import { useEffect, useState } from "react";
export default function useWindowSize(){
    const [size, setSize] = useState({width:null, height:null});

    useEffect(() => {

        const updateSize = () => {
            setSize({width:window.innerWidth, height: window.innerHeight});
        }

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        }

    }, [])

    return size;
}