import s from "./s.module.css";

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCart } from "../../hooks/useCart.js";
import { useDispatch, useSelector } from "react-redux";
import { clearBascketAction, postOrder } from "../../store/slice/cartSlice";
import { FaAngellist } from 'react-icons/fa'
import { toast } from "react-toastify";

import CartItem from "../CartItem";
import Button from "../UI/Button";
import InputPhone from "../UI/InputPhone";
import Wrapper from "../UI/Wrapper";

export default function CartContainer() {
    const dispatch = useDispatch();

    const data = useCart(); // так же вызывается в app. данные можно передать пропсами
    const order_sent = useSelector((state) => state.cart.data);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handler = (postData) => {
        dispatch(postOrder(postData));
        dispatch(clearBascketAction(true))
        toast("An order has been placed")
    };

    const amountCart = data.reduce((acc, el) => acc + (el.discont_price ?? el.price) * el.count, 0).toFixed(2);

    return (
        <Wrapper>
            <Link to="/" className={s.aToStore}>
                {" "}
                Back to the store &gt;{" "}
            </Link>
            <div className={s.cartContainerWrapper}>
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

                    <form onSubmit={handleSubmit(handler)}>
                        <InputPhone
                            type="text"
                            placeholder="Enter your phone number"
                            register={register("phoneNum", {
                                required: "*required",
                                pattern: {
                                    value: /^(?:\+49|0)[1-9]\d{6,14}$/,
                                    message: "Enter a valid German number",
                                },
                            })}
                            errors={errors}
                        />

                        <Button className="greenBtn">{order_sent.status === "OK" ? <FaAngellist /> : "Order"}</Button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}
