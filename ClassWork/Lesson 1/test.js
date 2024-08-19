let getCircleArea = (radius) => Math.PI * Math.pow(radius, 2);

let getCirclePerimeter = (radius) => 2 * Math.PI * radius;

let radius = getNumberValue("Введіть радіус");
let area = getCircleArea(radius);
let perimetr = getCirclePerimeter(radius);
console.log(area, perimetr);

let btnToC = document.querySelector("#btnToC");
let btnToF = document.querySelector("#btnToF");

btnToC.addEventListener("click", getTemperatureC);
btnToF.addEventListener("click", getTemperatureF);

function getTemeratureValue() {
  let temp = Number(document.querySelector("#temp").value);
  return temp;
}

function getTemperatureC() {
  let tempF = getTemeratureValue();
  let tempC = (9 / 5) * (tempF - 32);
  showResult(tempC);
}

function getTemperatureF() {
  let tempC = getTemeratureValue();
  let tempF = (9 / 5) * (tempC + 32);
  showResult(tempF);
}

function showResult(result) {
  let output = document.querySelector("#output");
  output.innerHTML = result;
}
let throwCount = +prompt("Скільки разів ви хочете кинути шестигранний кубик");

let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for (let i = 0; i < throwCount; i++) {
  const result = random(1, 6);
  console.log(result);
}
