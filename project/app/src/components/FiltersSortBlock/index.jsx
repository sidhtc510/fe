import React, { useEffect, useState } from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { priceAction } from "../../store/slice/productSlice";

export default function FiltersSortBlock({ products }) {


    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: Infinity,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(priceAction(priceRange));
    }, [dispatch, priceRange]);
    // минимальное и максимальное значения для подстановки в инпуты START
    // const findMinMaxPrice = (products) => {
    //     let minPrice = Infinity;
    //     let maxPrice = -Infinity;

    //     for (const el of products) {
    //         const price = el.discont_price ?? el.price;
    //         minPrice = Math.min(minPrice, price);
    //         maxPrice = Math.max(maxPrice, price);
    //     }

    //     return { minPrice, maxPrice };
    // };

    // const { minPrice, maxPrice } = findMinMaxPrice(products);
    // при отрисовке компонента сразу в инпуты устанавливаются инфинити
    // минимальное и максимальное значения для подстановки в инпуты END

    return (
        <div className={s.filtersSortWrapper}>
            <div className={s.priceSort}>
                <p>Price</p>
                <input
                    type="text"
                    placeholder="from"
                    name="minPrice"
                    // defaultValue={minPrice ?? ""}
                    onChange={(e) =>
                        setPriceRange({ ...priceRange, min: +e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="to"
                    name="maxPrice"
                    onChange={(e) =>
                        setPriceRange({
                            ...priceRange,
                            max: +e.target.value || Infinity,
                        })
                    }
                />
            </div>

            <div className={s.discounted}>
                <p>Discounted items</p>
                <input type="checkbox" name="discounted" />
            </div>

            <div className={s.sorting}>
                <p>Sorted</p>
                <select name="sorting">
                    <option value=""></option>
                </select>
            </div>
        </div>
    );
}
