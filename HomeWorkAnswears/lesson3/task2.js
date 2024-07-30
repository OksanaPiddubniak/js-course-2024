let currentDate = new Date().getDay();
let output = document.querySelector(".output");

console.log(currentDate);

switch (currentDate) {
  case 0:
    output.innerHTML = "Сьогодні Неділя";
    break;
  case 1:
    output.innerHTML = "Сьогодні Понеділок";
    break;
  case 2:
    output.innerHTML = "Сьогодні Вівторок";
    break;
  case 3:
    output.innerHTML = "Сьогодні Середа";
    break;
  case 4:
    output.innerHTML = "Сьогодні Четвер";
    break;
  case 5:
    output.innerHTML = "Сьогодні П.ятниця";
    break;
  case 6:
    output.innerHTML = "Сьогодні Субота";
    break;
}
