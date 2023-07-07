import React from "react";
import s from "./s.module.css";

export default function Wrapper({ children, ...props }) {
    return (
        <div {...props} className={[s.wrapper]}>
            {children}
        </div>
    );
}
