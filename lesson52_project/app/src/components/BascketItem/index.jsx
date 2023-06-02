import React from "react";
import { useDispatch } from "react-redux";
import {
      DECREMENTBascketAction,
      INCREMENTBascketAction,
      deleteItemBascketAction,
} from "../../store/reducers/bascketReducer";
import s from "./style.module.css";
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
                                          dispatch(INCREMENTBascketAction(id))
                                    }
                              >
                                    +
                              </button>
                              <button
                                    onClick={() =>
                                          dispatch(DECREMENTBascketAction(id))
                                    }
                              >
                                    -
                              </button>
                        </div>
                        <button
                              onClick={() =>
                                    dispatch(deleteItemBascketAction(id))
                              }
                        >
                              X
                        </button>
                  </div>
            </div>
      );
}
