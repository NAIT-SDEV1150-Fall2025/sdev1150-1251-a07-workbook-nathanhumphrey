console.log('Lesson 04 starter loaded');

// Instructor TODO:
// 1. Simple if
const x = 5;
if (x > 0) {
  console.log('x is positive');
}

// 2. if-else
if (x % 2 == 0) {
  console.log('x is even');
} else {
  console.log('x is odd');
}

// 3. Nested if-else
if (x > 10) {
  console.log('x is greater than 10');
} else if (x < 0) {
  console.log('x is non-positive');
} else {
  console.log('x is between 1 and 10');
}

// 4. while loop
let count = 3;

while (count > 0) {
  console.log('Countdown:', count);
  count = count - 1;
}

// 5. do-while loop
let i = 0;

do {
  console.log('i is', i);
  i++;
} while (i < 3);

// 6. for loop
for (let j = 0; j < 3; j++) {
  console.log(`j = ${j}`);
}

// Student TODO:
// 7. Snippet with bugs for debugging practice
// Snippet with bugs for debugging practice - uncomment when ready
/*
const num = 10;

if (num < 5) { // Intentional bug: should be num > 5
  console.log('num is greater than 5');
} else {
  console.log('num is 5 or less');
}

for (let k = 0; k < 3; k = k - 1) { // Intentional bug: k should increment
  console.log(k);
}
*/
// 8. Debugging practice
