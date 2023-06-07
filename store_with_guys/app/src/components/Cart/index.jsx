import { useSelector } from "react-redux";
import s from "./style.module.css";
import ProductInCart from "./ProductInCart";
import InfoInCart from "./InfoInCart";

export function Cart() {
    const { cart, goods } = useSelector((state) => state);

    const goodsInTheCart = cart.map((item) => {
        const product = goods.find((el) => el.id === item.id);
        return { ...item, ...product };
    });

    return (
        <div className={s.cartWrapper}>
            <div className={s.productsWrapper}>
                {goodsInTheCart.map((data) => (
                    <ProductInCart {...data} key={data.id} />
                ))}
            </div>
            <InfoInCart  goodsInTheCart={goodsInTheCart}/>
        </div>
    );
}
