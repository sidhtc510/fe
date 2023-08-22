import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Inp() {
    const [state, setState] = useLocalStorage("stateText", "");

    useEffect(() => {
        console.log("Mounting");
        return () => {
            console.log("UN-mounting");
             setState("");
        };
    }, []);

    return (
        <div>
            <input type="text" onChange={(e) => setState(e.target.value)} value={state} />
            <p>{state}</p>
        </div>
    );
}
