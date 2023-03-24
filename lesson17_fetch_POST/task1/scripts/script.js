const cardsContainer = document.querySelector(".cardsContainer");
const productForm = document.querySelector(".addProductForm");

function getProducts() {
  fetch("https://api.storerestapi.com/products")
    .then((response) => response.json())
    .then(function (json) {
        
      return render(json.data);
    });
}
getProducts();
function render(products) {
  products.forEach(({ title, price }) => {
    const cardElem = document.createElement("div");
    const titleElem = document.createElement("p");
    const priceElem = document.createElement("p");

    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;

    cardElem.classList.add("cardElem");

    cardElem.append(titleElem, priceElem);
    cardsContainer.append(cardElem);
  });
}

productForm.addEventListener("submit", function (event) {
  cardsContainer.innerText = "";
  event.preventDefault();
  const { title, price } = event.target;

  createProduct({
    title: title.value,
    price: parseInt(price.value),
    description: "default Description",
    category: "default Category",
  });

  event.target.reset();
});

function createProduct(obj) {
  fetch("https://api.storerestapi.com/products", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      //   "Content-type": "multipart/form-data",
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => getProducts());
}
