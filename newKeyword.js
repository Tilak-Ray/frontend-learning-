var user = function(firstName, couserCount) {
   this.firstName = firstName;
   this.couserCount = couserCount;
   this.getCourse = function(){
    console.log(`here is ${this.couserCount}`);
   }


}

// the var user is used as blue print as class for the objects
// here in below we can see abtTilak became object as it called the user() function 
// this is just because of the new keyword used when we called the user function
var abtTilak = new user("tilak", 3);  // without new it return undefined

console.log(abtTilak);

var abtbauwa = new user("tilak", 3);

console.log(abtbauwa);