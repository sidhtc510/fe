import React, { useContext } from "react";
import { Context } from "../../../context";
import { useSelector } from "react-redux";

export default function ShowAmount() {
  const { setNotification, setNotificationContent } = useContext(Context);
  const goodsPriceAmount = useSelector((state) => state.goods).reduce(
    (acc, el) => acc + el.price,
    0
  );

  const handler = () => {
    setNotificationContent(`Amount ${goodsPriceAmount}`);
    setNotification(true);
  };

  return (
    <div>
      <button className="amount" onClick={handler}>
        Show Amount
      </button>
    </div>
  );
}
