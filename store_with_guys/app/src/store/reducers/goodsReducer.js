// import { goods } from "../../data/data";

const INITIAL_LOADING = "[GOODS] INITIAL_LOADING";
const DELETE = "[GOODS] DELETE";
const REMOVE_PRODUCTS = "[GOODS] REMOVE_PRODUCTS";
const SORTPRICE_ASC = "[GOODS] SORTPRICE_ASC";
const SORTPRICE_DESC = "[GOODS] SORTPRICE_DESC";
const ADD_PRODUCT = "[GOODS] ADD_PRODUCT";

export const initialLoadingAction = (payload) => ({
    type: INITIAL_LOADING,
    payload,
});
export const deleteAction = (payload) => ({ type: DELETE, payload });
export const removeProductsAction = () => ({ type: REMOVE_PRODUCTS });
export const sortPriceAscAction = () => ({ type: SORTPRICE_ASC });
export const sortPriceDescAction = () => ({ type: SORTPRICE_DESC });
export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });

export const goodsReducer = (state = [], action) => {
    switch (action.type) {
        case INITIAL_LOADING:
            return action.payload
                .filter((el) => el.approx_price_EUR !== "") // в апишке есть пустые цены. убрал их
                .map((el) => {
                    return {
                        // ...el,
                        id: el.id,
                        product: `${el.brand} ${el.model}`,
                        in_stock: true,
                        image: el.img_url,
                        price: parseInt(el.approx_price_EUR),
                    };
                });

        case DELETE:
            return [...state.filter((item) => item.id !== action.payload)];
        case REMOVE_PRODUCTS:
            return [];
        case SORTPRICE_ASC:
            return [...state].sort((x, y) => x.price - y.price);
        case SORTPRICE_DESC:
            return [...state].sort((x, y) => y.price - x.price);
        case ADD_PRODUCT:
            return [action.payload, ...state];
        default:
            return state;
    }
};

//функция которая принимает список товаров и диапазон цен
//нужна для фильтрации по цене
// она отдельная поскольку не меняеет стейт с товарами
export const filterAndSearchHandler = (goods, priceRange, search) => {
    // Вариант обработки без условия in stock
    // const filteredGoods =
    //       priceRange.minPrice === 0 && priceRange.maxPrice === 0
    //             ? goods
    //             : goods.filter(
    //                     (item) =>
    //                           item.price >= priceRange.minPrice &&
    //                           item.price <= priceRange.maxPrice
    //               );
    // return filteredGoods;

    // вариант обработки с in stock
    // if (priceRange.minPrice === 0 && priceRange.maxPrice === 0) {
    //       const filteredGoods = goods;
    //       return filteredGoods;
    // } else {
    //       if (!priceRange.isInStock) {
    //             const filteredGoods = goods.filter(
    //                   (item) =>
    //                         item.price >= priceRange.minPrice &&
    //                         item.price <= priceRange.maxPrice
    //             );
    //             return filteredGoods;
    //       } else {
    //             const filteredGoods = goods.filter(
    //                   (item) =>
    //                         item.price >= priceRange.minPrice &&
    //                         item.price <= priceRange.maxPrice &&
    //                         item.in_stock === priceRange.isInStock
    //             );
    //             return filteredGoods;
    //       }
    // }

    // попросил  улучшить предидущую обработку
    //     if (priceRange.minPrice === 0 && priceRange.maxPrice === 0 && !search) {
    //         return goods;
    //     } else {
    //         const filteredGoods = goods.filter((item) => {
    //             const isInRange =
    //                 item.price >= priceRange.minPrice &&
    //                 item.price <= priceRange.maxPrice;

    //             const isInStock = item.in_stock === priceRange.isInStock;

    //             return !priceRange.isInStock ? isInRange : isInRange && isInStock;
    //         });

    //         return filteredGoods;
    //     }

    if (priceRange.minPrice === 0 && priceRange.maxPrice === 0 && !search) {
        return goods;
    } else {
        if (priceRange.maxPrice === 0) {
            priceRange.maxPrice = Infinity;
        }
        const filteredGoods = goods.filter((item) => {
            const isInRange =
                item.price >= priceRange.minPrice &&
                item.price <= priceRange.maxPrice;

            const isInStock = item.in_stock === priceRange.isInStock;

            const searched = item.product
                .toLowerCase()
                .includes(search.toLowerCase());

            return !priceRange.isInStock
                ? isInRange && searched
                : isInRange && isInStock && searched;
        });

        return filteredGoods;
    }
};
