import { useSelector } from "react-redux";
import "../../App.css";
import CategoryList from "../CategoryList";

function App() {
  const categories = useSelector((state) => state.category);
  console.log(categories);
  return (
    <div>
      {categories.map(el=><CategoryList key={el} category={el}/>)}
    </div>
  );
}

export default App;
