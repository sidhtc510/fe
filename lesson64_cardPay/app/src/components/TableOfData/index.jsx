import React from "react";
import TRComponent from "./TRComponent";
import s from "./s.module.css";
import Search from "../Search";
import TypeOfCardSelect from "../TypeOfCardSelect";
import { useDispatch } from "react-redux";
import { typeOfCardAction } from "../../store/slice/dataSlice";

export default function TableOfData({ data }) {
    const dispatch = useDispatch();

    const handle = (e) => {
        dispatch(typeOfCardAction(e.target.value));
    };

const options_obj = [
    {id:1, value: "visa"},
    {id:2, value: "mc", label: "Master Card"},
]

console.log(data);

    return (
        <div className={s.wrap}>
            <div className={s.filterWrapper}>
            <Search />
            <TypeOfCardSelect options_data={options_obj} onChange={handle}/>
            </div>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Card Number</th>
                        <th>Data Expire</th>
                        <th>Code CVC/CVV</th>
                    </tr>
                </thead>

                {data.list.filter((el) => Object.values(el.show).every(item=>item)).map((el) => (
                        <TRComponent key={el.id} {...el} />
                    ))}
            </table>
        </div>
    );
}
