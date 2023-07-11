import React from "react";

import s from "./s.module.css";

export default function Field({ className, register, errors, ...props }) {
    
    return (
        <div className={s.fieldWrapper}>
            <input
                {...register}
                className={[className, s.field].join(" ")}
                {...props}
            />
            <p className={s.error_message}>{errors[register.name]?.message}</p>
        </div>
    );
}
