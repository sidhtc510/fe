import React, { useEffect } from "react";
import CartItem from "../CartItem";
import s from "./s.module.css";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart.js";
import { useDispatch } from "react-redux";
import { postOrder } from "../../store/slice/cartSlice";

export default function CartContainer() {
    const dispatch = useDispatch();

    const data = useCart();

    const handleSubmit = (event, postData) => {
        event.preventDefault();
        // console.log(event);
        dispatch(postOrder(postData));
    };

    const amountCart = data
        .reduce((acc, el) => acc + (el.discont_price ?? el.price) * el.count, 0)
        .toFixed(2);

    return (
        <Wrapper>
            <Link to="/" className={s.aToStore}>
                {" "}
                Back to the store &gt;{" "}
            </Link>
            <div className={s.cartContainerWrapper}>
                {/* <div className={s.items}> */}
                <div>
                    {data.map((el) => (
                        <CartItem key={el.id} {...el} />
                    ))}
                </div>

                <div className={s.amountBlock}>
                    <p>Order details</p>
                    <div>
                        <p>total</p>
                        <p>
                            {amountCart} <span>$</span>{" "}
                        </p>
                    </div>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                        />

                        <Button
                            className="greenBtn"
                            onClick={(event) => handleSubmit(event, "handler phone number")}
                        >
                            Order
                        </Button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}
