import React, { useContext } from "react";
import { Context } from "../../../context";
import { useSelector } from "react-redux";

export default function ShowAmount() {
  const { setNotification } = useContext(Context);

  const goods = useSelector((state) => state.goods);


  return (
    <div>
      <button
        className="amount"
        onClick={() =>
          setNotification({
            state: true,
            content: `Amount ${goods.reduce((acc, el) => acc + el.price, 0)}`,
          })
        }
      >
        Show Amount
      </button>
    </div>
  );
}
