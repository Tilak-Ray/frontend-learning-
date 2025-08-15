// let user = {                  // it's a non singleton object
//     name : "Tilak Ray",
//     age : 18,
    
// }

// const user1 = new Object();       // it's a singleton object

// console.log (user.name)         // access the object
// console.log (user["age"])           // another way to access the object

// user.greet = function(){                    // use to add attribute externally
//     console.log("hey there!!");
// }

// user.age = 15

// console.log(user);


// // Object.freeze(user); // it is use to freeze the object to be changed through the whole program


// user.access = () => {
//     console.log(` hello ${this.name}`);     // 'this' can access the inner element of the object where .acess is pointing 
// }

// console.log(user.access)



// const user2 = {
//     name: 'tilak',
//     fullName : {
//         firstName: 'tilak',
//         lastName: ' Ray',
//         nickName : {
//             name: 'golu-bhai'
//         }
//     }
// }

// console.log(user2.name)
// console.log(user2.fullName.nickName.name)           // use to access the deep objects


// let obj1 ={1 : 'a', 2: 'b'}
// let obj2 ={3: 'c', 4: 'd'}
// let obj3 ={ 5: 'e', 6: 'f'}

// let obj4 = Object.assign(obj1,obj2,obj3)  // help to combine 2-more objects on one

//  console.log(obj4)

//  let obj5 = {...obj1,...obj2,...obj3}   // it's a another way to combine 2 or more objects, called spread operator
//  console.log(obj5);



// let newUser = [
//     {
//        name: 'tilak',
//        age : 26
//     },
//     {
//         name : 'lola',
//         age :90
//     }

// ]

// to access the objects inside this array 

// console.log(newUser[1].name)
// console.log(newUser[1].age)

// console.log(Object.keys(newUser[1]));   // it gives ['name', 'age' ], keys of object {keys: values}
// console.log(Object.keys(newUser));      // it gives ['0', '1'], keys of array

// console.log(Object.values(newUser[1]));   // it gives [ 'lola', 90 ], the values of 2nd object

// console.log(Object.values(newUser));        //  [ { name: 'tilak', age: 26 }, { name: 'lola', age: 90 } ]

// console.log(newUser[1].hasOwnProperty('name')); // check if the object or array contain that element or not

// performing object destructuring

const entery = {            
   name : "tilak",
   age : 23

} ;

// without writing entry.name again n again, we can do this insteasd

const {name} = entery;        // const {keys} = obj_name; and we can use the key instead of whole address

console.log(name);  
 // or we can redefine the keys name


const {name : naam} = entery;    // now we can access the object by new key instance
 console.log(naam);   