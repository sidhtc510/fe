import React from "react";
import s from "./s.module.css";
import mc from "./1.png";
import vs from "./2.png";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice/dataSlice";
import { useForm } from "react-hook-form";
import { fields } from "./constrains";
import Field from "../UI/Field";

export default function Card() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handler = ({ mm, yy, ...data }) => {
        // e.preventDefault();
        // const data = {
        //     hName: e.target.hName.value,
        //     hNumber: e.target.hNumber.value,
        //     mm: e.target.mm.value,
        //     yy: e.target.yy.value,
        //     cvc: e.target.cvc.value,
        // };
        data.dateExpire = `${mm} / ${yy}`;
        dispatch(add(data));
    };

    return (
        <form onSubmit={handleSubmit(handler)} className={s.form}>
            <div className={s.frontSide}>
                <Field
                    register={register("hName", fields.hName)}
                    type="text"
                    placeholder="Holder of card"
                    className={s.hName}
                    errors={errors}
                />

                <Field
                    register={register("hNumber", fields.hNumber)}
                    type="text"
                    placeholder="Number of card"
                    className={s.hNumber}
                    errors={errors}
                />

                <div className={s.dateBlock}>
                    <p>VALID THRU</p>

                    <Field
                        register={register("mm", fields.mm)}
                        type="number"
                        placeholder="MM"
                        className={s.mm}
                        errors={errors}
                    />
                    <span>/</span>

                    <Field
                        register={register("yy", fields.yy)}
                        type="number"
                        placeholder="YY"
                        className={s.yy}
                        errors={errors}
                    />
                    <div className={s.icons}>
                        <img src={mc} alt="" />
                        <img src={vs} alt="" />
                    </div>
                </div>
            </div>

            <div className={s.backSide}>
                <div className={s.strip}></div>
                <Field
                    register={register("cvc", fields.cvc)}
                    type="password"
                    placeholder="CVC"
                    className={s.cvc}
                    errors={errors}
                />
            </div>

            <Button>Send</Button>
        </form>
    );
}
