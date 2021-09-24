import {useState, useEffect} from "react"

export const useDebounce = (value) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, )
        return () => {
            clearTimeout(handler);
        };
        
    }, [value]);
    return debounceValue;
};