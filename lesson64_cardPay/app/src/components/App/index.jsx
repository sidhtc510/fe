import { useSelector } from "react-redux";
import "../../App.css";
import Form from "../Card";
import TableOfData from "../TableOfData";

function App() {
    const data = useSelector((state) => state.data);
    return (
        <div>
            <Form />
            <TableOfData data={data} />
        </div>
    );
}

export default App;
