import React from "react";
import Product from "./Product";
import {products} from "../data/productsData"

export default function ProductContainer() {
  

  return (
    <div>
      {products
      .filter((el) => {
        return el.price <= 100 && el.in_stock
      })
      .map((el) => (
        <Product {...el} key={el.id}/>
      ))
    }
    
    </div>
  );
}
