import { useSelector } from "react-redux";
import s from "./style.module.css";

function ProductInCart({ id, product, price, image, count }) {
    const defaultImg = !image ? "./images/noImage.webp" : "./images/" + image;
    return (
        <div className={s.product}>
            <h2>{product}</h2>
            <div>
                <img src={defaultImg} />
            </div>
            <span className={s.priceWrap}>
                <p>Price</p>
                <h3>{price}$</h3>
            </span>
            <div>
                <button>-</button>
                <input type="number" defaultValue={count} />
                <button>+</button>
            </div>
            <span className={s.amountWrap}>
                <p>Amount</p>
                <h3>{price * count}$</h3>
            </span>
        </div>
    );
}

export function Cart() {
    const { cart, goods } = useSelector((state) => state);

    const goodsInTheCart = cart.map((item) => {
        const product = goods.find((el) => el.id === item.id);
        return { ...item, ...product };
    });

    return (
        <div className={s.productsWrapper}>
            {goodsInTheCart.map((data) => (
                <ProductInCart {...data} key={data.id} />
            ))}
        </div>
    );
}
