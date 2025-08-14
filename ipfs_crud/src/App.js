import './App.css';
import { useState, useEffect } from "react";
import { createPost, getPosts, deletePost } from "./api";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  async function loadPosts() {
    const data = await getPosts();
    setPosts(data);
  }

  async function addPost() {
    if (!text.trim()) return;
    await createPost({ text, created: new Date().toISOString() });
    setText("");
    loadPosts();
  }

  async function removePost(key) {
    await deletePost(key);
    loadPosts();
  }

  useEffect(() => {
    loadPosts();
  }, []);
console.log('posts', posts)
  return (
    <div style={{ padding: 20 }}>
      <h1>IPFS CRUD (Filebase)</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addPost}>Добавить</button>

      <ul>
        {posts.map((p, i) => (
          <li key={i}>
            {p.text} <button onClick={() => removePost(p.key)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}