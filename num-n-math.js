//number and maths

var num =  Number("100000.89");
console.log(num);

console.log(typeof num);

console.log(num.toString().length);   // shows the length of the string representation of the number

console.log(num.toFixed(2)); // rounds off the number to 2 decimal places

console.log(num.toPrecision(3)); // rounds off the number to 3 significant digits

console.log(num.toExponential(2)); // rounds off the number to 2 significant digits in exponential notation

console.log(num.valueOf()); // returns the primitive value of the number.

console.log(num.toLocaleString('en-IN')); // returns the string representation of the number.

console.log(num.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // formats the number as a currency string in US locale

// -------------------------------------------------

let num2 = 10;

console.log(Math.abs(-4)); // returns the absolute value of the number

console.log(Math.round(4.6)); // rounds off the number to the nearest integer
console.log(Math.ceil(4.1)); // rounds up the number to the nearest integer
console.log(Math.floor(4.9)); // rounds down the number to the nearest integer
console.log(Math.trunc(4.9)); // removes the decimal part of the number
console.log(Math.sign(-4)); // returns -1 if the number is negative, 1 if positive, and 0 if zero
console.log(Math.sqrt(16)); // returns the square root of the number
console.log(Math.pow(2, 3)); // returns 2 raised to the power of 3
console.log(Math.max(1, 2, 3)); // returns the maximum value from the list of numbers
console.log(Math.min(1, 2, 3)); // returns the minimum value from the list of numbers
console.log(Math.random()); // returns a random number between 0 and 1  
console.log(Math.random() * 10); // returns a random number between 0 and 10
console.log(Math.random() * 10 + 1); // returns a random number between 1 and 10    
console.log(Math.random() * 10 + 1 | 0); // returns a random integer between 1 and 10
