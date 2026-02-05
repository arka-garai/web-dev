//arithmetic operations
let addition = 5 + 5;
console.log("Addition: " + addition);
let subtraction = 10 - 3;
console.log("Subtraction: " + subtraction);     
let multiplication = 4 * 7;
console.log("Multiplication: " + multiplication);
let division = 20 / 32;
console.log("Division: " + division);   
let modulus = 10 % 3;
console.log("Modulus: " + modulus);
let exponentiation = 2 ** 3;
console.log("Exponentiation: " + exponentiation);   

//comparison operations / relational operations 
let num1 = 10;
let num2 = 20;
console.log("Is num1 equal to num2? " + (num1 == num2)); //false
console.log("Is num1 not equal to num2? " + (num1 != num2)); //true
console.log("Is num1 greater than num2? " + (num1 > num2)); //false     
console.log("Is num1 less than num2? " + (num1 < num2)); //true
console.log("Is num1 greater than or equal to num2? " + (num1 >= num2));//false
console.log("Is num1 less than or equal to num2? " + (num1 <= num2));//true

//strict equality and strict inequality
let strNum = "10";
console.log("Is num1 strictly equal to strNum? " + (num1 === strNum)); //false
console.log("Is num1 strictly not equal to strNum? " + (num1 !== strNum)); //true

//logical operations
let isLoggedIn = true;
let ispaid = false;
console.log("Is user logged in and paid? " + (isLoggedIn && ispaid)); //false
console.log("Is user logged in or paid? " + (isLoggedIn || ispaid));
console.log("Is user not logged in? " + (!isLoggedIn)); //false

//bitwise operations
let a = 5;
let b = 3;
console.log("Bitwise AND of a and b: " + (a & b));
console.log("Bitwise OR of a and b: " + (a | b));
console.log("Bitwise XOR of a and b: " + (a ^ b));
console.log("Bitwise NOT of a: " + (~a));   
console.log("Left shift a by 1: " + (a << 1));
console.log("Right shift a by 1: " + (a >> 1));

//typeof operator
console.log("Type of num1: " + typeof num1);            
console.log("Type of strNum: " + typeof strNum);        
console.log("Type of a: " + typeof a);  
console.log("Type of b: " + typeof b);  

//operator precedence
let result = 10 + 5 * 2;
console.log("Result of 10 + 5 * 2: " + result); //20
result = (10 + 5) * 2;
console.log("Result of (10 + 5) * 2: " + result); //30

//ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can the person vote? " + canVote);

//increment and decrement operators
let count = 0;
console.log("Initial count: " + count);
console.log("Count after post-increment: " + (count++));
console.log("Count after pre-increment: " + (++count));
console.log("Count after post-decrement: " + (count--));
console.log("Count after pre-decrement: " + (--count)); 

//string concatenation operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

//assignment operator
let score = 50;
console.log("Initial Score: " + score);     
score += 10;
console.log("Score after += 10: " + score); 
score -= 5;
console.log("Score after -= 5: " + score);  
score *= 2;
console.log("Score after *= 2: " + score);
score /= 4;
console.log("Score after /= 4: " + score);
score %= 3;
console.log("Score after %= 3: " + score);  
score **= 2;
console.log("Score after **= 2: " + score);

//comma operator
let x = (1, 2, 3);
console.log("Value of x using comma operator: " + x); //3   
