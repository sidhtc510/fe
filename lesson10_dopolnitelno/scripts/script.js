const addProductForm = document.querySelector(".addProductForm");
const products_container = document.querySelector(".products_container");
let products = [];

addProductForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const {id, title, price } = event.target;

  products.unshift({
    id: Date.now(),
    title: title.value,
    price: price.value,
    qnt: 5,
  });

  renderCard();
});

function renderCard() {
  products_container.innerHTML = " ";

  products.forEach(function ({id, title, price, qnt }) {
    const cardElem = document.createElement("div");
    const titleElem = document.createElement("p");
    const priceElem = document.createElement("p");
    const quantityElem = document.createElement("p");

    cardElem.classList.add("product_card");

    price <= 1000 ? cardElem.style.background = "green" : cardElem.style.background= "rgb(255, 252, 91)";

    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;
    quantityElem.innerText = `Quantity: ${qnt}`;


    cardElem.addEventListener("click", function () {
        products = products.filter(function (item) {
            return  item.id !== id;
        });
        renderCard();
    })


    cardElem.append(titleElem, priceElem, quantityElem);
    products_container.append(cardElem);
  });
}

