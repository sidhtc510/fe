import React, { useContext } from "react";
import { Context } from "../../../context";
import { useSelector } from "react-redux";

export default function ShowAmount() {
  const { setNotification } = useContext(Context);

  const goods = useSelector((state) => state.goods);
  const goodsPriceAmount =
    goods.filteredProducts.length > 0
      ? goods.filteredProducts.reduce((acc, el) => acc + el.price, 0)
      : goods.products.reduce((acc, el) => acc + el.price, 0);

  return (
    <div>
      <button
        className="amount"
        onClick={() =>
          setNotification({
            state: true,
            content: `Amount ${goodsPriceAmount}`,
          })
        }
      >
        Show Amount
      </button>
    </div>
  );
}
