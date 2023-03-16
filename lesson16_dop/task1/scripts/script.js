// fetch('https://api.storerestapi.com/users')
// .then(response => response.json())
// .then(json => console.log(json.data))

const cardContainer = document.querySelector(".cards_container");

function renderCard(arr) {
  arr.forEach(function (el) {
    const container = document.createElement("div");
    const pName = document.createElement("p");
    const pEmail = document.createElement("a");

    container.classList.add("container");
    pEmail.href = `mailto:${el.email}`;

    pName.innerText = el.name;
    pEmail.innerText = el.email;

    container.style.backgroundColor =
      el.name.charAt(0) === "D" ? "lightpink" : "lightgreen";
    container.append(pName, pEmail);

    cardContainer.append(container);
  });
}

async function nameF() {
  const resp = await fetch("https://api.storerestapi.com/users");
  const data = await resp.json();
  renderCard(data.data);
}

nameF();
