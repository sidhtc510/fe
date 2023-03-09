// let a = 20;

// setTimeout(function () {
//     a =320
// }, 2000)

// console.log(a);

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(a = 320);
//   }, 5000);
// });

// promise.then(function () {
//     console.log(a);
// });

console.log(
  "---------------------------------fetch---------------------------------"
);

fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    console.log(json);
  });
