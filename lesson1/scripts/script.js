// const value_1 = +prompt("enter num");
// const value_2 = +prompt("enter num");

// if( value_1 > value_2){
//     console.log(`${value_1} больше  ${value_2}`);
// }else if( value_1 < value_2){
//     console.log(`${value_1} меньше  ${value_2}`);
// }else{
//     console.log("они равны");
// }

// console.log(`${value_1} + ${value_2} = ${value_1 + value_2}`);
// console.log(`${value_1} - ${value_2} = ${value_1 - value_2}`);
// console.log(`${value_1} * ${value_2} = ${value_1 * value_2}`);

// if(value_2 !== 0){
//     console.log(`${value_1} / ${value_2} = ${value_1 / value_2}`);
// }else{
//     console.log(`${value_1} / ${value_2} = так не делай больше` );
// }

// for (let i = 9; i  >= 0; i--) {
//     console.log(i);
// }

// спред оператор изучить (...variable)

// var VS let
// let нельзя объявить несколько раз в отличии от var
// отличие в областях видимости  у лет и конст блочная область видимости (блок - фигурные скобки
// у вар функциональная о.в.  только в функциях можно отделить от остальной области
// всплытие

// const arr = [12,4,-32,4,-54,12,-4,67];

// for (let i = 0; i < arr.length; i++) {
//    if(arr[i] < 0){
//      arr[i] = arr[i]-arr[i]*2;   // arr[i] = arr[i] * -1;
//    }
// }

// console.log(arr);

// const arr = [12, 4, 32, 4, 54, 12, 4, 67];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// const user = {
//   name: "tolik",
//   lastName: "sid",
//   age: "38",
//   gender: "m",
// };

// console.log(user.name, user.lastName);

// function sqr(num) {
//   return num ** 2;
// }

// console.log(sqr(5));

// let sum = (a, b = 10) => {
//   return a+b;
// };
// console.log(sum(5));

// let str = "Tolik";

// function f(name = "my dear friends") {
//   return `Hello, ${name}`;
// }

// console.log(f(str));

for (i = 0; i < 2; i++) {
  console.log("hi "+ i);
}

