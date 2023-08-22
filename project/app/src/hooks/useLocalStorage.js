import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        let result = localStorage.getItem(key);

        try {
            result = JSON.parse(result);
        } catch {}

        return result ?? defaultValue;
    });

    const changeState = (data) => {
        setState(data);
        localStorage.setItem(key, JSON.stringify(data));
    };
    return [state, changeState];
}

// import { useState } from "react";

// export function useLocalStorage(key, defaultValue) {
//     const [state, setState] = useState(() => {
//         let result = localStorage.getItem(key)

//         try {
//             result = JSON.parse(result);
//         } catch{}

//         return result ?? defaultValue;
//     });

//     const changeState = (data) => {
//         setState(data)
//         localStorage.setItem(key, JSON.stringify(data));
//     };
//     return [state, changeState];
// }
