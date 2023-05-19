import React from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../store/reducers/goodsReducer";

export default function ModalAddProduct({ modalActive, setModalActive }) {
  const dispatch = useDispatch();

  const handler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      product: e.target.title.value,
      price: e.target.price.value,
      in_stock: e.target.in_stock.value,
      image: false,
    };
    dispatch(addProductAction(newProduct));
    e.target.reset();
  };

  return (
    <div
      className={
        modalActive ? "modalBackground modalActive" : "modalBackground"
      }
      onClick={() => setModalActive(false)}
    >
      <div className="modalWrap" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setModalActive(false)}
          className="closeBtn"
          id="closeModal"
        >
          X
        </button>
        <h3>Add product</h3>
        <form onSubmit={handler} action="" id="modalForm">
          <label htmlFor="title">Product title</label>
          <input type="text" id="title" name="title" required="" />
          <label htmlFor="price">Product price</label>
          <input type="number" id="price" name="price" required="" />
          <label htmlFor="available">Available</label>
          <input
            type="checkbox"
            id="available"
            name="in_stock"
            defaultChecked=""
          />{" "}
          <br />
          <br />
          <input type="submit" value="Add product" onClick={() => setModalActive(false)}/>
        </form>
      </div>
    </div>
  );
}
