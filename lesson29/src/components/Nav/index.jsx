import React from "react";
import s from "./index.module.css";

export default function Nav({ menuActive, setMenuActive, color, setColor }) {
  const navClasses = [s.navMenuList, menuActive ? s.active : ""].join(" ");
  const pLogo = [color ? s.pLogo : ""];

  return (
    <div className={s.nav_menu}>
      <p onClick={() => setColor(!color)}>LOGO</p>
      <ul className={navClasses}>
        <li>Main</li>
        <li>About</li>
        <li>Prices</li>
        <li>Account</li>
      </ul>
      <p onClick={() => setMenuActive(!menuActive)}>=</p>
    </div>
  );
}
