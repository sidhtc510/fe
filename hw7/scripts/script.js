const form = document.querySelector(".form");
const productsWrapper = document.querySelector(".productsWrapper");

form.addEventListener("submit", function (el) {
  el.preventDefault();
  const collection = el.target.inputCollection.value;

  fetch(`https://dummyjson.com/${collection}`)
    .then((resp) => resp.json())
    .then((json) => renderCard(json, collection));
});

function renderCard(obj, collection) {

}
