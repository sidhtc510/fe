import React from "react";
import s from "./s.module.css";

export default function TypeOfCardSelect({
    options_data,
    className,
    ...props
}) {
    props.className = [s.select, className].join(" ");

    return (
        <div>
            <select {...props} name="typeOfCard">
                <option value="all">all</option>
                {options_data.map((el) => {
                    return (
                        <option value={el.value}>{el.label ?? el.value}</option>
                    );
                })}
            </select>
        </div>
    );
}
