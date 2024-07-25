const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const name = prompt("Ввведіть ваше ім.я");

btn.addEventListener("click", function () {
  output.innerHTML = `Привіт ${name}`;
});
