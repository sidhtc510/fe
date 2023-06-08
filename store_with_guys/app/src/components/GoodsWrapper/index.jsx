import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { filterAndSearchHandler } from "../../store/reducers/goodsReducer";
import { useEffect } from "react";
import { fetchProducts } from "../../store/asyncAtions/fetchProducts";

export default function GoodsWrapper() {
    const { goods, priceRange, search } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts);
    }, [dispatch]);

    const filteredGoods = filterAndSearchHandler(goods, priceRange, search);

    return (
        <div className="goods_wrapper">
            {filteredGoods.map((item) => (
                <ProductItem key={item.id} {...item} />
            ))}
        </div>
    );
}
