import React from "react";
import s from "./s.module.css";
export default function InputPhone({ register, errors, ...props }) {
    return (
        <div className={s.wrap}>
            <input {...register} {...props} className={s.input} />
            <p className={s.error_message}>{errors[register.name]?.message}</p>
        </div>
    );
}
