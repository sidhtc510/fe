import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import {
    searchProductsAction,
    sortProductsAction,
    priceProductsAction,
    rateProductsAction,
} from "../../store/reducers/productsReducer";
import Checkbox from "../UI/Checkbox";

export default function FilterContainer() {
    const dispatch = useDispatch();

    const searchHandler = ({ target }) => {
        dispatch(searchProductsAction(target.value));
    };

    const sortHandle = (e) => {
        dispatch(sortProductsAction(e.target.value));
    };

    const [price, setPrice] = useState({ min: 0, max: Infinity });

    const rateHandler = (e) => {
        dispatch(rateProductsAction(e.target.checked))
        // console.log(e.target.checked);
    };

    useEffect(() => {
        dispatch(priceProductsAction(price));
    }, [price]);

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
                <Checkbox label={'Customers choice'}  onChange={rateHandler}/>
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
