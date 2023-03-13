// реализовать проект, который считывает данные о пользователях по ссылке https://reqres.in/api/users?page=2
// Данные необходимо отрисовать в карточках, используя гриды

fetch("https://reqres.in/api/users?page=2")
  .then((res) => res.json())
  .then((person) => showCard(person.data));

const peoplesWrapper = document.querySelector(".peoples");
function showCard(array) {
  //    console.log(array);
  array.forEach(function ({ avatar, first_name, last_name, email }) {
    const personWrapper = document.createElement("div");
    const personImage = document.createElement("img");
    const personFio = document.createElement("p");
    const personEmail = document.createElement("p");

    personWrapper.classList.add("person");
    personImage.setAttribute("src", avatar);
    personFio.classList.add("fio");
    personEmail.classList.add("email");

    personFio.innerText = `${first_name} ${last_name}`;
    personEmail.innerText = `${email}`;

    personWrapper.append(personImage, personFio, personEmail);
    peoplesWrapper.append(personWrapper);
  });
}

// <div class="person">
// <img src="" alt="">
// <p class="fio"></p>
// <p class="email"></p>
// </div>
