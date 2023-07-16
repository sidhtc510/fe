import React, { useState } from "react";
import { PiEyeClosedThin, PiEyeThin } from "react-icons/pi";
import s from "./s.module.css";

export const Input = () => {
    const [showContent, setShowContent] = useState(false);

    const type = showContent ? "text" : "password";
    const styleBtn = showContent ? { color: "red" } : { color: "gray" };
    const eye = showContent ? <PiEyeThin /> : <PiEyeClosedThin />;
    // props.className = [className, s.input_wrap].join(" ");

    return (
        <div className={s.input_wrap}>
            <input type={type} className={s.input} />
            <p
                className={s.btn}
                style={styleBtn}
                onClick={() => setShowContent(!showContent)}
            >
                {eye}
            </p>
        </div>
    );
};
