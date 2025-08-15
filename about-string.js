let name =new String("Tilak Ray");

console.log(name[1]);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(3));  // give the char at that index
console.log(name.indexOf('R')); // give the index of that char

console.log(name.substring(0,6));
console.log(name.slice(-8,4));   // accept negative values

// to remove unwanted space from string

let prac= new String("     hello     ");

console.log(prac.trim());

console.log(name.replace('Ray' , ' Ray Kurmi'));
 
console.log(name.includes('Ray'));    // finds if that string is on that given string or not (true, false)

console.log(name.split(' ')); // it split based on the given value as seprator and give u an array



