// console.log((Math.random() * 1000) + 1); // random generate number between 0-1 but multiplying with 10 or any, it just shift 1 or the number multiplied to it on unit place, and by adding 1 it remove the chances to get 0.


// console.log(((Math.random() * 100) + 1 ).toFixed(0)); 

// console.log((Math.random() * 8) + 1);

// let age = '200'

// let num = console.log(typeof Number.parseInt(age));

// console.log(2 ** 2); 

// let sy1 = Symbol('123')
// let sy2 = Symbol('123')

// console.log(sy1 === sy2)

// let sy1 = '123'
// let sy2 = 123

// console.log(sy1 == sy2)

// console.log(Math.round(23.99))

// console.log(23.2321.toFixed(2))

// console.log( `My age is ${sy1}`)

// console.log(sy2 > 11 ? 'yes it is' : 'no its not')

function add(a,b)
{
    return a + b;
}

// console.log(add(1,2))

// const sub = function(a,b){
//     return a-b;
// }

// console.log(sub(1,2))

// const mul = (a,b) => {
//     return a *b;
// }

// console.log(mul(1,2))

// (function(){
//     console.log('yeah bby')     // it call by itself, it's syntax is (function(){......})(); 
// })();

// Next is method in object 

// const calculator = {
//     add : (a,b) => {
//         return a + b ;
//     },

//     sub : (a,b) => {
//         return a-b;
//     },

//     mul : (a,b) =>{
//         return a*b;
//     }
// }

// console.log(calculator.add(3,4));
// console.log(calculator.sub(3,4));
// console.log(calculator.mul(3,4));


// function doOperation(callback) {     // This is a function that takes another function as an argument (callback). function doOperation(callback) { ... }
//     return callback(5, 3);
// }

// console.log(doOperation(add))       

let num = 12.99
// console.log(typeof String(num))
// console.log(typeof num.toString())

// console.log(num.toFixed(5));
// console.log(num.toPrecision(5));
// console.log(num.toExponential(1));
// console.log(num.valueOf());

// console.log(Math.floor(4.9));

// console.log(Math.ceil(4.1));

// console.log(Math.trunc(4.9));


// console.log(Math.random() * 10 + 1 | 0); 

console.log(new Date())

console.log(new Date().toDateString())
console.log(new Date().toString())
console.log(new Date().toISOString())
console.log(new Date().toLocaleString())
console.log(new Date().toLocaleDateString())
console.log(new Date().getFullYear())
console.log(new Date().getDate())
console.log(new Date().getMonth()+1)
console.log(new Date(2023, 10, 10).toString())









