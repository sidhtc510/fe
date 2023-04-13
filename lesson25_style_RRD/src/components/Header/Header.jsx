import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={[s.topnav, "topnav"].join(" ")}>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}
