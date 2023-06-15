import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { ClearBascketAction } from "../../store/reducers/bascketReducer";
import s from "./style.module.css";
import Checkbox from "../UI/Checkbox";

export default function BascketCalculation({ result }) {
    // const dispatch = useDispatch();
    const amount = result
        .reduce((acc, el) => acc + el.price * el.count, 0)
        .toFixed(2);

    const [showPrice, setShowPrice] = useState(false);

    return (
        <div>
            <div className={s.container}>
                <div>
                    {showPrice && <p>Amount : {amount}</p>}

                    <Checkbox
                        label={"Amount"}
                        size="size_M"
                        onChange={({ target }) => setShowPrice(target.checked)}
                    />
                </div>
            </div>
            {/* <button onClick={() => dispatch(ClearBascketAction())}>
                ClearCart
            </button> */}
        </div>
    );
}
