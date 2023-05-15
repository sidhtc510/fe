import React from "react";

export default function CategoryWrapper() {
  return (
    <div className="category_wrap">
      <button className="buttonShowModal">ADD PRODUCT</button>
      <form id="filterForm">
        <div>
          <label htmlFor="minDigit">min</label>
          <input type="number" id="minDigit" />
          <br />
          <label htmlFor="maxDigit">max</label>
          <input type="number" id="maxDigit" />
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
