import s from "./s.module.css";
import { sortOptions } from "./sortOptions";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { priceAction, rateAction, sortAction } from "../../store/slice/productSlice";
import { VscClose } from "react-icons/vsc";

import MobileFilterButton from "../MobileFilterButton";

export default function FiltersSortBlock({ salesPageFlag }) {
    const dispatch = useDispatch();
    const { list } = useSelector(({ products }) => products);

    const [mobileFilter, setMobileFilter] = useState(false);

    const filters = {
        price: {
            min: 0,
            max: Infinity,
        },
        rate: false,
        sort: false,
    };
    const [filtersState, setFiltersState] = useState(JSON.parse(localStorage.getItem("filtersState")) || filters);

    const minPriceInputRef = useRef(null);
    const maxPriceInputRef = useRef(null);
    const rateInputRef = useRef(null);
    const sortRef = useRef(null);

    const clearFilters = () => {
        minPriceInputRef.current.value = "";
        maxPriceInputRef.current.value = "";
        maxPriceInputRef.current.checked = false;
        sortRef.current.option = "id";
        setFiltersState({ ...filters, sort: "id" });
    };

    // const [filtersState, setFiltersState] = useLocalStorage("filtersState", filters);

    useEffect(() => {
        localStorage.setItem("filtersState", JSON.stringify({ price: filtersState.price, rate: filtersState.rate, sort: filtersState.sort }));
        // setFiltersState({ price: filtersState.price, rate: filtersState.rate, sort: filtersState.sort });
        filtersState.price.max = filtersState.price.max ?? Infinity;
        dispatch(priceAction(filtersState.price));
        dispatch(rateAction(filtersState.rate));
        dispatch(sortAction(filtersState.sort));
    }, [dispatch, filtersState, list]);

    useEffect(() => {
        return () => {
            localStorage.setItem("filtersState", JSON.stringify({ price: filters.price, rate: filters.rate, sort: filters.sort }));
            dispatch(priceAction(filters.price));
            dispatch(rateAction(filters.rate));
            dispatch(sortAction(filters.sort));
            setFiltersState({ ...filters, sort: "id" });
        };
    }, []);
    // минимальное и максимальное значения для подстановки в инпуты START
    ///////////////////////

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

    ///////////////////////
    // минимальное и максимальное значения для подстановки в инпуты END

    return (
        <>
            <div className={s.mobileFilterButton} onClick={() => setMobileFilter(true)}>
                <MobileFilterButton />
            </div>

            <div className={mobileFilter ? [s.filtersSortWrapper, s.active].join(" ") : s.filtersSortWrapper}>
                <p className={mobileFilter ? [s.filtersCloseBtn, s.active].join(" ") : s.filtersCloseBtn} onClick={() => setMobileFilter(false)}>
                    <VscClose />
                </p>
                <div className={s.priceSort}>
                    <p>Price</p>
                    <input
                        ref={minPriceInputRef}
                        type="text"
                        placeholder="from"
                        name="minPrice"
                        defaultValue={filtersState.price.min === 0 ? "" : filtersState.price.min}
                        onChange={(e) => setFiltersState({ ...filtersState, price: { ...filtersState.price, min: +e.target.value } })}
                    />
                    <input
                        ref={maxPriceInputRef}
                        type="text"
                        placeholder="to"
                        name="maxPrice"
                        defaultValue={filtersState.price.max === Infinity ? "" : filtersState.price.max}
                        onChange={(e) => setFiltersState({ ...filtersState, price: { ...filtersState.price, max: +e.target.value || Infinity } })}
                    />
                </div>

                {salesPageFlag ?? (
                    <div className={s.discounted}>
                        <p>Discounted items</p>
                        <input
                            ref={rateInputRef}
                            type="checkbox"
                            name="discounted"
                            checked={filtersState.rate}
                            onChange={({ target }) => setFiltersState({ ...filtersState, rate: target.checked })}
                        />
                    </div>
                )}

                <div className={s.sorting}>
                    <p>Sorted</p>
                    <select ref={sortRef} name="sorting" onChange={({ target }) => setFiltersState({ ...filtersState, sort: target.value })}>
                        {sortOptions.map((el) => (
                            <option selected={el.value === filtersState.sort} value={el.value}>
                                {el.title}
                            </option>
                        ))}
                    </select>
                </div>
                <p className={s.clearFilters} onClick={clearFilters}>
                    Clear filters
                </p>
            </div>
        </>
    );
}
