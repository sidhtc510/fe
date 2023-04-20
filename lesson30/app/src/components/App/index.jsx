import React, { useState } from "react";
import Product from "../Product";
import AddProduct from "../AddProducr";

export default function App() {
  const style = {
    display: "flex",
    gap: "20px",
  };

  const defaultProducts = [
    { id: 1, title: "велосипед", price: 3500, amount: 4 },
    { id: 2, title: "ролики", price: 500, amount: 0 },
    { id: 3, title: "самокат", price: 700, amount: 8 },
    { id: 4, title: "лыжи", price: 2200, amount: 11 },
  ];

  const [products, setProducts] = useState(defaultProducts);

  const deleteItem = (id) => setProducts(products.filter((el) => el.id !== id));

  const incrAmount = (id) => {
    const newArr = products.map((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
      return item;
    });
    setProducts(newArr);
  };

  const decrAmount = (id) => {
    const newArr = products.map((item) => {
      if (item.id === id && item.amount > 0) {
        item.amount -= 1;
      }
      return item;
    });
    setProducts(newArr);
  };

  const zeroAmount = (id) => {
    const newArr = products.map((item) => {
      if (item.id === id) {
        item.amount = 0;
      }
      return item;
    });
    setProducts(newArr);
  };

  const incrementPrice = (id) => {
    const newArr = products.map((item) => {
      if (item.id === id) {
        item.price += 1000;
      }
      return item;
    });
    setProducts(newArr);
  };


  const addProduct =(product) =>{
  const newState = [...products, product]
  setProducts(newState)
  }

  return (
    <div>
      <AddProduct addProduct={addProduct} />
      <div style={style}>
        {products.length !== 0 ? (
          products.map((el) => (
            <Product
              {...el}
              key={el.id}
              {...{
                deleteItem,
                incrAmount,
                decrAmount,
                zeroAmount,
                incrementPrice,
              }}
            />
          ))
        ) : (
          <p>empty</p>
        )}
      </div>
    </div>
  );
}
