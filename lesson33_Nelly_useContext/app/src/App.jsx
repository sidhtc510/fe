import { useState } from "react";
import "./App.css";
import PostsContainer from "./components/PostsContainer";
import { posts_data } from "./data/posts.js";
import { Context } from "./context";
import AddForm from "./components/AddForm";  

function App() {
  const [posts, setPost] = useState(posts_data);

  const switchLike = (id) => {
    const target_post = posts.find((el) => el.id === id);
    target_post.like = !target_post.like;
    setPost([...posts]);
  };
  const delPost = (id) => {
    setPost(posts.filter((el) => el.id !== id));
  };

  const addComment = (e) => {
    e.preventDefault();
    const newComment = { id: Date.now(), comment: e.target.commentVal.value };
    const posId = +e.target.id.value; //?????????????????????????????????????????????????????????????????????? передал через инпут хидден
    const targetPost = posts.find((el) => el.id === posId); //??????????????????????????????????????????????????????????????????????

    targetPost.comments.push(newComment);
    setPost([...posts]);
    e.target.reset();
  };

  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: e.target.title.value,
      description: e.target.description.value,
      like: false,
      comments: []
    }

    setPost([...posts, newPost])
    e.target.reset();
  };

  return (
    <div>
      <Context.Provider
        value={{ posts, switchLike, addComment, delPost, addPost }}
      >
        <AddForm />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;

// дз
//  + форма добавления комментария 
//  + удаление карточки
//  + все стилизовать
// удаление коммента по клику
