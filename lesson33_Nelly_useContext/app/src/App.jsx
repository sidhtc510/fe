import { useState } from "react";
import "./App.css";
import PostsContainer from "./components/PostsContainer";
import { posts_data } from "./data/posts.js";
import { Context } from "./context";

function App() {
  const [posts, setPost] = useState(posts_data);

  const switchLike = (id) => {
    const target_post = posts.find((el) => el.id === id);
    target_post.like = !target_post.like;
    setPost([...posts]);
  };

  return (
    <div>
      <Context.Provider value={{ posts, switchLike }}>
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;


// дз 
// форма добавления комментария
// удаление карточки
// все стилизовать
// удаление коммента по клику
