let productsList = ["apple", "banana", "grapes", "milk", "meat"];

function addProduct(product) {
  productsList.push(product);
  console.log(productsList);
}

function deleteProduct(product, array) {
  let indexProduct = null;
  array.forEach((element) => {
    if (product === element) {
      indexProduct = array.indexOf(product);
    }
  });
  array.splice(indexProduct, 1);
  console.log(array);
}
function showActualProductList(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

while (true) {
  let userAction = Number(
    prompt(
      "Оберіть дію: 1 - додавання товару, 2 - видалення товару, 3 - виведення списку"
    )
  );
  if (userAction === 1) {
    addProduct("bread");
  } else if (userAction === 2) {
    deleteProduct("banana", productsList);
  } else if (userAction === 3) {
    showActualProductList(productsList);
  } else {
    break;
  }
}
