console.log('Lesson 03 starter loaded');

// Instructor TODO: 
// 1. Declare variables using var, let, const
var greeting = 'Hello world!'; // string variable, SHOULD avoid var
let count = 3; // number variable
const isActive = true; // boolean variable

// 2. Log their types with console.log(typeof …)
console.log('Type of greeting: ', typeof greeting);
console.log('Type of count: ', typeof count);
console.log('Type of isActive: ', typeof isActive);

// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
// alert, prompt, confirm
alert('Welcome to the JavaScript demo.');
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName} shall we continue the demo?`); // Interpolation with '`'
console.log(userName + ' chose to: ', continueDemo); // Concatenation with '+'

// Student TODO:
// Update line 19 to use interpolation


// 4. Manipulate values and observe results in the console
// paresInt() and toString()
const strNumber = '42';
const parsedNumber = parseInt(strNumber, 10); // There are other options like parseFloat(), Number(), etc.

console.log(`Parsed "${strNumber}" to ${typeof parsedNumber}`);
console.log(`Convert ${parsedNumber} back to ${typeof parsedNumber.toString()} `);

// 5. Simple arithmetic operations
const x = 10;
const y = 5;

console.log(`${x} + ${y} = `, x + y);
console.log(`${x} - ${y} = `, x - y);
console.log(`${x} * ${y} = `, x * y);
console.log(`${x} / ${y} = `, x / y);

// 6. Array and object example
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);

const person = { name: userName, age: parsedNumber };
console.log('Person object: ', person);

// Student TODO: 
// Prompt the user for their name and age
// Log a greeting message using the provided name and age