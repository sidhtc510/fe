// import { useState } from "react";

// export function useLocalStorage(key, defaultValue) {
//     const [state, setState] = useState(() => {
//         let result = localStorage.getItem(key);

//         try {
//             result = JSON.parse(result);
//         } catch (err){
//           console.log(err);
//         }

//         return result ?? defaultValue;
//     });

//     const changeState = (data) => {
//         setState(data);
//         localStorage.setItem(key, JSON.stringify(data));
//     };
//     return [state, changeState];
// }

import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
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
