import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../../hooks/useCart";
import Container from "../UI/Container";
import s from "./s.module.css";
import CartAmount from "./CartAmount";

export default function CartContainer() {
    // const cart = useSelector((state) => state.cart.list);
    // const products = useSelector((state) => state.products);

    // const result = cart.map((item) => {
    //     const product = products.list.find(({ id }) => id === item.id);
    //     return { ...item, ...product };
    // });

    // const products = useSelector(({products}) => products.list
    //     .filter(({id}) => list.map(({id}) => id).includes(id)) // оставляем только те продукты, которые есть в корзине
    //     .map(item => ({...item, ...list.find(({id}) => id === item.id)})) // добавляем к продукту кол-во в заказе.
    //   )

    const productsInCart = useCart();

    return (
        <Container>
            <div className={s.CartContainer_containerStyle}>
                <div className={s.CartContainer_wrapper}>
                    {productsInCart.map((el) => (
                        <CartItem key={el.id} {...el} />
                    ))}
                </div>
                <CartAmount productsInCart={productsInCart} />
            </div>
        </Container>
    );
}
