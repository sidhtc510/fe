import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import RolesPage from "./Pages/RolesPage";
import NavMenu from "./components/NavMenu";
import UserPage from "./Pages/UserPage";

function App() {
    // const [roles, setRoles] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.escuelajs.co/api/v1/users")
    //         .then((resp) => resp.json())
    //         .then((data) => setRoles(data));
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         const resp = await fetch("https://api.escuelajs.co/api/v1/users");
    //         const data = await resp.json();
    //         setRoles(data);
    //     })();
    // }, []);

    return (
        <div>
            <NavMenu />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/roles" element={<RolesPage />} />
                <Route path="/:role" element={<UserPage />} />
            </Routes>
        </div>
    );
}

export default App;
