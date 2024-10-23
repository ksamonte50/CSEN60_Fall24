// console.log("hello world");
// alert('Hello, world!');
// window.document.write("<p>Welcome to CSEN 60!</p>");
// document.append("<p>This should come after the h1</p>");

/*
  Function to calculate the sum of two numbers.
  Inputs: a, b - numbers to be added.
  Output: returns the sum of a and b.
*/

// TODO: fix function

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

let x = 100;  // let x (declaration) = 100 (initialization)

if (true) {
    x = 200; // Same variable!
}
console.log(x); // Outputs: 200

// null != undefined
let y = null;
console.log(y);

// String
let greeting = "Hello, world!";
let response = `The time is ${new Date()}`;
console.log(response);

// Boolean & if/else
const age = 10;
if (age > 18) {
  console.log("You are of age")
} else {
  console.log(`You are not of age. Please wait ${18 - age} years`)
}

// Object
let person = {
  name: "John",
  age: 30,
  isStudent: false
};
console.log(person.age);
console.log(typeof(person)); // Outputs data type of given variable

// Alert (server vs. browser runtime)
alert("This is an alert box!");

// Strict equality
console.log(3 === '3'); // false

// Loose equality
console.log(3 == '3'); // true