import React, { useContext } from "react";
import { Context } from "../../../context";

export default function AddProductButton() {
  const { setModalActive } = useContext(Context);
  return (
    <button className="buttonShowModal" onClick={() => setModalActive(true)}>
      ADD PRODUCT
    </button>
  );
}
