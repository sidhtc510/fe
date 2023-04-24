import React, { useContext } from "react";
// import { Context } from "../../context";
import Comment from "../Comment";
import s from './style.module.css'

export default function CommentsContainer({comments}) {
  // const { posts } = useContext(Context);

  return (
    <div className={s.commentContainer}>
       
        {comments.map((el)=><Comment key={el.id} {...el} />)}
      
    </div>
  );
}
