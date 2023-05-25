import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../store/asyncActions/productList";

export default function ProductList() {
  const productList = useSelector((state) => state.productList).reverse();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  },[]);


  console.log(productList);
  return <div className="productWrapper">
    {productList.map(elem=>
        <div key={elem.id}>

            <p>{elem.title}</p>
            <p>{elem.id}</p>
            <p>{elem.price}</p>
            {/* <img src={elem.images} alt="" /> */}
            </div>
        )}
  </div>;
}
