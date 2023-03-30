import User from "./User";
import Product from "./Product";
import Todo from "./Todo";

function App() {
  return (
    <div>
      <User name={'tol'} lastname={'surname'} age={30}/>
      <User name={'tol2'} lastname={'surname2'} age={32}/>
      <Product  title={'titl'} price={25} count={33}/>
      <Todo />
    </div>
  );
}

export default App;
