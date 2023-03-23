const menuIcon = document.querySelector(".menuIcon");
const ul = document.querySelector(".header ul");
const account = document.querySelector(".account");
const popup = document.querySelector(".popup");
const cross_icon = document.querySelector(".cross_icon");

menuIcon.addEventListener("click", function () {
  ul.classList.toggle("active");
});

// account.addEventListener("click", () => popup.style.visibility = "visible");
account.addEventListener("click", () => popup.classList.add('visible'));
cross_icon.addEventListener("click", () => popup.classList.remove('visible'));
popup.addEventListener("click", (event) => {
  event.stopPropagation();
  popup.classList.remove('visible')});
