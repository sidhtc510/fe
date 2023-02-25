// for (let i = 0; i <= 10; i++) {
//    console.log(i);
// }

// const arr = [-5, 12, 2, 6, -8, 9, 10, 0, 11];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(arr[i]);
//     }
// }

// function func() {
//   console.log("text");
// }

// let a = func;
// a();

// function heandler(arg) {
//   for (let i = 0; i < 10; i++) {
//     arg[i];
//   }
// }

// heandler(func);

// setInterval(func, 1000);

// setTimeout(func,1000)

// function func2(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     func(arr[i]);
//   }
// }

// function power(arg) {
//   console.log(arg ** 2);
// }

// func2(arr, power);

// function multimply(a,b){
//     console.log("mult: " + a*b);
// }

// multimply(12,4)

// console.log(
//   "------------------------------------------------------------------"
// );

// arr.forEach(console.log);
// arr.forEach(power);

// arr.forEach(function(i){
//     if (i > 0) {
//         console.log(i);
//     }
// })

// function declaratin
// function positive(arg){
//     if (arg >= 0) {
//         console.log(arg);
//     }
// }

// function expression
// const positive = function(arg){
//     if (arg >= 0) {
//         console.log(arg);
//     }
// }

// arr.forEach(function (arg) {
//   if (arg >= 0) {
//     console.log(arg);
//   }
// });

// arr.forEach(function (arg) {

//   if (arg < 0) {
//     console.log(-arg);
//   }else{
//     console.log(arg);
//   }
// });

// const products = [
//   { id: 1, title: "velik1", price: "120" },
//   { id: 2, title: "velik2", price: "1250" },
//   { id: 3, title: "velik3", price: "100" },
//   { id: 4, title: "velik4", price: "1200" },
// ];

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].title);
// }

// products.forEach(function(i){
//     console.log(i.title);
// })

// products.forEach(function(item){
//     if (item.price > 1000) {
//         console.log(item);
//     }
// })

// console.log(
//   "--------------------------------MAP----------------------------------"
// );

// const result = products.map(function (item) {
//   return item.title;
// });

// console.log(result);

// const result2 = products.map(function (item) {
//   return { title: item.title, price: item.price };
// });

// console.log(result2);

// console.log(
//   "----------------------------Деструктуризация--------------------------------------"
// );
// const obj = {
//     a:2, b:2,c:2
// }
// const a = obj.a;
// const b = obj.b;
// const c = obj.c;

// or

// const {a,b,c} = obj;
// console.log(a,b,c);

// function func({ a, b, c }) {
//   console.log(a + b + c);
// }

// func(obj);

// console.log(
//   "------------------------------------------------------------------"
// );

// const result_destruct = products.map(function ({title, price }) {
// return {title, price}
// });
// console.log(products);
// console.log(result_destruct);

const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(7); //добавит в конец
numbers.unshift(0); // добавит в начало
numbers.pop(); //удалит с конца
numbers.shift(); //удалит с начала
console.log(numbers);

const numbers2 = [23, 11, -9, 57, -3, 64, 22, -8];

// сформировать новый массив
// const postive = [];
// numbers2.forEach((el) => {
//   if (el > 0) {
//     postive.push(el);
//   }
// });

// console.log(postive);

const new_var = [];

// function doubleNums() {
//   for (let i = 0; i < numbers2.length; i++) {
//     new_var.push(numbers2[i] * 2);
//   }
// }

// function changeNums(array, callback) {
//   for (let i = 0; i < numbers2.length; i++) {
//     array.push(callback(numbers2[i]));
//   }
// }

// const div_nums = [];
// const pow_nums = [];

// function divNums(num) {
//   return num / 2;
// }
// function powNums(num) {
//   return num ** 2;
// }

// changeNums(div_nums, divNums);
// changeNums(pow_nums, powNums);

// console.log(div_nums, pow_nums);
console.log(
  "------------------------------------------------------------------"
);

// const tripple = numbers2.map(function(el) {
//     return el*3
// })
// console.log(numbers2);
// console.log(tripple);

const users = [
  { id: 1, name: "anton", age: 20 },
  { id: 2, name: "anton2", age: 201 },
  { id: 3, name: "anton3", age: 2 },
  { id: 4, name: "anton4", age: 24 },
];

const user_name = users.map(({ name, age }) => {
  const new_user = { name, age };
  return new_user;
});

console.log(user_name);