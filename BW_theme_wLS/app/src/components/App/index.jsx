import "../../App.css";
import Button from "../Button";
import Wrapper from "../Wrapper";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { GoArrowSwitch } from "react-icons/go";

function App() {
    const [darkTheme, setDarkTheme] = useLocalStorage("theme", false);

    return (
        <div>
            <Wrapper darkTheme={darkTheme}>
                <Button onClick={() => setDarkTheme(!darkTheme)}>
                    {" "}
                    <GoArrowSwitch /> Switch theme
                </Button>
            </Wrapper>
        </div>
    );
}

export default App;
