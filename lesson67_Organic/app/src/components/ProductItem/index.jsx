import React from "react";
import s from "./s.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductItem({ id, title, img, price, new_price, mark, type }) {
    return (
        <Link to={`/product/${id}`} className={s.productItem_item}>
            <p className={s.type}>{type}</p>
            <img src={img} alt={title} />
            <p className={s.title}>{title}</p>
            <div>
                <div>
                    <p>{new_price === null ? "" : price.toFixed(2)}</p>
                    <p>{(new_price !== null ? new_price : price).toFixed(2)}</p>

                    {/* <p className={new_price ? s.price : ""}>{price.toFixed(2)}</p>
                    {new_price && <p>{new_price.toFixed(2)}</p>} */}
                </div>

                <div className={s.stars}>
                    {[...new Array(5)].map((_, index) =>
                        // <AiFillStar key={index} className={index + 1 <= mark ? s.star : s.no_star} />
                        index + 1 <= mark ? <AiFillStar className={s.star} /> : <AiOutlineStar className={s.star} />
                    )}
                </div>
            </div>
        </Link>
    );
}
