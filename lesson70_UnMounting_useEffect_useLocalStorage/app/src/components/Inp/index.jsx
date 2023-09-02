
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Inp() {
    const [state, setState] = useLocalStorage("stateText", "");

    return (
        <div>
            <input type="text" onChange={(e) => setState(e.target.value)} value={state} />
            <p>{state}</p>
        </div>
    );
}
