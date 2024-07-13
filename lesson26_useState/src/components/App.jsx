import Addword from "./AddWord/Addword";
import Product from "./Product/Product";
import Test from "./Test";
import User from "./User/User";
import WordsContainer from "./WordsContainer/WordsContainer";

function App() {
  const products = [
    { id: 1, title: "велосипед", price: 3500, desc: "полезно для здоровья" },
    { id: 2, title: "ролики", price: 500, desc: "весело" },
    { id: 3, title: "самокат", price: 1200, desc: "удобно для города" },
    { id: 4, title: "лыжи", price: 2200, desc: "полезно для спины" },
    { id: 5, title: "сноуборд", price: 2100, desc: "модно-молодежно" },
  ];

  const user = [
    { id: 1, 
      name: "Tolik", 
      lastname: "Sydorenko", 
      position: "direktor mira",
    },
    {
      id: 2,
      name: "vasya",
      lastname: "ivanov",
      position: "sortirovschik klubniki",
    },
  ];

  return (
    <>
      <div>
        {products.map((el) => (
          <Product {...el} key={el.id} />
        ))}
      </div>

      <div>
        {user.map((el) => (
          <User {...el} key={el.id} />
        ))}
      </div>
      <p>Words</p>
      <WordsContainer />

      <Test />
    </>
  );
}

export default App;
