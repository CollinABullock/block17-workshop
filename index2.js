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
  return item.name;
} 

const drinkMenuArray = coffeeData.map(drinkMenu);
console.log(drinkMenuArray);

// Print an array of all the drinks under $5
function drinkMenu5(item) {
  if (item.price <= 5) {
    return item.name
  }
}

const drinkMenu5Array = coffeeData.filter(drinkMenu5);
console.table(drinkMenu5Array);

// print an array of evenly priced drinks

function drinkEven(item) {
  if (item.price % 2 === 0) {
    return item.name;
  }
}

const drinkEvenArray = coffeeData.filter(drinkEven);
console.table(drinkEvenArray);