const form = document.querySelector(".photoForm");
const peoplesWrapper = document.querySelector(".peoplesWrapper");
let peoples = [];

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  clear();

  const link = ev.target.link;
  const fio = ev.target.fio;

  peoples.push({
    id: Date.now(),
    photoLink: link.value,
    name: fio.value,
  });

  personCard();
});

function personCard() {
  clear();
  const card = peoples.map(function ({ id, photoLink, name }) {
    const divCard = document.createElement("div");
    const imgCard = document.createElement("img");
    const pCard = document.createElement("p");

    divCard.id = id;
    divCard.classList.add("personCard");
    imgCard.setAttribute("src", `${photoLink}`);
    pCard.classList.add("fio");
    pCard.innerHTML = `Name: ${name}</br>id: ${id}`;

    divCard.append(imgCard, pCard);

    divCard.addEventListener("dblclick", function () {
      peoples = peoples.filter(function (item) {
        return item.id !== id;
      });

      personCard();
    });

    return divCard;
  });

  peoplesWrapper.append(...card);
}

function clear() {
  peoplesWrapper.innerText = "";
}
