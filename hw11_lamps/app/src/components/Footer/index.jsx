import React from "react";
import s from './FooterStyle.module.css'

export default function Footer() {
  return (
    <div>
      <footer>
        <p className={s.footer_p}>
          тут могли бы быть иконки соцсетей, но я обленился!
        </p>
      </footer>
    </div>
  );
}
