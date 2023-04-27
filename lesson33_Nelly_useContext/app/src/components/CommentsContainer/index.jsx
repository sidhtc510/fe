import React, { useContext } from "react";
import Comment from "../Comment";
import s from "./style.module.css";

export default function CommentsContainer({ comments, post_id }) {
  return (
    <div className={s.commentContainer}>
      {comments.map((el) => (
        <Comment key={el.id} {...el} post_id={post_id} />
      ))}
    </div>
  );
}
