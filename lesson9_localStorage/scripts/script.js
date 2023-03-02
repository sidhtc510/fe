localStorage.setItem("testKey", "testValue");
const result = localStorage.getItem("testKey");

console.log(result);


const btn = document.querySelector(".btn");
let count = +localStorage.getItem('counter') ?? 0; // оператор нулегого слияния
// count = count === null ? 0 : count;

btn.innerText = count;

btn.addEventListener("click", function () {
  count += 5;
  btn.innerText = count
  localStorage.setItem("counter", count)
});