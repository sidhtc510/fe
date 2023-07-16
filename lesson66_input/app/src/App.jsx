import "./App.css";
import { Input } from "./components/Input";

function App() {
    return (
        <div>
            <h3 style={{margin:"10px", color:"black", userSelect:"none"}}>Enter some password</h3>
            <Input />
        </div>
    );
}

export default App;
