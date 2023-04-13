import React from "react";
import s from "./Header.module.css";
import logo from '../../data/images/logo.png'
import vk from '../../data/images/vk.png'
import yt from '../../data/images/youtube.png'
import fb from '../../data/images/fb.png'
import inst from '../../data/images/inst.png'



export default function Header() {
  return (
    <header>
      <div className={s.headerWrapper}>
        <img src={logo} alt="" />
        <div className={s.headerIcons}>
          <img src={vk} alt="" />
          <img src={yt} alt="" />
          <img src={fb} alt="" />
          <img src={inst} alt="" />
        </div>
      </div>
    </header>
  );
}
