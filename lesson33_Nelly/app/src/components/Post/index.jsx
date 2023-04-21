import React, { useContext } from "react";
import s from "./index.module.css";
import { Context } from "../../context";
import CommentsContainer from "../CommentsContainer";

export default function Post({ id, title, description, like, comments }) {
  const { switchLike } = useContext(Context);

  const like_text = like ? "liked" : "like?";

  const like_style = {
    backgroundColor: like ? "darkblue" : "azure",
    color: like ? "white" : "black",
  };

  return (
    <div className={s.post_item}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={s.likeBtn} onClick={() => switchLike(id)} style={like_style}>
        {like_text}
      </div>
      <CommentsContainer comments={comments } />
    </div>
  );
}
