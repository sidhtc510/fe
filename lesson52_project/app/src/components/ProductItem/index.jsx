import React from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../../store/slice/bascketSlice";


export default function ProductsItem({
    id,
    title,
    image,
    price,
    rating: { rate, count },
}) {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addAction({ id }));
    };

    return (
        <div className="product">
            <div>
                <img src={image} alt={title} />
                <p>{title}</p>
            </div>
            <div className="priceRaitingWrapper">
                <p>
                    {price} {rate} ({count})
                </p>
                <p>
                    {" "}
                    <button onClick={addToCart}>Add</button>{" "}
                </p>
            </div>
        </div>
    );
}
