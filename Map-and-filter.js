// about maps

const uMap = new Map();

uMap.set('IN', "india")
uMap.set('fr', "france")
// uMap.set('IN', "india")             // it holds unique value in fixed order so duplicate will be removed

// console.log(uMap);

// for (const mapcheck of uMap) {      // for of help to itrate the array, object or string ect as many element it has for(const itrator of Object-name)
//     console.log(mapcheck)
// }

// for (const [key, value] of uMap) {           // for of loop help to destructure of that map but it not work for the object
//     console.log(key , ':-', value)
// }


// for itrating the object we use for in

const obj = {
    js : "javascript",
    cpp : "c++"
}

// for (const key in obj) {     // it gave keys of object
//    console.log(key)
// }


// for (const key in obj) {     // it gave value of the object
//    console.log(obj[key])
// }

// same for array 


// now time for (for each function)

let arr = ['num1', 'num2', 'num3'];

//now

// arr.forEach( function(itemFromIndex){                               // we can use arrow function
//     console.log(itemFromIndex)
// } )

// arr.forEach( function(itemFromIndex, ind,arry){                             
//     console.log(itemFromIndex, ind, arry)
// } )

let arrCh= [
    {
        name : "Tilak"
    },
    {
        name : "lola"
        
    },
    {
        name : "gola"
    },
];

// now we can also access the object inside the array

// arrCh.forEach( (item)=> {

//     // here item pointing the object so we can treat this as object as preform operation like that

//     console.log(item.name)
// } )

// next and the last is filter 

// let arry1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let retNumIs = arry1.filter( (item) => item >= 5 );    // returns the value that satisfy the given condition

// console.log(retNumIs)

// let newNum = arry1.map( (itemArr) => itemArr *10)

// console.log(newNum)

// let newNum = arry1.map( (itemArr) => itemArr * 10).map( (item) =>  item + 1 )  // 1st map passes the array after opration to 2nd map

// let newNum = arry1.map( (itemArr) => itemArr * 10).map( (item) =>  item + 1 ).filter( (item) => item < 60 )

// console.log(newNum)

// now it's time for reduce function

let arry1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.reduce( (accmulator, currentValue) => ( accmulator + currentValue ), initialval)

let totVal = arry1.reduce( function( accmulator, currentVal) {       // it has accmulator and current value, everytime it sums on 0 to the currentval of array and stores on accmulator
     console.log(accmulator);
    //  console.log(currentVal); 
     
     return accmulator + currentVal;

},0 )   // here 0 is initial value for accmulator

console.log(totVal);
