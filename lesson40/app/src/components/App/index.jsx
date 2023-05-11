import AddUser from "../AddUser";
import ProductsList from "../ProductsList";
import Test from "../Test";
import UserCalculation from "../UserCalculation";
import UserList from "../UserList";
import ProductCalculation from "./ProductCalculation";
import "./style.css";

function App() {
  return (
    <div>
      <h3 style={{textAlign: "center"}}>Users</h3>
      <AddUser />
      <UserList />
      <UserCalculation />
      {/* <Test /> */}

      <h3 style={{textAlign: "center"}}>Products</h3>
      <ProductsList />
      <ProductCalculation />
    </div>
  );
}

export default App;
