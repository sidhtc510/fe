import React from "react";
import { useDispatch } from "react-redux";
import { removeAction } from "../../store/itemReducer";


export default function Item({ id, title, price }) {
const dispatch = useDispatch()



  return (
    <div className="item">
      <div className="closeBtn" onClick={()=>dispatch(removeAction(id))}>
        X
      </div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}
