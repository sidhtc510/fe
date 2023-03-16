// function loadUsers() {
//   fetch("https://dummyjson.com/users")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       const result = data.users.map(function ({
//         firstName,
//         lastName,
//         image,
//         email,
//       }) {
//         return {
//           firstName,
//           lastName,
//           image,
//           email,
//         };
//       });
//       console.log(result);
//     });
// }

// console.log(loadUsers());
// loadUsers();
const root = document.querySelector("#root");

let usersData = [];

function createCard(firstName, lastName, image, email) {
  const container = document.createElement("div");
  const avatar = document.createElement("img");
  const pFirstName = document.createElement("p");
  const pLastName = document.createElement("p");
  const pEmail = document.createElement("a");
  const btnDelete = document.createElement("button");

  container.classList.add("user");

  avatar.setAttribute("src", image);
  pEmail.setAttribute("href", `mailto:${email}`);

  pFirstName.innerText = firstName;
  pLastName.innerText = lastName;
  pEmail.innerText = "send mail";
  btnDelete.innerText = "delete";

  container.append(avatar, pFirstName, pLastName, pEmail, btnDelete);
  return container;
}

function rerender(arr) {
  arr.forEach(function ({ firstName, lastName, image, email }) {
    container = createCard(firstName, lastName, image, email);
    root.append(container);
  });
}

async function loadUsers(callback) {
  const resp = await fetch("https://dummyjson.com/users");
  const data = await resp.json();

  const result = data.users.map(function ({
    firstName,
    lastName,
    image,
    email,
  }) {
    return { firstName, lastName, image, email };
  });

  callback(result);

  // result.forEach(function ({firstName, lastName, image, email }) {
  //   callback(firstName, lastName, image, email )
  // });
}

loadUsers(function (data) {
  usersData = data;
  rerender(usersData);
});

// createCar("name1", "lastName", "email", "image");
