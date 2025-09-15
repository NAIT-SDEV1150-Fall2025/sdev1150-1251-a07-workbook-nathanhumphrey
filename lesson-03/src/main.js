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

// Student TODO: 
// Prompt the user for their name and age
// Log a greeting message using the provided name and age