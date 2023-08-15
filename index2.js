// 1. Clean the coffee_data.js file.

// All prices should be numbers.
// All items should be strings.
// Objects and properties should have commas separating them.
// Connect the coffee_data.js file to the index.js file.

// 2. Print an array of all the drinks on the menu.

// 3. Print an array of drinks that cost 5 and under.

// 4. Print an array of drinks that are priced at an even number.

// 5. Print the total if you were to order one of every drink.

// 6. Print an array with all the drinks that are seasonal.

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

// Connect the coffee data sheet to this sheet
const coffeeData = require("./coffee_data_starter.js");

// Print an array of all the drinks
function drinkMenu(item) {
  return [item.name];
} 

const drinkMenuArray = coffeeData.map(drinkMenu);
console.log(drinkMenuArray);

// Print an array of all the drinks under $5
function drinkMenu5(item) {
  if (item.price <= 5) {
    return [item.name] + " is under $5"
  }
}

const drinkMenu5Array = coffeeData.map(drinkMenu5);
console.table(drinkMenu5Array);

// print an array of evenly priced drinks

function drinkEven(item) {
  if (item.price % 2 === 0) {
    return [item.name] + " is evenly priced";
  }
}

const drinkEvenArray = coffeeData.map(drinkEven);
console.table(drinkEvenArray);

// print the total of all the prices

function drinkPrice(item) {
  return item.price;
}

const drinkPriceArray = coffeeData.map(drinkPrice);
console.log(drinkPriceArray);

function drinkPriceFunction(accumulator, currentValue) {
  return accumulator + currentValue;
}

const drinkPriceTotal = drinkPriceArray.reduce(drinkPriceFunction);
console.log(drinkPriceTotal);

const coolNumbers = [420, 911, 69, 84, 855, 80085];
coolNumbers.sort((b, a) => (b - a));
console.log(coolNumbers);

// Print an array of all the drinks that are seasonal

function drinksSeasonal(item) {
  if (item.seasonal === true) {
    return [item.name];
  }
}

const drinksSeasonalArray = coffeeData.map(drinksSeasonal);
console.log("did this work", drinksSeasonalArray);

// // 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

function printBeans(item) {
  if (item.seasonal === true) {
    return item.name + " with imported beans"
  }
}

const printBeansArray = coffeeData.map(printBeans);
console.log(printBeansArray);

const coffeeDataName = (item) => {
  if (item.seasonal === true) {
    return item.name;
  }
}

console.log(coffeeDataName(coffeeData));