import React from "react";
import CreatorsItem from "../CreatorsItem";
import s from "./s.module.css";

export default function CreatorsList() {
    const creators = [
        { id: 1, name: "Jack Smith", price: "8.123.000 ETH" },
        { id: 2, name: "John Doe", price: "5.000.000 ETH" },
        { id: 3, name: "Jane Johnson", price: "3.500.000 ETH" },
        { id: 4, name: "Alex Brown", price: "6.000.000 ETH" },
        { id: 5, name: "Emily Wilson", price: "4.200.000 ETH" },
        { id: 6, name: "Michael Davis", price: "7.300.000 ETH" },
        { id: 7, name: "Sarah Taylor", price: "2.800.000 ETH" },
        { id: 8, name: "Daniel Clark", price: "9.000.000 ETH" },
        { id: 9, name: "Olivia Anderson", price: "5.200.000 ETH" },
    ];

    return (
        <div className={s.list}>
            {creators.map((el) => (
                <CreatorsItem {...el} key={el} />
            ))}
        </div>
    );
}
