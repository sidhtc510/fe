import { useSelector } from "react-redux";

export function useCart() {
    const { list } = useSelector(({ products }) => products);
    const cart = useSelector((state) => state.cart.list);

    const result = cart.map((item) => {
        const product = list.find(({ id }) => id === item.id);
        return { ...item, ...product };
    });

    return result;
}
