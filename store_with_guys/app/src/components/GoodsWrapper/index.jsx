import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { goodsHandler } from "../../store/reducers/goodsReducer";

export default function GoodsWrapper() {
      const { goods, priceRange } = useSelector((state) => state);

      const filteredGoods = goodsHandler(goods, priceRange);

      return (
            <div className="goods_wrapper">
                  {filteredGoods.map((item) => (
                        <ProductItem key={item.id} {...item} />
                  ))}
            </div>
      );
}
