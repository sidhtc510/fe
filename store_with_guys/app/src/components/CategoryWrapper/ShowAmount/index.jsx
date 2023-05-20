import React, { useContext } from "react";
import { Context } from "../../../context";
import { useSelector } from "react-redux";

export default function ShowAmount() {
  const { setNotification } = useContext(Context);
  const goodsPriceAmount = useSelector((state) => state.goods).reduce(
    (acc, el) => acc + el.price,
    0
  );

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
