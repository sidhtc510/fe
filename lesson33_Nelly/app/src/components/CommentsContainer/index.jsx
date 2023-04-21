import React, { useContext } from "react";
import { Context } from "../../context";
import Comment from "../Comment";

export default function CommentsContainer({comments}) {
  const { posts } = useContext(Context);

  return (
    <div>
       
        {comments.map((el)=><Comment key={el.id} {...el} />)}
      
    </div>
  );
}
