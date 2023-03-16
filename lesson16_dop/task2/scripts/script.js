// получить данные
// создать ф-ю отрисовки карточки
// в цикле отрисовать все карточки

const root = document.querySelector("#root");

async function fetchData(callback) {
  const request = await fetch("https://fakestoreapi.com/products");
  const json = await request.json();
  const clearedArray = clearedData(json);
  callback(clearedArray);
}

fetchData(renderCards);

function showCard(id, image, price, ratingCount, ratingRate, title) {
  const cardWrapper = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardTitle = document.createElement("p");
  const cardPrice = document.createElement("p");

  cardImage.setAttribute("src", image);
  cardTitle.innerText = title;
  cardPrice.innerText = price;

  cardWrapper.append(cardImage, cardTitle, cardPrice);
  return cardWrapper;
}

function renderCards(arr) {
  cardWrapper = arr.forEach(function ({
    id,
    image,
    price,
    ratingCount,
    ratingRate,
    title,
  }) {
    cards = showCard(id, image, price, ratingCount, ratingRate, title);
    root.append(cards);
  });
}

function clearedData(array) {
  const clearedData = array.map(function (item) {
    return {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      ratingCount: item.rating.count,
      ratingRate: item.rating.rate,
    };
  });
  return clearedData;
}
