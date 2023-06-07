import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { cart } = useSelector((state) => state);

  const countProductsInCart = cart.reduce((acc, el) => acc + el.count, null);

  return (
    <header className={s.wrapper}>
      <div>
       
      {/* <Link to="/" className={s.logo}><p>Amazon na minimalkah</p></Link>  */}
      <a href="/" className={s.logo}><p>Amazon na minimalkah (refresh)</p></a> 
      </div>
      <ul>
      <li>   <Link to="/" ><p>Main Page</p></Link> </li>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        <li>Category 4</li>
      </ul>

      <Link to="/cart" className={s.cart}>
        <div className={s.cart}>
          {countProductsInCart && (
            <div className={s.countWrapper}>
              <p>{+countProductsInCart}</p>
            </div>
          )}
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </Link>
    </header>
  );
}
