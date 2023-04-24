import React, { useContext } from "react";
import s from "./index.module.css";
import { Context } from "../../context";
import CommentsContainer from "../CommentsContainer";

export default function Post({ id, title, description, like, comments }) {
  const { switchLike, addComment, delPost } = useContext(Context);

  const like_text = like ? "liked" : "like?";

  const like_style = {
    backgroundColor: like ? "darkblue" : "azure",
    color: like ? "white" : "black",
  };

  return (
    <div className={s.post_item}>
      <div className={s.delbtn} onClick={() => delPost(id)}>
        X
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div
        className={s.likeBtn}
        onClick={() => switchLike(id)}
        style={like_style}
      >
        {like_text}
      </div>
      <CommentsContainer comments={comments} />
      <form onSubmit={addComment}>
        <input type="text" name="commentVal" placeholder="comment" />
        <input type="hidden" name="id" value={id} />
        <button>Add comment</button>
      </form>
    </div>
  );
}
