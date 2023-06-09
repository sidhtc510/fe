import s from "./s.module.css";
import React, { forwardRef } from "react";

export const FormInput = forwardRef((props, ref) => {
    return <input className={s.input} {...props} ref={ref}/>;
});
