// 1. Function Declaration
function greet(name) {          // function functionName(parameter) { ... }
    
    return "Hello " + name;   
}

// 2. Function Expression
const add = function(a, b) {   // const variableName = function(parameter1, parameter2) { ... }
    // This is an anonymous function assigned to a variable (anonymous function is a function without a name) to access this function, we use the variable name like add(2, 3)
    return a + b;
};

// 3. Arrow Function
const multiply = (x, y) => {    // const variableName = (parameter1, parameter2) => { ... }
    // This is a concise way to write functions, especially useful for callbacks and functional programming. to access this function, we use the variable name like multiply(4, 2)
    return x * y;
};

// 4. Arrow Function (short syntax)
function square(x) {      // function functionName(parameter) { ... }
    return x * x;
}

// 5. Immediately Invoked Function Expression (IIFE)
(function() {                                // This is a function that runs immediately after it is defined. (function() { ... })();
    console.log("I run immediately!");
})();

// 6. Method in an Object
const calculator = {              // This is an object with a method
    subtract: function(a, b) {       // subtract: function(parameter1, parameter2) { ... } . this is a method of the object calculator to access this method, we use the object name like calculator.subtract(10, 5)
        return a - b;
    }
};

// 7. Callback Function
function doOperation(callback) {     // This is a function that takes another function as an argument (callback). function doOperation(callback) { ... }
    return callback(5, 3);
}

// Examples of using these functions
console.log(greet("John"));                    // Function Declaration
console.log(add(2, 3));                        // Function Expression
console.log(multiply(4, 2));                   // Arrow Function
console.log(square(5));                        // Short Arrow Function
console.log(calculator.subtract(10, 5));       // Method
console.log(doOperation(add));                 // Callback. this will call the add function with 5 and 3 as arguments, so it will return 8



// Modern JavaScript Concepts for React

// 1. Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;     

// 2. Spread Operator
const nums = [1, 2, 3];
const newNums = [...nums, 4];

// 3. Template Literals
const greeting = `Hello ${name}!`;

// 4. Default Parameters
const sayHi = (user = 'Guest') => `Hi ${user}`;

// 5. Array Methods
const items = [1, 2, 3];
const doubled = items.map(item => item * 2);
const filtered = items.filter(item => item > 1);

// 6. Promises
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data'), 1000);
    });
};

// 7. Async/Await
async function getData() {
    const result = await fetchData();
    return result;
}

// 8. Modules (typically in separate files)
const moduleFunction = () => 'Module';
export { moduleFunction };

// 9. Class Syntax
class Component {
    constructor(props) {
        this.props = props;
    }
    render() {
        return this.props;
    }
}