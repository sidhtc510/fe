import React from "react";
import { useDispatch } from "react-redux";

export default function AddPostForm() {
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    const { title, description } = event.target;
    const post = {
      title: title.value,
      description: description.value,
      like: false,
      comments: [],
    };
    console.log(post);
    dispatch({ type: "ADD_POST", payload: post });

    event.target.reset();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Description" name="description" />
      <button>Add post</button>
    </form>
  );
}
