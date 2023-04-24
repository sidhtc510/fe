import React, { useContext } from "react";
import s from "./style.module.css";
import { Context } from "../../context";

export default function Modal() {
  const { showModalState, setShowModalState, humanInModal } = useContext(Context);

const {name, surname, age} = humanInModal
  return (
    <div className={[s.overlay, showModalState ? s.show : ""].join(" ")} >
      <div className={s.modal}>
        <h2>{name} {surname}</h2>
        <h3>Age: {age}</h3>
      <button onClick={(e) => {
        setShowModalState(!showModalState);
      }} className={s.closeBtn}>X</button>

      </div>

    </div>
  );
}
