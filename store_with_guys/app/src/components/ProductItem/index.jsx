import React, { useContext } from "react";
import { deleteAction } from "../../store/reducers/goodsReducer";
import { addToCartAction } from "../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";
import { Context } from "../../context";

export default function ProductItem({ id, price, product, in_stock, image }) {
      const defaultImg = !image ? "./images/noImage.webp" : "./images/" + image;
      const stateInstock = in_stock ? "in stock" : "not available";
      const buttonDisabled = in_stock ? false : true;
      const style = {
            color: in_stock ? "green" : "red",
      };

      const dispatch = useDispatch();
      const { setNotification } = useContext(Context);

      const handler = (id) => {
            setNotification({ state: true, content: `Added to cart` });
            dispatch(addToCartAction({ id }));
      };

      return (
            <div className="product">
                  <button
                        className="closeBtn"
                        onClick={() => dispatch(deleteAction(id))}
                  >
                        X
                  </button>
                  <img className="img" src={defaultImg} alt="" />
                  <div>
                        <p className="title">{product}</p>
                        <p className="price_actual">{price}</p>
                  </div>
                  <div>
                        <p style={style} className="available">
                              {stateInstock}
                        </p>
                        <button
                              onClick={() => handler(id)}
                              disabled={buttonDisabled}
                        >
                              Add to cart
                        </button>
                  </div>
            </div>
      );
}
