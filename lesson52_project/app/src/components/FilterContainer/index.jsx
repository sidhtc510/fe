import React, { useEffect } from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../UI/Checkbox";
import {
    priceAction,
    rateAction,
    searchAction,
    sortAction,
} from "../../store/slice/productsSlice";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function FilterContainer() {
    const dispatch = useDispatch();
    const { list } = useSelector(({ products }) => products);

    const [price, setPrice] = useLocalStorage("priceFilter", {
        min: 0,
        max: Infinity,
    });
    
    const [rateFilter, setRateFilter] = useLocalStorage("rateFilter", false);
    const [searchValue, setSearchValue] = useLocalStorage("searchValue", "");

    const sortHandle = (e) => {
        dispatch(sortAction(e.target.value));
    };

    const clearFilters = () => {
        setRateFilter(false);
        setSearchValue("");
        setPrice({
            min: 0,
            max: Infinity,
        });
    };

    useEffect(() => {
        price.max = price.max ?? Infinity;
        dispatch(priceAction(price));
    }, [dispatch, price, list]);

    useEffect(() => {
        dispatch(rateAction(rateFilter));
    }, [dispatch, rateFilter, list]);

    useEffect(() => {
        dispatch(searchAction(searchValue));
    }, [dispatch, searchValue, list]);

    return (
        <div className={s.container}>
            <input
                value={searchValue}
                type="text"
                onChange={({ target }) => setSearchValue(target.value)}
                placeholder="search products"
            />

            <select name="sorting" id="" onChange={sortHandle}>
                <option selected disabled hidden>
                    Sorting
                </option>
                <option value="price">Price</option>
                <option value="title">Title</option>
                <option value="rating">Rating</option>
            </select>

            <div className="sortPrice">
                <input
                    type="number"
                    name="minPrice"
                    placeholder="min price"
                    value={price.min === 0 ? "" : price.min}
                    onChange={(e) =>
                        setPrice({ ...price, min: +e.target.value })
                    }
                />
                <input
                    type="number"
                    name="maxPrice"
                    placeholder="max price"
                    value={price.max ?? Infinity}
                    onChange={(e) =>
                        setPrice({
                            ...price,
                            max: +(e.target.value || Infinity),
                        })
                    }
                />
            </div>

            <button onClick={clearFilters}>ClearFilter</button>

            <div>
                <Checkbox
                    checked={rateFilter}
                    label={"Customers choice"}
                    size="size_M"
                    onChange={({ target }) => setRateFilter(target.checked)}
                    // onChange={rateHandler}
                />

                {/* <label htmlFor="rating">
                    Customers choice
                    <input
                        type="checkbox"
                        name="rating"
                        id="rating"
                        onChange={rateHandler}
                    />
                </label> */}
            </div>
        </div>
    );
}
