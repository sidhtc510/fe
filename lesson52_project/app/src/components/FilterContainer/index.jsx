import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux"; 
import Checkbox from "../UI/Checkbox";
import { priceAction, rateAction, searchAction, sortAction } from "../../store/slice/productsSlice";

export default function FilterContainer() {
    const dispatch = useDispatch();

    const searchHandler = ({ target }) => {
        dispatch(searchAction(target.value));
    };

    const sortHandle = (e) => {
        dispatch(sortAction(e.target.value));
    };

    const [price, setPrice] = useState({ min: 0, max: Infinity });

    const rateHandler = (e) => {
        dispatch(rateAction(e.target.checked));
    };

    useEffect(() => {
        dispatch(priceAction(price));
    }, [dispatch, price]);

    return (
        <div className={s.container}>
            <input
                type="text"
                onChange={searchHandler}
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
                    onChange={(e) =>
                        setPrice({ ...price, min: +e.target.value })
                    }
                />
                <input
                    type="number"
                    name="maxPrice"
                    placeholder="max price"
                    onChange={(e) =>
                        setPrice({
                            ...price,
                            max: +(e.target.value || Infinity),
                        })
                    }
                />
            </div>

            <div>
                <Checkbox
                    label={"Customers choice"}
                    size="size_M"
                    onChange={rateHandler}
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
