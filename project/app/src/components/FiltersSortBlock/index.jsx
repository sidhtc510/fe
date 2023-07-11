import React, { useEffect, useState } from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { priceAction, rateAction, sortAction } from "../../store/slice/productSlice";

export default function FiltersSortBlock({ products }) {
    const dispatch = useDispatch();
    
    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: Infinity,
    });
    const [rateFilter, setRateFilter] = useState(false);

    const sortHandle = (e) => {
        dispatch(sortAction(e.target.value));
    };


    useEffect(() => {
        dispatch(priceAction(priceRange));
    }, [dispatch, priceRange]);

    useEffect(() => {
        dispatch(rateAction(rateFilter));
    }, [dispatch, rateFilter]);
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
                <input
                    type="checkbox"
                    name="discounted"
                    checked={rateFilter}
                    onChange={({ target }) => setRateFilter(target.checked)}
                />
            </div>

            <div className={s.sorting} >
                <p>Sorted</p>
                <select name="sorting" onChange={sortHandle}>
                <option selected disabled hidden>
                    Sorting
                </option>
                <option value="priceAsc">Price 0 - 1</option>
                <option value="priceDesc">Price 1 - 0</option>
                <option value="titleAtoZ">Title A to Z</option>
                <option value="titleZtoA">Title Z to A</option>
                </select>
            </div>
        </div>
    );
}
