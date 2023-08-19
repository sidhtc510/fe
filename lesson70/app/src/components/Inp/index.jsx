import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Inp() {
    const [state, setState] = useLocalStorage("stateText", "");

    // useEffect(() => {
    //     console.log("AnotherPage", "mounting");
    //     return () => {
    //         console.log("AnotherPage", "UNmounting");
    //         console.log("123");
    //         setState(" ");
    //     };
    // }, []);

    useEffect(() => {
        return () => {
            console.log("unmounting");
            setState(" ");
        };
    }, [" "]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    setState(e.target.value);
                }}
                value={state}
            />
            <p>{state}</p>
        </div>
    );
}
