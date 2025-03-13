// Write your solution here!
// index.js

// Initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

// Appends a cat to the end of the array destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Appends a cat to the beginning of the array destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Removes the last cat from the array destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Removes the first cat from the array destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Appends a cat to the end of the array non-destructively
function appendCat(name) {
  return [...cats, name];
}

// Appends a cat to the beginning of the array non-destructively
function prependCat(name) {
  return [name, ...cats];
}

// Removes the last cat from the array non-destructively
function removeLastCat() {
  return cats.slice(0, -1);
}

// Removes the first cat from the array non-destructively
function removeFirstCat() {
  return cats.slice(1);
}

// Exporting functions for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
