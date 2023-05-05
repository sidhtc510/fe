import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import CommentsContainer from "../CommentsContainer";

export default function Post({ id, title, description, like, comments }) {
  const dispatch = useDispatch();

  const like_text = like ? "Liked" : "Like?";

  const like_style = {
    backgroundColor: like ? "darkblue" : "azure",
    color: like ? "white" : "black",
  };

  return (
    <div className={s.post_item}>
      <p onClick={()=>dispatch({ type: "REMOVE", payload: id })}>X</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <div
        style={like_style}
        className={s.like_btn}
        onClick={() => dispatch({ type: "CHANGE_LIKE", payload: id })}
      >
        {like_text}
      </div>
      <CommentsContainer comments={comments} post_id={id}/>
    </div>
  );
}
