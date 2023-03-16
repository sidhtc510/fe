const get_user_form = document.querySelector(".get_user_form");
const userCardsContainer = document.querySelector(".userCardsContainer");

function getUser(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((json) => callback(json));
}

get_user_form.addEventListener("submit", function (event) {
  event.preventDefault();
  const id_num = event.target.input_id.value;
  getUser(id_num, cards_render);
  event.target.id.value = "";
});

function cards_render(data) {
  const userCard = document.createElement("div");
  const nameElem = document.createElement("p");
  const emailElem = document.createElement("a");

  nameElem.innerText = data.name
  emailElem.innerText = data.email
  emailElem.href = `mailto: ${data.emailElem}`

  userCard.append(nameElem, emailElem);
  userCardsContainer.append(userCard);
}
