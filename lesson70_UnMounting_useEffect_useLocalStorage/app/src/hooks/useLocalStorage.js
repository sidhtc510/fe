import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
    debugger;
    const [state, setState] = useState(defaultValue);

    useEffect(() => {
        let result = JSON.parse(localStorage.getItem(key));

        setState(result);
        return () => {
            changeState("");
        };
    }, [defaultValue]);

    const changeState = (data) => {
        localStorage.setItem(key, JSON.stringify(data));
        setState(data);
    };

    return [state, changeState];
}
