
import PriceRange from "./PriceRange";
import RemoveProducts from "./RemoveProducts";
import SortPrice from "./SortPrice";
import ShowAmount from "./ShowAmount";
import AddProductButton from "./AddProductButton";


export default function CategoryWrapper() {

  return (
    <div className="category_wrap">
      <AddProductButton />
      <PriceRange />
      <RemoveProducts />
      <SortPrice />
      <ShowAmount />
 
    </div>
  );
}
