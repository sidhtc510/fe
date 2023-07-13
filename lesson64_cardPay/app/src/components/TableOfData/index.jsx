import React from "react";
import TRComponent from "./TRComponent";
import s from "./s.module.css";
import Search from "../Search";
import TypeOfCardSelect from "../TypeOfCardSelect";

export default function TableOfData({ data }) {
    return (
        <div className={s.wrap}>
            <Search />
            <TypeOfCardSelect />
            <table className={s.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Card Number</th>
                        <th>Data Expire</th>
                        <th>Code CVC/CVV</th>
                    </tr>
                </thead>

                {data
                    .filter((el) => el.show)
                    .map((el) => (
                        <TRComponent key={el.id} {...el} />
                    ))}
            </table>
        </div>
    );
}
