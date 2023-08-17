import React from "react";
import s from "./s.module.css";
import Container from "../UI/Container";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Product({ product }) {
    // const { id, img, mark, new_price, price, title, type } = product;
    return (
        <>
            {product && (
                <Container>
                    <div className={s.Product_wrapper}>
                        <div className={s.productImgWrapper}>
                            <img src={product.img} alt="" />
                            <p>{product.type}</p>
                        </div>

                        <div className={s.productInfoWrapper}>
                            <h3>{product.title}</h3>
                            <div className={s.stars}>
                                {[...new Array(5)].map((_, index) => (index + 1 <= product.mark ? <AiFillStar className={s.star} /> : <AiOutlineStar className={s.star} />))}
                            </div>
                            <div className={s.priceBlock}>
                                <p className={product.new_price ? s.price : ""}>{product.price.toFixed(2)}</p>
                                {product.new_price && <p>{product.new_price.toFixed(2)}</p>}
                            </div>
                            <p className={s.description}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae nihil odio assumenda rem dolor, tempore sint iure incidunt! Natus adipisci
                                corrupti esse maxime obcaecati aut ratione non. Perspiciatis similique in eligendi minima hic recusandae molestiae iusto maiores repudiandae
                                cupiditate?
                            </p>
                        </div>
                    </div>
                </Container>
            )}
        </>
    );
}
