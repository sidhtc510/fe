import PriceRange from "./PriceRange";
import RemoveProducts from "./RemoveProducts";
import SortPrice from "./SortPrice";
import ShowAmount from "./ShowAmount";
import AddProductButton from "./AddProductButton";
import NightModeSwitcher from "./NightModeSwitcher";
import Search from "./Search";

export default function CategoryWrapper() {
    return (
        <div className="category_wrap">
            <Search />
            <NightModeSwitcher />
            <AddProductButton />
            <PriceRange />
            <RemoveProducts />
            <SortPrice />
            <ShowAmount />
        </div>
    );
}
