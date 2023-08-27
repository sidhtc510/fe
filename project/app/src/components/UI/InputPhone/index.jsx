import React from "react";
import s from "./s.module.css";

import { toast } from "react-toastify";

export default function InputPhone({ register, errors, ...props }) {
    toast(errors[register.name]?.message);
    return (
        <div className={s.wrap}>
            <input {...register} {...props} className={s.input} />
        </div>
    );
}
