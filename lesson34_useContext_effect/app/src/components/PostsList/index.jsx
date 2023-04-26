import React, { useEffect, useState } from "react";
import PostItem from "../PostItem";

export default function PostsList() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await resp.json();
      setPost(data);
    })();
  }, []);

  return (
    <div>
      {post.map((el) => (
        <PostItem {...el} key={el.id} />
      ))}
    </div>
  );
}
