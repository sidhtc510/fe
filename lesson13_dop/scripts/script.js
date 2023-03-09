const root = document.querySelector("#root");

const words = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
  "Laudantium",
  "impedit",
];

const products = [
  { id: 1, title: "title1", price: 5000 },
  { id: 2, title: "title2", price: 5100 },
  { id: 3, title: "title3", price: 5200 },
  { id: 4, title: "title4", price: 5300 },
  { id: 5, title: "title5", price: 5400 },
  { id: 6, title: "title6", price: 5500 },
];

// for (let i = 0; i < words.length; i++) {
//     const p = document.createElement("p");
//     p.innerText = words[i];
//     root.append(p)
// }

// words.forEach(function (el) {
//     const pElem = document.createElement("p");
//     pElem.innerText = el;
//     root.append(pElem)

// })

function createCard(title, price) {
  const container = document.createElement("div");
  const pTitle = document.createElement("p");
  const pPrice = document.createElement("p");
  pTitle.innerText = title;
  pPrice.innerText = price;

  container.append(pTitle, pPrice);

  return container;
}

products.forEach(function ({ title, price }) {
  const card = createCard(title, price);
  root.append(card);
});
