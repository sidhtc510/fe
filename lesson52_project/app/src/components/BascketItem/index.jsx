import React from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.css";
import { decrAction, deleteAction, incrAction } from "../../store/slice/bascketSlice";
export default function BascketItem({ id, title, image, price, count }) {
      const dispatch = useDispatch();

      return (
            <div className={s.product}>
                  <img src={image} alt={title} />
                  <p>{title}</p>
                  <div className={s.priceAndControlWrapper}>
                        <p>
                              {price} X {count} = {(price * count).toFixed(2)}
                        </p>
                        <div className={s.control}>
                              <button
                                    onClick={() =>
                                          dispatch(incrAction(id))
                                    }
                              >
                                    +
                              </button>
                              <button
                                    onClick={() =>
                                          dispatch(decrAction(id))
                                    }
                              >
                                    -
                              </button>
                        </div>
                        <button
                              onClick={() =>
                                    dispatch(deleteAction(id))
                              }
                        >
                              X
                        </button>
                  </div>
            </div>
      );
}
