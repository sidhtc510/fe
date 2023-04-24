import React, { useContext } from "react";
import { Context } from "../../context";

export default function AddForm() {
  const { addPost } = useContext(Context);

  return (
    <form onSubmit={addPost}>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="description" name="description" />
      <button>Add Post</button>
    </form>
  );
}
