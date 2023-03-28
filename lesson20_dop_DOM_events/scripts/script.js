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
// -1+5 = 4 % 4 =0
// -2+5 = 3 % 4 =0
console.log(4 % 4);
console.log(3 % 4);
console.log(2 % 4);
console.log(1 % 4);

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

const addForm = document.querySelector("#addForm");
const target = document.querySelector(".target");

addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const forTag = event.target.forTag;
  const forContent = event.target.forContent;
  const forColor = event.target.forColor;

  const element = document.createElement(forTag.value);
  element.innerText = forContent.value;
  element.style.color = forColor.value;

  target.append(element);
});

const btnPlus = document.querySelector(".incr_btn");
let btn_param = 30;

const incr_btn_render = (size) => {
  btnPlus.style.width = `${size}px`;
  btnPlus.style.height = `${size}px`;
};

incr_btn_render(btn_param);

btnPlus.addEventListener("click", (event) => {
  btn_param += 10;
  incr_btn_render(btn_param);
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  event.target.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
});

console.log(
  "------------------------------------------------------------------"
);

const change_text_btn = document.querySelector(".change_text_btn");
const change_text_input = document.querySelector(".change_text_input");
change_text_input.value = "???";

change_text_btn.addEventListener("click", () => {
  if (change_text_input.value.includes("?")) {
    change_text_input.value = "";
  }
  change_text_input.value += "!";
});
console.log(
  "------------------------------------------------------------------"
);

const change_text_btn2 = document.querySelector(".change_text_btn2");
const change_text_input2 = document.querySelector(".change_text_input2");
change_text_input2.value = "???";

change_text_btn2.addEventListener("click", () => {
  console.log("heeeee");
  if (change_text_input2.value.includes("?")) {
    change_text_input2.value = "...";
  } else {
    change_text_input2.value = "???";
  }
});
console.log(
  "------------------------------------------------------------------"
);

const change_text_btn3 = document.querySelector(".change_text_btn3");
const change_text_input3 = document.querySelector(".change_text_input3");

const elems = ["...", "???", "$$$"];
let elemIndex = 0;
change_text_btn3.addEventListener("click", () => {
  change_text_input3.value = elems[elemIndex++ % elems.length];
});

console.log(
  "------------------------------------------------------------------"
);

const create_p_btn = document.querySelector(".create_p_btn");
const create_p_container = document.querySelector(".create_p_container");

const colors = ["red", "green", "orangered"];
let elemIndex2 = 0;

create_p_btn.addEventListener("click", () => {
  console.log(elemIndex2++ % colors.length);
  const p = document.createElement("p");
  p.innerText = "lorem 10";
  p.style.color = colors[elemIndex2++ % colors.length];
  create_p_container.append(p);
});
