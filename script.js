console.log("hello world");

var name= "Tilak Ray";
console.log(name);

var age = "20";
console.log(parseInt(age));
//or
console.log(Number(age)); // 20 because Number converts the string to a number. it may convert the string to a number if it is a number 
console.log(Boolean(age)); // true because age is a non-empty string

// to use power
console.log(2 ** 3); // 8 because 2 to the power of 3 is 8

// use of symbol
const sym1 = Symbol("123");
const sym2 = Symbol("123");
console.log(sym1 === sym2); // false because sym1 and sym2 are two different symbols    

var sName = "Tilak Ray";
console.log(parseInt(sName)); // NaN because sName is not a number

console.log(true + true); // 2 because true is converted to 1
console.log(true + false); // 1 because true is converted to 1 and false to 0
console.log(false + false); // 0 because both are false


// weired behaviour of JS

var n1 = 0.2;
var n2 = 0.1;
console.log(n1 + n2); // 0.30000000000000004 because of floating point precision issues in JS
console.log((n1 + n2).toFixed(2)); // 0.30 because toFixed converts the number to a string with 2 decimal places

// equal to operator

console.log(5 == 5); // true because both are equal
console.log(5 == "5"); // true because JS converts the string to a number
console.log(5 === "5"); // false because === checks for both value and type
console.log(5 === 5); // true because both value and type are equal


var sName1= "tilak" ;
console.log(typeof sName1); // shows the type of the variable
console.log(sName1); // shows the value of the variable

console.log(isNaN(sName1)); // checks if the value is NaN (Not a Number)

if (5 == 4) {               // checks if the value is true or false
    console.log("true");
} else {
    console.log("false");
}


//concatenation
var name = "Tilak Ray";
var age = 20;
console.log("My name is " + name + " and my age is " + age);

// concatenation in modern way
console.log(`My name is ${name} and my age is ${age}`) // using template literals (backticks) for string interpolation

// type coercion ( it converts the type of the variable to the other type but shows different results based on the operation )
var num1 = 5;
var num2 = "10";
console.log(num1 + num2);
console.log(typeof (num1 + num2)); // 510 because JS converts num2 to number
console.log(num1 - num2);
console.log(typeof (num1 - num2)); // -5 because JS converts num2 to number


// ternary operator
var isAdult = age >= 18 ? "You are an adult" : "You are not an adult";  //expression ? value if true : value if false
console.log(isAdult); // You are an adult


// switch case
var day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}

// debugger;    
// do-while loop
    
do {
   var num = prompt("Enter a number");
    
} while (isNaN(num) || num < 0); // keeps asking for a number until a valid number is entered




// stack and heap memory
// stack memory is used for primitive data types (number, string, boolean, null, undefined, symbol) and function calls
// heap memory is used for non-primitive data types (objects, arrays, functions)    

// Example of stack and heap memory
var num = 5; // stack memory    
var num2 = num; // stack memory, num2 is a copy of num
console.log(num2); // 5 
num2 = 10; // stack memory, num2 is now 10, num is still 5
console.log(num); // 5  


var obj = { name: "Tilak" }; // heap memory
var obj2 = obj; // stack memory, obj2 is a reference to obj
console.log(obj2.name); // Tilak
obj2.name = "Ray"; // heap memory, obj2.name is now Ray, obj.name is also Ray
console.log(obj.name); // Ray
console.log(obj2); // { name: 'Ray' }  
console.log(obj); // { name: 'Ray' }

