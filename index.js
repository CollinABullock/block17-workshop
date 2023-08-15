

// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file
// b. Connect the coffee_data.js file to this index.js file.
// I'll keep adding all my variables up here so that they're in one place.

const coffeeData = require("./coffee_data_starter");

// Prompt 2:
// Print an array of all the drinks.
// I'll use an arrow function, with the const being print name, the parameter being item and then the function returning the value attached to the name key in each object.
// Then I'll use MAP to console table out an array specifically of said items.

const drinkArray = (item) => {
  return item.name;
};

console.log("Here is a list of all of our drinks:");
console.table(coffeeData.map(drinkArray));

// Prompt 3
// Print an array of drinks that cost 5 and under.
// I'll use an arrow function again, as well as an if statement.  So I'll have the function only return the item if it's les than or equal to $5.
// Then I'll use filter combined with the variable initialized above to console log out the items that are $5 and under.

function drinkArray5(item) {
  if (item.price <= 5) {
    return item.name
  }
}

console.log("The following is a list of items that cost $5 or less:")
console.table(coffeeData.filter(drinkArray5))

// Prompt 4
// Print an array of drinks that are priced at an even number.
// I'll do more or less exactly what I did last time, but instead of using an if statement to check if the price is lesser than or equal to 5, it'll check if it's even (with a modulus operator and s trict equality operater checking if it's zero.)

const drinkArrayEven = (item) => {
  if (item.price % 2 === 0) {
    return item.name;
  }
}

console.log("The following is a list of items that cost an even amount:")
console.table(coffeeData.filter(drinkArrayEven))

// Prompt 5
// Print the total if you were to order one of every drink.
// Okay, first I need an array of all the prices.  I'll use a map function to print out all the prices.
// I'll used reduce to, ironically, not reduce but ADD all the prices together

const drinkArrayVar = (item) => {
  return item.price
}

const drinkArrayMap = coffeeData.map(drinkArrayVar);

function drinkArrayReduce(acc, currentValue) {
    return acc + currentValue
}

const drinkTotal = drinkArrayMap.reduce(drinkArrayReduce);
console.log(`The total of all the drinks is $${drinkTotal}`)

// Prompt 6
// Print an array with all the drinks that are seasonal.
// I'm use filter to cut out all the items that are NOT seasonal.

const drinkArraySeasonal = (item) => {
  if (item.seasonal === true) {
    return item.name
  }
}

console.log("The following drinks are seasonal: ");
console.table(coffeeData.filter(drinkArraySeasonal))


// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"
// I'm gonna use a foreach function here.

const seasonalDrinks = (coffeeData.filter(drinkArraySeasonal));

const seasonalOnly = seasonalDrinks;

console.log("The following items are special for bean related reasons");
seasonalOnly.forEach((item) => {
  console.log(`${item.name} with imported beans`); 
});
