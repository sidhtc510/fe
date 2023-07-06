import React from "react";
import TRComponent from "./TRComponent";
import s from './s.module.css'


export default function TableOfData({ data }) {

    return (
        <div>
            <table className={s.table}>
                <tr>
                    <th>Name</th>
                    <th>Card Number</th>
                    <th>Data Expire</th>
                    <th>Code CVC/CVV</th>
                </tr>

                {data.map((el) => (
                    <TRComponent key={el.id} {...el} />
                ))}
            </table>
        </div>
    );
}
