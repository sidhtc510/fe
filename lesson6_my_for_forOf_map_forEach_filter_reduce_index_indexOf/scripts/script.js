const peoples = [
  { name: "Анатолий", age: 38, budget: 40000 },
  { name: "Елена", age: 17, budget: 3400 },
  { name: "Игорь", age: 49, budget: 50000 },
  { name: "Михаил", age: 15, budget: 1800 },
  { name: "Василиса", age: 24, budget: 25000 },
  { name: "Виктория", age: 38, budget: 2300 },
];

console.log(
  "---------------------------------for---------------------------------"
);
// for (let i = 0; i < peoples.length; i++) {
//  console.log(peoples[i]);
//  console.log(peoples[i].name);
// }

console.log(
  "-------------------------------for OF-----------------------------------"
);
// for(let person of peoples){
//     console.log(person);
//     console.log(person.name);
// }
console.log(
  "---------------------------------forEach---------------------------------"
);
// peoples.forEach((person, index, pArray) => {
//     console.log(person);
//     console.log(person.name);
//     console.log(index);
//     console.log(pArray);
// })

console.log(
  "---------------------------------map---------------------------------"
);

//  Вернёт новый массив
// const newArrary = peoples.map((person, index, pArray) => {
//   return person.name
// });
// console.log(newArrary);
//  сокращенный синтаксис
// const newArrary = peoples.map(person => person.name);
// console.log(newArrary);

// Вернёт новый массив с объектами
// const newArrary = peoples.map(({name, age}, index, pArray) => {
//   return {name, age}
// });
// console.log(newArrary);

console.log("---------------------------------filter---------------------------------");

// const filteredArray = peoples.filter(person => person.age >= 18)
// console.log(filteredArray);