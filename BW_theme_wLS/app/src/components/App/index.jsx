import "../../App.css";
import Button from "../Button";
import Wrapper from "../Wrapper";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function App() {
    const [darkTheme, setDarkTheme] = useLocalStorage("theme", false);

    return (
        <div>
            <Button onClick={() => setDarkTheme(!darkTheme)}>Switch theme</Button>
            <Wrapper darkTheme={darkTheme} />
        </div>
    );
}

export default App;
