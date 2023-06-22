import React from "react";
import Monkey from "../Monkey";
import s from "./s.module.css";
export default function Monkeys() {
    const data = [
        { id: 1, title: "Crazy Apes", author: "Created by Rick" },
        { id: 2, title: "Crazy Apes", author: "Created by Rick" },
        { id: 3, title: "Crazy Apes", author: "Created by Rick" },
        { id: 4, title: "Crazy Apes", author: "Created by Rick" },
        { id: 5, title: "Crazy Apes", author: "Created by Rick" },
        { id: 6, title: "Crazy Apes", author: "Created by Rick" },
    ];

    return (
        <div className={s.container}>
            {data.map((el) => (
                <Monkey {...el} key={el.id} />
            ))}
        </div>
    );
}
