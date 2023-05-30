import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { Context } from "../../context";

export default function GoodsWrapper() {
  const { setWhichStateWeUse } = useContext(Context);

  const goodsArr = useSelector((state) => {
    if (state.goods.filteredProducts.length > 0) {
      setWhichStateWeUse("Filtered products");
      return state.goods.filteredProducts;
    } else {
      setWhichStateWeUse("Products");
      return state.goods.products;
    }
  });

  // const [price, setPrice] = useState(0);
  // const handler = (e) => {
  //   setPrice(+e.target.value);
  // };
  // const newProducts = price === 0 ? goodsArr : goodsArr.filter(el => el.price <= price)

  return (
    <div className="goods_wrapper">
      {/* <input type="number" onChange={handler} value={price} /> */}
      {goodsArr.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
}
