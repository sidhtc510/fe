import React from "react";
import s from "./s.module.css";

export default function Field({ errors, name, constraints, register }) {
    return (
        <div>
            <input
                className={errors[name] ? s.error : ""}
                placeholder={name}
                {...register(name, constraints)}
            />
            <p className={s.errorMessage}>{errors[name]?.message}</p>
        </div>
    );
}
