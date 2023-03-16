const usersContainer = document.querySelector(".users_container");

function getTotdos(el) {
  fetch("https://reqres.in/api/users?page=" + el)
    .then((res) => res.json())
    .then((json) => renderCard(json.data));
}
getTotdos(1)
function renderCard(users_data) {
  usersContainer.innerText = "";
  users_data.forEach(({ avatar, first_name }) => {
    const cardWrap = document.createElement("div");
    const userImage = document.createElement("img");
    const userName = document.createElement("p");

    userName.innerText = first_name;
    userImage.src = avatar;

    cardWrap.append(userImage, userName);
    usersContainer.append(cardWrap);
  });
}

const buttons = document.querySelectorAll(".triggers button");

console.log(buttons);
buttons[0].addEventListener("click", function () {
 getTotdos(1)
});
buttons[1].addEventListener("click", function () {
 getTotdos(2)
});

// btn1.addEventListener("click", function () {
//   getTotdos(1);
// });

// btn2.addEventListener("click", function () {
//   getTotdos(2);
// });
