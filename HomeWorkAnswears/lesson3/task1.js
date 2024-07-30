let number = prompt("Введіть чиcло");
let output = document.querySelector(".output");

number = Number(number);

if (isNaN(number)) {
  alert("Ввели некоретне число");
} else if (number % 2 == 0) {
  alert("число парне");
} else {
  alert("число непарне");
}
