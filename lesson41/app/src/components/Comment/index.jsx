import React from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";

export default function Comment({ id, comment, post_id }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() =>
        dispatch({
          type: "DELETE_COMMENT",
          payload: { comment_id: id, post_id },
        })
      }
      className={s.comment_item}
    >
      {comment}
    </div>
  );
}
