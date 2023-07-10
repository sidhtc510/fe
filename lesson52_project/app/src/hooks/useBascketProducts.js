import { useSelector } from "react-redux";

export function useBascketProducts() {
    const bascket = useSelector((state) => state.bascket.list);

    const { list } = useSelector(({ products }) => products);

    const result = bascket.map((item) => {
        const product = list.find(({ id }) => id === item.id);
        return { ...item, ...product };
    });

    return result;
}

    // const bascket = useSelector((state) => state.bascket.list);

    // const { list } = useSelector(({ products }) => products);

    // const result = bascket.map((item) => {
    //     const product = list.find(({ id }) => id === item.id);
    //     return { ...item, ...product };
    // });
    