import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export default function Header() {
  const { cart } = useSelector((state) => state);

  const countProductsInCart = cart.reduce((acc, el) => acc + el.count, null);

  return (
    <header className={s.wrapper}>
      <div>
        <p>Amazon na minimalkah</p>
      </div>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        <li>Category 4</li>
      </ul>

      <div className={s.cart}>
        {countProductsInCart && (
          <div className={s.countWrapper}>
            <p>{+countProductsInCart}</p>
          </div>
)}
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  );
}
