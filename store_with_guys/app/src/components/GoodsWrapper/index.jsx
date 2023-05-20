import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";

export default function GoodsWrapper() {
  const goodsArr = useSelector((state) => {
    // console.log(state);
    if ((state.goods.filteredProducts.length > 0)) {
      return state.goods.filteredProducts;
    } else {
      return state.goods.products;
    }
  });

  return (
    <div className="goods_wrapper">
      {goodsArr.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
}
