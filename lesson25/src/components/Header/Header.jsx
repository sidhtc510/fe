import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={s.topnav}>
      <NavLink className={s.active} to="/">
        Home
      </NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}
