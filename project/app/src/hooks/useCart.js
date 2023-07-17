import { useSelector } from "react-redux";

export function useCart() {
    const cart = useSelector((state) => state.cart.list);
    const { list } = useSelector(({ products }) => products);
console.log(cart);
//     const prdcts = useSelector((state) => state.products);
// console.log("prdcts", prdcts);

    const result = cart.map((item) => {
        const product = list.find(({ id }) => id === item.id);
        return { ...item, ...product };
    });

    return result;
}
