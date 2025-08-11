//Date and Time

console.log(new Date()); // returns current date and time

console.log(new Date().toString()); // returns current date and time as a string

console.log(new Date().toISOString()); // returns current date and time in ISO format



console.log(new Date().toLocaleString()); // returns current date and time in local format

console.log(new Date().getFullYear()); // gets the current year

console.log(new Date().getMonth() + 1); // gets the current month (0-11, so we add 1)

console.log(new Date().getDate()); // gets the current day of the month (1-31)

console.log(new Date().getDay().toString()); // gets the current day of the week (0-6, where 0 is Sunday)

console.log(new Date().getHours()); // gets the current hour (0-23) 

console.log(new Date().getMinutes()); // gets the current minutes (0-59)

console.log(new Date().getSeconds()); // gets the current seconds 

console.log(new Date(2022, 0, 10).toDateString( )); // creates a new Date object for January 10, 2022

console.log(new Date("2023-01-01T04:05:00Z")); // creates a new Date object from a string in ISO format


