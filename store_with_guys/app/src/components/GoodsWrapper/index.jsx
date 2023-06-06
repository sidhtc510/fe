import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { filterAndSearchHandler } from "../../store/reducers/goodsReducer";

export default function GoodsWrapper() {
    const { goods, priceRange, search } = useSelector((state) => state);

    const filteredGoods = filterAndSearchHandler(goods, priceRange, search);

    return (
        <div className="goods_wrapper">
            {filteredGoods.map((item) => (
                <ProductItem key={item.id} {...item} />
            ))}
        </div>
    );
}
