const numbers = [12, 4, 32, 5, 4, 2, 65];

// числа менее 10 вернуть с +10
// const newarray = numbers.map(function (el) {
//     if (el < 10) {
//         return el + 10
//     }
//     return el
// })
// const newarray = numbers.map(el => el < 10 ? el + 10 :  el);

//сформировать новый массив из четных чисел
// const even = numbers.filter(function (el) {
//     if (el%2 == 0) {
//         return el
//     }
// })
// const even = numbers.filter((el) => (el % 2 === 0 ? el : false));
// console.log(even);

//вернуть сумму чётных чисел
// const evenAmount = numbers.reduce(function (acc, el) {
//   if (el % 2 === 0) {
//     acc += el;
//   }
//   return acc;
// }, 0);

// const evenAmount = numbers.reduce((acc, item) => {
//   return acc + (item % 2 === 0 ? item : 0);
// }, 0);

const products = [
  { id: 1, title: "велосипед", price: 5000, discount: 12 },
  { id: 2, title: "ролики", price: 1000, discount: 0 },
  { id: 3, title: "самокат", price: 900, discount: 5 },
  { id: 4, title: "лыжи", price: 1200, discount: 0 },
  { id: 5, title: "сноуборд", price: 1500, discount: 10 }
];

const newArr = products.filter(el => {
    return el.price < 1200
}).map(({ title, price, discount }) => {
  return { title, price: price - price * discount / 100 };
})

console.log(newArr);
