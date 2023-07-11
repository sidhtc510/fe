import React from "react";
import CartItem from "../CartItem";
import s from "./s.module.css";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart.js";

export default function CartContainer() {
    const data = useCart();

const amountCart = data.reduce((acc, el) => acc + (el.discont_price ?? el.price) * el.count, 0 ).toFixed(2)


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
                        <Button className="greenBtn">Order</Button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}
