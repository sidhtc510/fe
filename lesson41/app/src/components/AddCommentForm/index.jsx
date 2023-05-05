import React from "react";
import { useDispatch } from "react-redux";

export default function AddCommentForm({post_id}) {

const dispatcher = useDispatch()

  const handler = (e) => {
    e.preventDefault();

    const newComment = e.target.comment.value

    dispatcher({ type: "ADD_NEW_COMMENT", payload: {newComment, post_id} });
    e.target.reset();
  };

  return (
    <form onSubmit={handler}>
      <input type="text" name="comment" placeholder="comment" />
      <button>Add</button>
    </form>
  );
}
