const menuIcon = document.querySelector(".menuIcon");
const ul = document.querySelector(".header ul");

menuIcon.addEventListener("click", function () {
  ul.classList.toggle("active");
});
