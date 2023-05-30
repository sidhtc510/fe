import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";

export default function GoodsWrapper() {
  const { goods, priceRange } = useSelector((state) => state);

  const filteredGoods =
    priceRange.minPrice === 0 && priceRange.maxPrice === 0
      ? goods
      : goods.filter(
          (item) =>
            item.price >= priceRange.minPrice &&
            item.price <= priceRange.maxPrice
        );

  return (
    <div className="goods_wrapper">
      {filteredGoods.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
}
