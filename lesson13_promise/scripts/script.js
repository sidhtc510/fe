// const link = "https://jsonplaceholder.typicode.com/posts";

// const posts = document.querySelector(".posts");

// function createPost(title, body) {
//   const container = document.createElement("div");
//   const pTitle = document.createElement("p");
//   const pBody = document.createElement("p");
//   pTitle.innerText = title;
//   pBody.innerText = body;

//   pTitle.classList.add("title");
//   pBody.classList.add("text");

//   container.append(pTitle, pBody);

//   return container;
// }

fetch(link).then(function (resp) {
  resp.json().then(function (data) {
    data.forEach(function ({ title, body }) {
      // console.log(elem);
      const newPost = createPost(title, body);
      posts.append(newPost);
    });
  });
});

const request = new Promise((resolve, reject) => {
  const number = Math.random();
  number < 0.5 ? resolve(number) : reject(number);
});

