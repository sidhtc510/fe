import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../store/reducers/goodsReducer";
import { Context } from "../../context";
import Checkbox from "../UI/Checkbox";

export default function ModalAddProduct() {
    const { modalActive, setModalActive, setNotification } =
        useContext(Context);

    const [isChecked, setIsChecked] = useState(true); // checkbox state

    const dispatch = useDispatch();

    const handler = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            product: e.target.title.value,
            price: +e.target.price.value,
            in_stock: isChecked,
            image: false,
        };
        dispatch(addProductAction(newProduct));

        setNotification({ state: true, content: `Product added` });
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
                    {/* <label htmlFor="available">Available</label>
           <input
            type="checkbox"
            id="available"
            name="in_stock"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          /> */}
                    <Checkbox
                        checked={isChecked}
                        name="in_stock"
                        label="Available"
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <input
                        type="submit"
                        value="Add product"
                        onClick={() => setModalActive(false)}
                    />
                </form>
            </div>
        </div>
    );
}
