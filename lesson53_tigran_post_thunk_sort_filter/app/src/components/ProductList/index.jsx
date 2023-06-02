import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../store/asyncActions/productList";

export default function ProductList() {
  // const productList = useSelector((state) => state.productList).reverse()
  const productList = useSelector((state) => state.productList).filter(elem => elem.show);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  },[dispatch]);

  // console.log(productList);
  return <div className="productWrapper">
    {productList.
    map(elem=>
        <div key={elem.id}>
            <p>title: {elem.title}</p>
            <p>id: {elem.id}</p>
            <p>price: {elem.price}</p>
            <img src={elem.images} alt="" />
            <p>{elem.category.name}</p>
            </div>
        )}
  </div>;
}
