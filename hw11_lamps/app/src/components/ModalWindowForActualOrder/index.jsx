import React from "react";
import s from "./style.module.css";

export default function ModalWindowForActualOrder() {
  return (
    <>
      <div className={s.modalBackground}>
        <div className={s.modalWrap}>
          <button className={s.closeBtn} id="closeModal">
            X
          </button>
          <p>content</p>
        </div>
      </div>
    </>
  );
}
