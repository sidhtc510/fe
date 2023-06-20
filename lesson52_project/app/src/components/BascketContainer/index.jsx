import React from "react";
import { useSelector } from "react-redux";
import BascketItem from "../BascketItem";
import s from "./style.module.css";
import BascketCalculation from "../BascketCalculation";
import { useBascketProducts } from "../../hooks/useBascketProducts";
import { useLocalStorage } from "../../hooks/useLocalStorage";


export default function BascketContainer() {
    // const bascket = useSelector((state) => state.bascket.list);

    // const { list } = useSelector(({ products }) => products);

    // const result = bascket.map((item) => {
    //     const product = list.find(({ id }) => id === item.id);
    //     return { ...item, ...product };
    // });
    
    const result = useBascketProducts()

    return (
        <div className={s.container}>
          
            {result.map((item) => (
                <BascketItem key={item.id} {...item} />
            ))}

            {/* <BascketCalculation result={result} /> */}
            <BascketCalculation />
        </div>
    );
}
