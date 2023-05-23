import React, { useContext } from "react";
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

  return (
      <div className="goods_wrapper" >
        {goodsArr.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    
  );
}
