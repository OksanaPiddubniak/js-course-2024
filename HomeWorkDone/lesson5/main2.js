let calcAreaAndPerimetrCircle = (radius) => {
  let area = Math.floor(Math.PI * Math.pow(radius, 2));
  let perimetr = Math.floor(2 * Math.PI * radius);
  console.log(`Площа дорівнює: ${area}`);
  console.log(`Періментр дорівнює: ${perimetr}`);
};

let calcAreaAndPerimetrRectangle = (lenght, width) => {
  let area = lenght * width;
  let perimetr = 2 * (lenght + width);
  console.log(`Площа дорівнює: ${area}`);
  console.log(`Періментр дорівнює: ${perimetr}`);
};

let calcAreaAndPerimetrTreeangle = (a, b, c) => {
  let p = (a + b + c) / 2;
  let area = Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
  let perimetr = a + b + c;
  console.log(`Площа дорівнює: ${area}`);
  console.log(`Періментр дорівнює: ${perimetr}`);
};

let userAnswear = prompt("Оберіть фігуру: коло, прямокутник, трикутник");

if (userAnswear === "коло") {
  let radius = Number(prompt("Введіть радіус"));
  calcAreaAndPerimetrCircle(radius);
} else if (userAnswear === "прямокутник") {
  let lenght = Number(prompt("Введіть довжину"));
  let width = Number(prompt("Введіть ширину"));
  calcAreaAndPerimetrRectangle(lenght, width);
} else if (userAnswear === "трикутник") {
  let a = Number(prompt("Введіть сторону a"));
  let b = Number(prompt("Введіть сторону b"));
  let c = Number(prompt("Введіть сторону c"));
  calcAreaAndPerimetrTreeangle(a, b, c);
}
