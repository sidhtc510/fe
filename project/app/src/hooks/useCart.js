import { useSelector } from "react-redux";

export function useCart() {
    const products = useSelector(({ products }) => products);
    const cart = useSelector((state) => state.cart.list);
    const result = cart.map((item) => {
        const product = products.list.find(({ id }) => id === item.id);
        return { ...item, ...product };
    });
    // console.log("useCart", result);

    return result;
}
