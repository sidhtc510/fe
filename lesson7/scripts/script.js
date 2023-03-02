// const numbers = [12, 435, 1, 32, 545, 21, 555];

// numbers.forEach(function (element) {
//   if (element > 100) {
//     console.log(element);
//   }
// });
// numbers.forEach(function (element) {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

// const newArray = numbers.map(function(elem) {
//     if (elem < 100) {
//         elem += 100;
//     }
//     return elem
// })
// console.log(newArray);

// const users = [
//   {
//     id: 1,
//     name: "Анатолий",
//     lastname: "Ушанов",
//     age: 30,
//   },
//   {
//     id: 2,
//     name: "Максим",
//     lastname: "Грибов",
//     age: 28,
//   },
//   {
//     id: 3,
//     name: "Антон",
//     lastname: "Куликов",
//     age: 27,
//   },
//   {
//     id: 4,
//     name: "Юрий",
//     lastname: "Митрофанов",
//     age: 45,
//   },
// ];

// const names = users.map(function ({name, age}) {
//   return {name, age};
// });

// console.log(names);

// const numbers = [12, 435, 1, 32, 545, 21, 555, 66];

// const result = numbers.filter(function(item) {
//     return item %2 === 0
// })
// Сокращенный синтаксис
// const result = numbers.filter(item => item % 2 === 0)

// console.log(result);

// const adult = users.filter(function (person) {
//     return person.age < 30
// })
// // Вариант через диструктуризацию
// const adult = users
//   .filter(function ({ age }) {
//     return age < 30;
//   })
//   .map(function ({ name, lastname, age }) {
//     return { name, lastname, age };
//   });
// console.log(adult);

// const numbers = [12, 45, 14, 6, 3, 76, 22, 22, 43,2];
// const numbers2 = [1,2,3,4,5];

// const result = numbers.reduce(function(acc, item) {
//     console.log(acc, item);
//     if (item < acc) {
//         return item
//     }else{
//         return acc
//     }
// })

// console.log(result);

// const result = numbers2.reduce(function(acc, item) {
//     return acc * item
// })

// console.log(result);

// const data = [
//     {id: 1, amount: 12000},
//     {id: 2, amount: 13000},
//     {id: 3, amount: 14000},
//     {id: 4, amount: 15000},
//     {id: 5, amount: 16000}
// ];

// const result = data.reduce(function (acc, amount) {
//     return  acc + amount;
// }, 0)

// console.log(result);

// const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];

// const arrFruits = products.filter(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log(arrFruits);

// const arrFruitsL = products.filter(function (item) {
//   if (item[0] === "l") {
//     return item;
//   }
// });

// console.log(arrFruitsL);

// const arrFruitsUC = products.map(function (item) {
//   return item.toUpperCase();
// });

// console.log(arrFruitsUC);

// const arrFruitsUCFL = products.map(function (item) {
//     return item[0].toUpperCase() + item.slice(1);
//   });

//   console.log(arrFruitsUCFL);

// const users = [
//   {
//     id: 1,
//     name: "Egor",
//     lastname: "Ушанов",
//     age: 14,
//     country: "germany",
//   },
//   {
//     id: 2,
//     name: "victor",
//     lastname: "Грибов",
//     age: 28,
//     country: "ukraine",
//   },
//   {
//     id: 3,
//     name: "Oleg",
//     lastname: "Куликов",
//     age: 27,
//     country: "spain",
//   },
//   {
//     id: 4,
//     name: "olga",
//     lastname: "Митрофанов",
//     age: 45,
//     country: "france",
//   },
// ];

// const arrO= users.filter(({name}) => name[0].toLowerCase() === "o");
// console.log(arrO);

// const newArr = users.map(function ({name, age, country}) {
//         return `${name}, ${age} (${country})`
// })

// console.log(newArr);

// const arr = users.filter(person => person.age >= 18).map(person => `${person.name}, ${person.age} (${person.country})`)

// console.log(arr);

const users = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    salary: 500,
  },
  {
    first_name: "Olga",
    last_name: "Petrova",
    age: 12,
    salary: 250,
  },
  {
    first_name: "Irina",
    last_name: "Alexandrova",
    age: 46,
    salary: 1500,
  },
  {
    first_name: "Denis",
    last_name: "Sokolov",
    age: 30,
    salary: 760,
  }
];

//1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
// users.forEach((elem) => console.log(elem));

//2. Получите из всех объектов значения last_name и сформируйте из этих имен массив.
// const newArray = users.map(function (ln) {
//     return ln.last_name
// })
// console.log(newArray);

// 3. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной.
//
// let kakayaNibudPeremennaya;
// for (let i = 0; i < users.length; i++) {
//   if (users[i].first_name === "Olga") {
//    kakayaNibudPeremennaya = users[i];
//   }
// }
// console.log(kakayaNibudPeremennaya);

// const kakayaNibudPeremennaya = users.find(function (el) {
//   return el.first_name === "Olga";  
// })
// console.log(kakayaNibudPeremennaya);

// 4. Сформируйте новый массив без объекта, где first_name == "Irina"
// let kakayaNibudPeremennaya = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].first_name === "Irina") {
//    kakayaNibudPeremennaya.push(users[i].first_name);
//   }
// }
// console.log(kakayaNibudPeremennaya);
// const users_without_irina = users.filter(function (el) {
//   return el.first_name !== 'Irina'  
// })
// console.log(users_without_irina);



// 5. Добавьте в конец нового массива объект со значениями:
// let obj = {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }
// users.push(obj)
// console.log(users);

// 6. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: 
// <Имя> <Фамилия> (<возраст>): <зарплата>.
// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']

// const newArray = users.filter(function (person) {
//     return person.age >= 18
// }).forEach(function ({first_name, last_name, age, salary}) {
//     console.log(`${first_name} ${last_name} (${age}): ${salary}`);
// })
