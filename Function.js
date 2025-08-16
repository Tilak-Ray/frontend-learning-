// functions and their types

function greet() {      // function functionName() { ... }
    console.log('Hello world');
}
greet();


function add(a, b) {   
    console.log(a + b);
    return `this is the answer ${a + b}`; // returns the sum of a and b
}
// add(2, 3); // 5 


console.log('result:', add(2, 3)); // This will log 'result: undefined' because the function does not return a value

// ------------------------------------------------------------------

// defult parameters
function multiply(x = 1, y = 1) {    // function functionName(parameter1 = defaultValue, parameter2 = defaultValue) { ... }
    return x * y; // returns the product of x and y
}
console.log(multiply(2, 3)); // 6
console.log(multiply(2)); // 2
console.log(multiply()); // 1

// ------------------------------------------------------------------

// rest parameters

function sum(...numbers) {    // function functionName(...parameters) { ... }
    return numbers; 
}
console.log(sum(1, 2, 3, 5678, 786)); // [1, 2, 3]

//-------------------------------------------------

// function with object

// let info = {
//      name: "tilak",
//      age: 18
// }

function users(anyUser){
   return `name is ${anyUser.name} and the age is ${anyUser.age}`;
}


console.log(users({ name: "tilak", age: 18 })); // name is tilak and the age is 18 and same thing with array


const jood = (num1 , num2) => {              // this is known as explecite define function which must have return
    return num1 + num2;
}


const jood2 = (num1 , num2) => (num1 + num2)           // this is known as implecte define function


const objReturn = () => ({username : 'tilak'});         // it returns objects from calling 

console.log(objReturn());

const objReturn1 = () => {return {username : 'tilak'}};         // it returns objects from calling 


console.log(objReturn1());


// this IIFE
  
// ( () => (console.log("tialk")))()        // here 1st () is for fun.. difenation and 2nd one () is to call 

 ((name)=> (console.log(name)))("Tilak");         // can be used as normal function as we call the normal function