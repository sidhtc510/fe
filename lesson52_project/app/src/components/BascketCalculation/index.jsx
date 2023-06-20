import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.css";
import Checkbox from "../UI/Checkbox";
import { clearBascketAction } from "../../store/slice/bascketSlice";
import { useBascketProducts } from "../../hooks/useBascketProducts";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function BascketCalculation() {
    const result = useBascketProducts();

    const dispatch = useDispatch();
    const amount = result
        .reduce((acc, el) => acc + el.price * el.count, 0)
        .toFixed(2);

    const [showPrice, setShowPrice] = useLocalStorage("showPrice", true);

    return (
        <div>
            <div className={s.container}>
                <div>
                    {showPrice && <p>Amount : {amount}</p>}

                    <Checkbox
                        checked={showPrice}
                        label={"Amount"}
                        size="size_M"
                        onChange={({ target }) => setShowPrice(target.checked)}
                    />

                </div>
            </div>
            <button onClick={() => dispatch(clearBascketAction())}>
                ClearCart
            </button>
        </div>
    );
}
