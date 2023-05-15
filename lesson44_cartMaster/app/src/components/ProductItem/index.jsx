import React from "react";
import { add_to_cart } from "../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../store/reducers/productReducer";

export default function ProductItem({ id, title, price }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add_to_cart({ id, title, price }));
  };

  const delete_product = (payload) => {
    // console.log(payload);
    dispatch(deleteProductAction(payload));
  };

  return (
    <div className="productitem">
      <p onClick={()=>{delete_product(id)}}>X</p>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}
