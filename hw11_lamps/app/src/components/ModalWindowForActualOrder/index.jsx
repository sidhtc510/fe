import React, { useState } from "react";
import s from "./style.module.css";

export default function ModalWindowForActualOrder({modalState, setModalState}) {

  return (
    <>
        <div className={[s.modalBackground, modalState ? s.showModal : ''].join(" ")}>
          <div className={s.modalWrap}>
            <button onClick={()=>setModalState(false)} className={s.closeBtn} id="closeModal">
              X
            </button>
            <p className="contentInModal"></p>
          </div>
        </div>
    </>
  );
}
