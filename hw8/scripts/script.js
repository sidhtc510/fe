// реализовать приложение, которое загружает посты с API, добавляет их в массив и отображает в интерфейсе.
// https://jsonplaceholder.typicode.com/todos
const root = document.querySelector(".root");

let postsData = [];

function createCard(userId, title, completed) {
  const container = document.createElement("div");

  const pUserId = document.createElement("p");
  const pTitle = document.createElement("p");
  const pComplited = document.createElement("p");

  pUserId.innerText = `User ID - ${userId}`;
  pTitle.innerText = `Title - ${title}`;
  pComplited.innerText = `Completed - ${completed}`;

  container.append(pUserId, pTitle, pComplited);
  return container;
}

function rerender(arr) {
  // console.log(arr);
  arr.forEach(function ({ userId, title, completed }) {
    // console.log(title);
    container = createCard(userId, title, completed);
    root.append(container);
  });
}

async function getPosts(callback) {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await req.json();

  const res = data.map(function (post) {
    return {
      userId: post.userId,
      title: post.title,
      completed: post.completed,
    };
  });

  callback(res);
}

getPosts(rerender);
