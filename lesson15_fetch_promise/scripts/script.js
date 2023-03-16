console.log(
  "---------------------------------callback---------------------------------"
);
// function handler() {
//     console.log("hw");
// }
// const a = handler
// a()

// function calculation(a,b,callback) {
//     return callback(a,b)
// }
// const result = calculation(12,4, function (a,b) {
//     return a*b
// })
// console.log(result);

// const array = [12, 21, 33];
// function forEachFunc(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//     callback(array[index]);
//   }
// }
// forEachFunc(array, console.log);
// forEachFunc(array, function (elem) {
//   console.log(elem ** 2);
// });

console.log(
  "---------------------------------map---------------------------------"
);
// const arr = [12, 21, 33];

// function mapFunc(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const item = callback(arr[i]);
//     result.push(item);
//   }
//   return result;
// }

// const newArray = mapFunc(arr, function (elem) {
//   return elem ** 2;
// });

// console.log(newArray);

console.log(
  "---------------------------------filter---------------------------------"
);
// const arr = [12, 21, 33];

// function filterFunc(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const newArray = filterFunc(arr, function (elem) {
//   if (elem > 20) {
//     return elem;
//   }
// });

// console.log(newArray);

console.log(
  "---------------------------------find---------------------------------"
);

// const arr = [12, 21, 33];

// function findFunc(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       return arr[i];
//     }
//   }
// }

// const newArray = findFunc(arr, function (elem) {
//   return elem === 21;
// });

// console.log(newArray);

console.log(
  "---------------------------------fetch promise ---------------------------------"
);

function showProduct(idParam, myfunction) {
  const link = `https://fakestoreapi.com/products/${idParam}`;
  fetch(link)
    .then((res) => res.json())
    .then((data) => myfunction(data));
}

//   getProduct(2, console.log);
showProduct(6, createElement);

function createElement({ title, price, rating: { rate } }) {
  const root = document.querySelector("#root");
  root.innerText = "";

  const cardWrapper = document.createElement("div");
  const pTitle = document.createElement("p");
  const pPrice = document.createElement("p");
  const pRating = document.createElement("p");

  cardWrapper.classList.add("item");

  pTitle.innerText = title;
  pPrice.innerText = price;
  pRating.innerText = rate;

  cardWrapper.append(pTitle, pPrice, pRating);

  root.append(cardWrapper);
}
