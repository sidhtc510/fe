import React, { useContext } from "react";
import Post from "../Post";
import { Context } from "../../context";

export default function PostsContainer() {
  const { posts } = useContext(Context);

  return (
    <div>
      {posts.map((el) => (
        <Post key={el.id} {...el} />
      ))}
    </div>
  );
}
