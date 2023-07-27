import "../../App.css";
import Button from "../Button";
import Wrapper from "../Wrapper";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { GoArrowSwitch } from "react-icons/go";
import { useState } from "react";

function App() {
    const [darkTheme, setDarkTheme] = useLocalStorage("theme", false);
    const [rotated, setRotated] = useState(false);

    const handleButtonClick = () => {
        setDarkTheme(!darkTheme);

        setRotated(true);
        setTimeout(() => setRotated(false), 300); 
    };

    return (
        <div className={["mainWrapper", darkTheme ? "darkTheme" : "lightTheme"].join(" ")}>
            <Wrapper darkTheme={darkTheme}>
                <Button onClick={handleButtonClick}>
                    {" "}
                    <GoArrowSwitch className={rotated ? "rotatedIcon" : ""} /> Switch theme
                </Button>
            </Wrapper>
        </div>
    );
}

export default App;
