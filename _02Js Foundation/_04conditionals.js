//check if a number is greater than another number
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else {
    console.log(num1 + " is not greater than " + num2);
}

//check if a varaiable is number or not
let score = 28;

if (typeof score === "number") {
    console.log("The score is a number.");
} else {
    console.log("The score is not a number.");
}

//check if a boolean value is true or false
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("User is logged in.");
}
else {
    console.log("User is not logged in.");
}

//check if an array is empty or not
let fruits = ["apple", "banana"];

if (fruits.length === 0) {
    console.log("The array is empty.");
} else {
    console.log("The array is not empty.");
}

