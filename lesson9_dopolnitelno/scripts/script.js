// const people = [
//   {
//     first_name: "Ivan",
//     last_name: "Ivanov",
//     age: 20,
//     city: "Moscow",
//     country: "Russia",
//   },

//   {
//     first_name: "Petr",
//     last_name: "Petrov",
//     age: 12,
//     city: "Berlin",
//     country: "Germany",
//   },

//   {
//     first_name: "irina",
//     last_name: "Alexandrova",
//     age: 46,
//     city: "Paris",
//     country: "France",
//   },

//   {
//     first_name: "Denis",
//     last_name: "Sokolov",
//     age: 30,
//     city: "Rome",
//     country: "Italy",
//   },
// ];

// const newArray = people.map(function (person) {
//   return `${person.first_name} ${person.last_name} (${person.city}, ${person.country})`
// });

// const newArray = people.filter(function ({first_name}) {
//     return first_name[0].toLowerCase() === "i"
// })

// const newArray = people.filter(function (person) {
//     return person.country === "France" || person.country === "Germany"
// }).map(function (person) {
//     return `${person.first_name} ${person.last_name}`
// })

console.log(
  "---------------------------------Local Storage---------------------------------"
);

const goods = [
  {
    id: 1,
    product: "iPhone 14",
    price: 1500,
    in_stock: true,
  },
  {
    id: 2,
    product: "Samsung A53",
    price: 1000,
    in_stock: true,
  },
  {
    id: 3,
    product: "Huawei 11",
    price: 900,
    in_stock: true,
  },
  {
    id: 4,
    product: "Nokia N4",
    price: 500,
    in_stock: false,
  },
  {
    id: 5,
    product: "iPhone 12",
    price: 1100,
    in_stock: false,
  },
];

const productsContainer = document.querySelector(".products_container");

const products_cards = goods.map(function ({ product, price, in_stock }) {
  const productCard = document.createElement("div");
  const productTitle = document.createElement("p");
  const productPrice = document.createElement("p");
  const productStock = document.createElement("p");

  const inStock = in_stock ? "in stock" : "not available";

  productTitle.innerText = `Title: ${product}`;
  productPrice.innerText = `Price: ${price}`;
  productStock.innerText = `Title: ${inStock}`;

  productCard.append(productTitle, productPrice, productStock);
  return productCard;
});

productsContainer.append(...products_cards); // spread operator спрэд оператор



// ДЗ  - решение в папке hw4_store
// Стилизовать карточки
// Добавить форму с двумя инпутами для сбора данных о названии продукта и его цене. По умолчанию все добавляемые продукты должны иметь свойство in_stock со значением true
// При отправке формы выводить собранные данные из формы в консоль в виде объекта
// При отправке формы отрисовывать карточку из собранных данных
// При обновлении страницы добавленные карточки не пропадают