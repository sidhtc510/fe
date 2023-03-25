const btn = document.querySelector(".show_msg_btn");
const btnColor = document.querySelector(".btnColor");
const btnRNDMColor = document.querySelector(".btnRNDMColor");
const input = document.querySelector(".show_msg_input");

// btn.addEventListener("click", () => console.log(input.value))

// btnColor.addEventListener("click",  () => document.body.classList.toggle("chColor"))

const arrColor = ["red", "green", "orange"];
let color_index = 0;

btnRNDMColor.addEventListener("click", () => {
  document.body.style.backgroundColor =
    arrColor[color_index++ % arrColor.length];
});

// color_index++ % arrColor.length;

// 0 % 4 === 0
// 1 % 4 === 1
// 2 % 4 === 2
// 3 % 4 === 3
// 4 % 4 === 0
// 5 % 4 === 1
// 6 % 4 === 2
// 87 % 10 === 7
// 8 коробок
// 7 остаток

const myButton = document.querySelector("#randomButton");
myButton.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  myButton.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
});
const a = Math.ceil(4.000001); // 5
const b = Math.floor(4.999999); // 4
const c = Math.round(4.65); // 5 - по математическим правилам 4.49 = 4

console.log(("b" + "a" + +"a" + "a").toLowerCase());

// const photos = [
//   "https://reqres.in/img/faces/1-image.jpg",
//   "https://reqres.in/img/faces/2-image.jpg",
//   "https://reqres.in/img/faces/3-image.jpg",
//   "https://reqres.in/img/faces/4-image.jpg",
//   "https://reqres.in/img/faces/5-image.jpg",
// ];

// const img_slider = document.querySelector(".img_slider");
// let photo_index = 0;
// img_slider.addEventListener("click", function (event) {
//   event.target.src = photos[photo_index++ % photos.length];
// });

const photos = [
  "https://reqres.in/img/faces/1-image.jpg",
  "https://reqres.in/img/faces/2-image.jpg",
  "https://reqres.in/img/faces/3-image.jpg",
  "https://reqres.in/img/faces/4-image.jpg",
  "https://reqres.in/img/faces/5-image.jpg",
];
let photo_index = 0;
const img_slider = document.querySelector(".img_slider");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

leftBtn.addEventListener("click", () => {
  photo_index = (photo_index - 1 + photos.length) % photos.length;
  img_slider.src = photos[photo_index];
});

rightBtn.addEventListener("click", () => {
  photo_index = ++photo_index % photos.length;
  img_slider.src = photos[photo_index];
});

const diceBtn = document.querySelector(".dice_btn");
const diceResult = document.querySelector(".dice_result");

const dice_random = () => Math.ceil(Math.random() * 6);

diceBtn.addEventListener("click", () => {
  console.log(dice_random());
});

// 2:50

const addForm = document.querySelector("#addForm");
const target = document.querySelector(".target");

addForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const forTag = event.target.forTag
  const forContent = event.target.forContent
  const forColor = event.target.forColor

  
const element = document.createElement(forTag.value);
element.innerText = forContent.value
element.style.color = forColor.value


target.append(element)
});
