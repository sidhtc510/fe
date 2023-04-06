import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <div>
      <Nav {...{menuActive, setMenuActive, color, setColor}}/>
    </div>
  );
}

export default App;
