import React, { useContext } from "react";
import { Context } from "../../context";

export default function AddProduct() {
  const { modalIsActive, addProductModalIsActive } = useContext(Context);

  return (
    <div
      onClick={modalIsActive}
      className={
        addProductModalIsActive
          ? "modalBackground modalActive"
          : "modalBackground"
      }
    >
      <div className="modalWrap" onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" id="closeModal" onClick={modalIsActive}>
          X
        </button>
        <h3>Add product</h3>

        <form id="modalForm">
          <label htmlFor="title">Product title</label>
          <input type="text" id="title" required />
          <label htmlFor="price">Product price</label>
          <input type="number" id="price" required />
          <label htmlFor="available">Available</label>
          <input type="checkbox" id="available" defaultChecked /> <br />
          <br />
          <input type="submit" value="Add product" />
        </form>
      </div>
    </div>
  );
}
