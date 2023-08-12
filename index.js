// Prompt 4
// Print an array of drinks that are priced at an even number.

// Prompt 5
// Print the total if you were to order one of every drink.

// Prompt 6
// Print an array with all the drinks that are seasonal.

// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"

// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file
// b. Connect the coffee_data.js file to this index.js file.
// I'll keep adding all my variables up here so that they're in one place.

const coffeeData = require("./coffee_data_starter");

// Prompt 2:
// Print an array of all the drinks.
// I'll use an arrow function, with the const being print name, the parameter being item and then the function returning the value attached to the name key in each object.
// Then I'll use MAP to console log out an array specifically of items.
// Console table looks nicer, but I don't think that counts as an array if you wanna be technical.  So I'll just print both.

const printName = (item) => {
  return item.name;
};

console.log(coffeeData.map(printName));
console.table(coffeeData.map(printName));

// Prompt 3
// Print an array of drinks that cost 5 and under.

const print5 = (item) => {
  return item.price <= 5;
}

const itemsUnder5 = coffeeData.filter(print5);
console.log(itemsUnder5);