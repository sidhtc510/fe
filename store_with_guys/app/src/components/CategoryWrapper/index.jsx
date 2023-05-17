import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { priceRangeAction } from "../../store/reducers/goodsReducer";
import { Context } from "../../context";

export default function CategoryWrapper() {
  const { modalIsActive } = useContext(Context);

  const dispatch = useDispatch();
  const priceRangeSelector = useSelector((state) => state.goods);

  const minPrice = Math.min(...priceRangeSelector.map((item) => item.price));
  const maxPrice = Math.max(...priceRangeSelector.map((item) => item.price));

  const submitFilterPrice = (e) => {
    e.preventDefault();
    const priceRange = {
      minPrice: e.target.minPrice.value,
      maxPrice: e.target.maxPrice.value,
    };
    dispatch(priceRangeAction(priceRange));
  };

  return (
    <div className="category_wrap">
      <button className="buttonShowModal" onClick={modalIsActive}>
        ADD PRODUCT
      </button>

      <form id="filterForm" onSubmit={submitFilterPrice}>
        <div>
          <label htmlFor="minDigit">min</label>
          <input
            type="number"
            id="minDigit"
            name="minPrice"
            defaultValue={minPrice}
          />
          <br />
          <label htmlFor="maxDigit">max</label>
          <input
            type="number"
            id="maxDigit"
            name="maxPrice"
            defaultValue={maxPrice}
          />
        </div>
        <input type="submit" value="Apply" />
      </form>

      <button className="removeAllGoods">Remove all products</button>

      <div className="orderBy">
        <a href="#" className="asc">
          цена по возрастанию
        </a>
        <a href="#" className="desc">
          цена по убыванию
        </a>
      </div>

      <div>
        <button className="amount">Show Amount</button>
      </div>
    </div>
  );
}
