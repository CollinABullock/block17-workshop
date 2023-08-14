

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
// I'll use an arrow function again, as well as an if statement.  So I'll have the function only return the item if it's les than or equal to $5.
// Then I'll use filter combined with the variable initialized above to console log out the items that are $5 and under.

const print5 = (coffeeData) => {
  if (coffeeData.price <= 5) {
    return coffeeData.name;
  }
}

const itemsUnder5 = coffeeData.filter(print5);
console.log(itemsUnder5);

// Prompt 4
// Print an array of drinks that are priced at an even number.
// I'll do more or less exactly what I did last time, but instead of using an if statement to check if the price is lesser than or equal to 5, it'll check if it's even (with a modulus operator and s trict equality operater checking if it's zero.)

const printEven = (coffeeData) => {
  if (coffeeData.price % 2 === 0) {
    return coffeeData.name;
  }
}

const itemsEven = coffeeData.filter(printEven);
console.log(itemsEven);

// Prompt 5
// Print the total if you were to order one of every drink.
// Okay, first I need an array of all the prices.  I'll use a map function to print out all the prices.
// I'll used reduce to, ironically, not reduce but ADD all the prices together

const printPriceArray = (item) => {
  return item.price;
}

const priceArray = coffeeData.map(printPriceArray);
console.log(priceArray);

const printTotalPrice = (accumulator, currentValue) => {
  return accumulator + currentValue;
}

const allPrices = priceArray.reduce(printTotalPrice);
console.log(allPrices);

// Prompt 6
// Print an array with all the drinks that are seasonal.
// Okay, since we need to remove certain items from the array, filter them one might say, I'm gonna use filter!

const printSeasonal = (item) => {
  return item.seasonal === true;
  }

const printSeasonalVar = coffeeData.filter(printSeasonal);
console.log(printSeasonalVar);

// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"

const printBeans = (item) => {
  if (item.seasonal === true) {
  return item.name + (" with imported beans");
  }
}

const printBeansVar = coffeeData.map(printBeans);
console.log(printBeansVar);