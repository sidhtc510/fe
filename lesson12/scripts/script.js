const menuIcon = document.querySelector(".menuIcon");
const ul = document.querySelector(".header ul");
const account = document.querySelector(".account");
const popup = document.querySelector(".popup");
const popup_content = document.querySelector(".popup_content");
const cross_icon = document.querySelector(".cross_icon");

menuIcon.addEventListener("click", function () {
  ul.classList.toggle("active");
});

account.addEventListener("click", () => popup.classList.add("visible"));

cross_icon.addEventListener("click", () => popup.classList.remove("visible"));

popup_content.addEventListener("click", function (event) {
  event.stopPropagation();
});

popup.addEventListener("click", () => {
  popup.classList.remove("visible");
});


