import React from "react";
import s from "./s.module.css";
import img from "./3.png";
import Button from "../UI/Button";
import InputPhone from "../UI/InputPhone";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postDiscount } from "../../store/slice/discountSlice";

export default function Gnome() {
    const dispatch = useDispatch();
    const resp = useSelector((state) => state.discount);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handler = (data) => {

        dispatch(postDiscount(data));
    };

    return (
        <div className={s.wrap}>
            <img src={img} alt="" />
            <div className={s.formBlock}>
                <h2>5% off</h2>
                <h3>on the first order</h3>
                <form onSubmit={handleSubmit(handler)}>
                    <InputPhone
                        defaultValue={"+492115684962"}
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

                    <Button className={"getDiscount"}>{resp.data.status === "OK" ? "Discount has been received" : "Get a discount"}</Button>
                </form>
            </div>
        </div>
    );
}
