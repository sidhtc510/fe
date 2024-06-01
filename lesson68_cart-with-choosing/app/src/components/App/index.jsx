import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import ProductsItem from "../ProductsItem";
import s from "./s.module.css";
import { addItemsAction } from "../../store/slices/cartSlice";

function App() {
    const products = useSelector(state => state.products.list);
    const cart = useSelector(state => state.cart.list);
    const dispatch = useDispatch();

    const handler = () => {
        const arr = products.filter((el) => el.isChecked);
        dispatch(addItemsAction(arr));
    };

    return (
        <div className={s.App__wrapper}>
            <div className={s.App__products_wrapper}>
                {products.map((el) => (
                    <ProductsItem key={el.id} {...el} />
                ))}
            </div>

            <button onClick={handler}>Buy Now</button>

            <div className={s.App__products_wrapper}>
                {cart.map((el) => (
                    <ProductsItem key={el.id} {...el} />
                ))}
            </div>
        </div>
    );
}

export default App;
