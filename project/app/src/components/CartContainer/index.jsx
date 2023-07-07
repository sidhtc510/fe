import React from "react";
import CartItem from "../CartItem";
import s from "./s.module.css";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";

export default function CartContainer({ data }) {
    return (
        <Wrapper>
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
                            3077 <span>$</span>{" "}
                        </p>
                    </div>
                    <form>
                        <input type="text" placeholder="Enter your phone number" />
                        <Button className="greenBtn">Order</Button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}
